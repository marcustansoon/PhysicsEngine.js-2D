import EventEmitter from "./EventEmitter.js";
import { SceneAnimator } from './SceneAnimator.js';

/*********************Utilities***********************/
const getDistance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

function rgbToHex(px) {
    return (px.r << 16) | (px.g << 8) | px.b;
}

function rgbToGray(pixel, lighten = 0.4) {
    let gray = Math.round(
        0.2126 * pixel.r +
        0.7152 * pixel.g +
        0.0722 * pixel.b
    );

    // Shift toward white
    gray = Math.round(gray + (255 - gray) * lighten);

    return (gray << 16) | (gray << 8) | gray;
}

function getTextColor({ r, g, b }, lighten = 0.4) {
    const luminance =
        0.2126 * r +
        0.7152 * g +
        0.0722 * b;

    // approximate resulting brightness after lightening
    const adjusted = luminance + (255 - luminance) * lighten;

    // dynamic threshold based on lightening
    const threshold = 180 + lighten * 30;

    return adjusted > threshold ? 0x222222 : 0xffffff;
}

/**
 * Scans pixel data and builds the color palette for the drawing canvas.
 *
 * Iterates over every pixel in raster order (top-left to bottom-right),
 * skipping fully transparent pixels (alpha === 0). Each distinct color is
 * assigned a number based on first appearance.
 *
 * @param {Array<Array<{r: number, g: number, b: number, a: number}>>} pixelData
 *   2D array of pixels, indexed as [row][column].
 *
 * @returns {{
 *   colorToNum: Map<string, number>,  // hex color → palette index (0-based)
 *   palette: string[],                // palette index → hex color
 *   totalPixels: number               // count of all non-transparent pixels
 * }}
 */
function buildPalette(pixelData) {
    const colorToNum = new Map();
    const palette = [];
    let totalPixels = 0;   // every non-transparent pixel
    for (const row of pixelData) {
        for (const px of row) {
            const c = rgbToHex(px);
            // Skip fully transparent
            if(px.a === 0) continue;
            totalPixels++;
            if (!colorToNum.has(c)) {
                colorToNum.set(c, palette.length);
                palette.push(c);
            }
        }
    }
    return { colorToNum, palette, totalPixels };
}

/**
 * One big Graphics that starts all-white. Tapping a tile reveals its
 * original color from pixelData. Reveal-only (never needs clear()).
 *
 * @param {number} width   number of tiles across (pixelData[0].length)
 * @param {number} height  number of tiles down   (pixelData.length)
 * @param {Array<Array<{r,g,b}>>} pixelData
 * @param {number} size    pixel size of each tile in screen units
 * @returns {PIXI.Graphics}
 */
function createInitialPixelGrid(pixelData, size = 8) {
    const width = pixelData[0].length;
    const height = pixelData.length;

    const g = new PIXI.Graphics();

    // initial white grid
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            // Ignore transparent pixel
            if(pixelData[y][x].a !== 0)
                g.rect(x * size, y * size, size, size).fill(rgbToGray(pixelData[y][x])); // rgbToHex(pixelData[y][x])
        }
    }

    return g;
}

/**
 * Paint-by-numbers grid: creates a centered number label per non-transparent
 * tile. Numbers are 1-based and map to palette entries (label N = palette[N-1]).
 * Transparent tiles get null, preserving [row][col] grid alignment with pixelData.
 *
 * NOTE: labels are NOT added to a container — caller must attach them.
 * NOTE: each label is a separate PIXI.Text; for large grids use
 *       PIXI.BitmapText (shared font atlas) instead.
 *
 * @returns {{
 *   numberGrid: (PIXI.Text | null)[][],
 *   palette: string[],                 // index → hex color
 *   colorToNum: Map<string, number>,   // hex color → 0-based index
 *   totalPixels: number                // non-transparent tile count
 * }}
 */
function createNumberedGrid(pixelData, size = 24) {
    const height = pixelData.length;
    const width = pixelData[0].length;
    const { colorToNum, palette, totalPixels } = buildPalette(pixelData);

    const numberGrid = [];

    // white tiles with light borders (single Graphics for all)
    // const g = new PIXI.Graphics();
    // for (let y = 0; y < height; y++) {
    //     for (let x = 0; x < width; x++) {
    //         g.rect(x * size, y * size, size, size)
    //             .fill(0xffffff)
    //             .stroke({ width: 1, color: 0xcccccc });
    //         }
    // }
    // container.addChild(g);

    // number label centered on each tile
    // const style = new PIXI.TextStyle({ fontSize: Math.floor(size * 0.5), fill: 0x333333 });
    for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
            // Check for transparent pixel
            if (pixelData[y][x].a === 0) {
                row.push(null); // Keep the spot empty to preserve the 2D grid structure
                continue;
            }
            const num = colorToNum.get(rgbToHex(pixelData[y][x])) + 1; // 1-based
            const fill = getTextColor(pixelData[y][x]);
            const label = new PIXI.Text({
                text: String(num),
                style: new PIXI.TextStyle({
                    fontSize: Math.floor(size * 0.5),
                    fill
                })
            });
            //const label = new PIXI.Text({ text: String(num), style }); // v7: new PIXI.Text(String(num), style)
            label.anchor.set(0.5);
            label.x = x * size + size / 2;
            label.y = y * size + size / 2;
            
            row.push(label);
        }
        numberGrid.push(row);
    }
    
    return { numberGrid, palette, colorToNum, totalPixels };
}

function makeColorBolder(hex, factor = 1.2) {
    let r = (hex >> 16) & 0xff;
    let g = (hex >> 8) & 0xff;
    let b = hex & 0xff;

    r = Math.round(Math.min(255, r * factor));
    g = Math.round(Math.min(255, g * factor));
    b = Math.round(Math.min(255, b * factor));

    return (r << 16) | (g << 8) | b;
}

// 1. Get the canvas element and its 2D context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

async function loadImageUsingCanvas(imageURL) {
    return new Promise((resolve, reject) => {
        const pixelData = [];

        // 2. Create a new Image object
        const img = new Image();
        img.crossOrigin = "anonymous";

        // 3. Define what happens once the image loads
        img.onload = () => {
            // 5. Set canvas size to match image size
            canvas.width = img.width;
            canvas.height = img.height;

            // Draws the image at coordinate (0,0) on the canvas
            ctx.drawImage(img, 0, 0); 

            // 5. Get the pixel data for the entire image
            // getImageData(startX, startY, width, height)
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            
            // The data is stored in imageData.data (a Uint8ClampedArray)
            // console.log(imageData.data); 

            // 7. Extract all the pixel data
            for(let y = 0; y < canvas.height; y++) {
                const temp = [];
                for(let x = 0; x < canvas.width; x++) {
                    temp.push(getPixelColor(imageData, x, y));
                }
                pixelData.push(temp);
            }

            resolve(pixelData);
        };

        // 4. Set the source URL (this triggers the download)
        img.src = imageURL;
    });
}

// Function to read the pixel data (rgba)
function getPixelColor(imageData, x, y) {
    const width = imageData.width;
    const index = (y * width + x) * 4;

    const r = imageData.data[index];     // Red
    const g = imageData.data[index + 1]; // Green
    const b = imageData.data[index + 2]; // Blue
    const a = imageData.data[index + 3]; // Alpha

    return { r, g, b, a };
}

class LoadingScene {
    constructor(app) {
        this.app = app;
        this.type = "loading-scene";
        this.container = new PIXI.Container();
        this.objects = [];
        this.isDestroyed = false;
        this.loadResources();
    }

    update(delta) {

    }

    async loadResources() {
        await PIXI.Assets.load([
            {
                alias: "drag",
                src: "drag.png"
            },
            // {
            //     alias: "color",
            //     src:
            //     "color.png"
            // },
        ]);
        
        this.setCompletion();
    }

    setCompletion() {
        this.isComplete = true;
        console.log('done');
    }

    show() {
        this.app.stage.addChild(this.container);
    }

    hide() {
        this.app.stage.removeChild(this.container);
    }

    destroy() {
        this.objects.forEach((obj) => {
            this.container.removeChild(obj);
            // Remove all event listeners
            obj.off();

            // Destroy and free memory
            obj.destroy({ children: true });
        });
        this.objects = [];
        this.isDestroyed = true;
    }
}

// let isToolSelected = false;

class GameScene {
    constructor(app) {
        this.app = app;
        this.type = "game-scene";

        // Main container
        this.container = new PIXI.Container();
        // Object container
        this.objContainer = new PIXI.Container();

        this.objects = [];
        this.isDestroyed = false;
        
        // Create overlay
        const overlay = new PIXI.Graphics();
        overlay.rect(0, 0, 800, 800).fill(0x0000ff);

        overlay.alpha = 1;
        overlay.x = 0;
        overlay.y = 0;
        
        overlay.eventMode = 'static';
        overlay.visible = true;
        this.overlay = overlay;
        
        this.container.addChild(overlay);
        this.container.addChild(this.objContainer);
        
        // Create input controller
        this.inputController = new InputController(this.overlay, this.objContainer);
    }

    async start(imageURL) {
        const tileSize = 32;

        // Create white canvas
        this.drawingCanvas = await DrawingCanvas.create(imageURL, tileSize);
        this.drawingCanvas.on('puzzle-completion', this.#onCompletion);

        // Center the image
        const canvasW = this.drawingCanvas.imageWidth * tileSize;
        const canvasH = this.drawingCanvas.imageHeight * tileSize;
        this.drawingCanvas.container.pivot.set(canvasW / 2, canvasH / 2);
        this.drawingCanvas.container.x = this.app.screen.width / 2;
        this.drawingCanvas.container.y = this.app.screen.height / 2;

        // Add to Object scene (Draggable)
        this.objContainer.addChild(this.drawingCanvas.container);

        // Create bottom slider
        this.bottomSlider = new BottomSlider(this.app, this.drawingCanvas.colorToNum, this.drawingCanvas.palette);
        this.bottomSlider.on("update-color-selection", this.#colorSelectionHandler);
        // Add to scene
        this.container.addChild(this.bottomSlider.container);

        // Add the new mini tool slider above it
        this.toolSlider = new ToolSlider(this.app);
        this.toolSlider.on("update-tool-selection", this.#toolSelectionHandler);
        // Add to scene
        this.container.addChild(this.toolSlider.container);

        // Effect class
        this.fx = new SceneAnimator(this.app, this.objContainer);
    }

    #onCompletion = () => {
        setTimeout(()=>{
            this.fx.sequence([
                d => this.fx.zoomToFit(d, 0.9, 1500),
                d => this.fx.shake(d, 10, 350),
            ], this.#onEffectDone);
        }, 1000);
    }

    #onEffectDone = () => {
        console.log('effect done');
    }

    #colorSelectionHandler = (colorID) => {
        console.log('selected ' + colorID);
        // Set drawing mode ON
        this.drawingCanvas.setDrawingMode(true);
        // Set selected color
        this.drawingCanvas.setColor(colorID);
        // Set tool as 'color'
        this.drawingCanvas.setTool("color");
        this.toolSlider.clearAllSelections();
    }

    #toolSelectionHandler = (selectedToolID) => {
        // Enable / disable drawing mode based on tool selected
        if(selectedToolID === 'drag') {
            this.drawingCanvas.setDrawingMode(false);
        } else {
            this.drawingCanvas.setDrawingMode(true);
        }

        // Set tool as ('drag' / 'bomb' / 'flood')
        this.drawingCanvas.setTool(selectedToolID);
        console.log(selectedToolID)

        // Remove any selected color
        this.bottomSlider.removeSelectedItem();
    }

    update(delta) {
        this.fx?.update(delta * (1000 / 60));

    }

    show() {
        this.app.stage.addChild(this.container);
    }

    hide() {
        this.app.stage.removeChild(this.container);
    }

    destroy() {
        if (this.isDestroyed) return;
        this.isDestroyed = true;

        this.inputController?.destroy();
        this.inputController = null;

        this.toolSlider?.off({ event: "update-tool-selection", fn: this.#toolSelectionHandler });
        this.toolSlider?.destroy();
        this.toolSlider = null;

        this.bottomSlider?.off({ event: "update-color-selection", fn: this.#colorSelectionHandler });
        this.bottomSlider?.destroy();
        this.bottomSlider = null;

        this.drawingCanvas.off({ event: "puzzle-completion", fn: this.#onCompletion });
        this.drawingCanvas?.destroy();
        this.drawingCanvas = null;

        // Catches overlay + objContainer (and anything forgotten)
        this.container.destroy({ children: true });
        this.container = null;
        this.objContainer = null;
        this.overlay = null;

        this.objects = null;
        this.app = null;
    }
}

class DrawingCanvas extends EventEmitter {
    constructor({ initialCanvas, pixelData, width, height }, tileSize) {
        super();

        this.tileSize = tileSize;
        this.revealed = new Set();
        this.container = new PIXI.Container();

        this.initialCanvas = initialCanvas;
        this.pixelData = pixelData;
        this.imageWidth = width;
        this.imageHeight = height;

        // Add to scene
        this.container.addChild(initialCanvas);

        // Create numbering grids
        const { numberGrid, palette, colorToNum, totalPixels } = this.#createNumberedGrid(pixelData, tileSize);

        // Total pixels to be colored
        this.totalPixels = totalPixels;

        // Set reference
        this.palette = palette;
        this.colorToNum = colorToNum;

        this.selectedColor = null;
        this.selectedToolID = 'drag';

        for (const row of numberGrid) {
            for (const tile of row) {
                if (tile !== null) this.container.addChild(tile);
            }
        }
        this.numberGrid = numberGrid;

        this.initialCanvas.cursor = 'pointer';
        this.initialCanvas.on('pointertap', this.#drawWhiteCanvasTapHandler);
        this.initialCanvas.on('pointermove', this.#drawWhiteCanvasMoveHandler);

        // Init (Drag mode)
        this.setDrawingMode(false);

        this.pendingTimeouts = new Set();
    }

    static async create(imageURL, tileSize) {
        // Load image and return pixel data
        const pixelData = await loadImageUsingCanvas(imageURL);
        const width = pixelData[0].length;
        const height = pixelData.length;
        
        // Create white canvas
        const initialCanvas = createInitialPixelGrid(pixelData, tileSize);

        return new DrawingCanvas({ initialCanvas, pixelData, width, height }, tileSize);
    }

    setDrawingMode(boolean) {
        if(boolean){
            this.initialCanvas.eventMode = "static";
        } else {
            this.initialCanvas.eventMode = "none";
            this.selectedColor = null;
        }
    }

    setTool(selectedToolID) {
        this.selectedToolID = selectedToolID;
    }

    #findKeyByValue(map, value) {
        for (const [k, v] of map) {
            if (v === value) return k;
        }
        return undefined;
    }

    setColor(colorID) {
        this.selectedColor = this.#findKeyByValue(this.colorToNum, colorID);
    }

    #createNumberedGrid(pixelData, size) {
        return createNumberedGrid(pixelData, size);
    }

    #drawWhiteCanvasMoveHandler = (e) => {
        const pos = e.getLocalPosition(this.initialCanvas);

        if (this.selectedToolID === "color") {
            // Single tile, color must match
            const col = Math.floor(pos.x / this.tileSize);
            const row = Math.floor(pos.y / this.tileSize);
            if (col < 0 || row < 0 || col >= this.imageWidth || row >= this.imageHeight) return;
            this.#revealTile(col, row, { checkColor: true });
        }
    }

    #drawWhiteCanvasTapHandler = (e) => {
        const pos = e.getLocalPosition(this.initialCanvas);

        if (this.selectedToolID === "bomb") {
            console.log('bomb!!');

            // Circular brush, any color
            const radius = this.brushRadius ?? 100;   // 100px diameter

            const colStart = Math.max(0, Math.floor((pos.x - radius) / this.tileSize));
            const colEnd   = Math.min(this.imageWidth  - 1, Math.floor((pos.x + radius) / this.tileSize));
            const rowStart = Math.max(0, Math.floor((pos.y - radius) / this.tileSize));
            const rowEnd   = Math.min(this.imageHeight - 1, Math.floor((pos.y + radius) / this.tileSize));

            for (let row = rowStart; row <= rowEnd; row++) {
                for (let col = colStart; col <= colEnd; col++) {
                    // Circular check: tile center inside the radius?
                    const cx = col * this.tileSize + this.tileSize / 2;
                    const cy = row * this.tileSize + this.tileSize / 2;
                    if (Math.hypot(cx - pos.x, cy - pos.y) > radius) continue;

                    this.#revealTile(col, row, { checkColor: false });
                }
            }
        } else if (this.selectedToolID === "flood") {
            console.log('flood!!');

            const col = Math.floor(pos.x / this.tileSize);
            const row = Math.floor(pos.y / this.tileSize);
            if (col < 0 || row < 0 || col >= this.imageWidth || row >= this.imageHeight) return;
            this.#floodReveal(col, row, { matchSelected: false, ripple: true });
        } else if (this.selectedToolID === "laser") {
            const col = Math.floor(pos.x / this.tileSize);
            const row = Math.floor(pos.y / this.tileSize);
            if (col < 0 || row < 0 || col >= this.imageWidth || row >= this.imageHeight) return;

            this.#verticalReveal(col, row);
            if (col + 1 < this.imageWidth) this.#verticalReveal(col + 1, row);
            if (col - 1 >= 0)              this.#verticalReveal(col - 1, row);
        }
    }

    /**
     * Reveal the connected region of same-colored tiles around (col,row).
     * matchSelected: only fire if the tapped color is the player's selected color
     * ripple: reveal ring-by-ring outward instead of all at once
     */
    #floodReveal(startCol, startRow, { matchSelected = true, ripple = true } = {}) {
        const targetColor = rgbToHex(this.pixelData[startRow][startCol]);
        if (matchSelected && targetColor !== this.selectedColor) return;

        // BFS over same-color neighbors, grouping tiles by distance from tap
        const visited = new Set([startRow * this.imageWidth + startCol]);
        const queue = [[startCol, startRow, 0]];
        const rings = [];                       // rings[d] = tiles at BFS depth d
        let head = 0;                           // index pointer — no O(n) shift()

        while (head < queue.length) {
            const [col, row, d] = queue[head++];
            (rings[d] ??= []).push([col, row]);

            for (const [nc, nr] of [[col+1,row],[col-1,row],[col,row+1],[col,row-1]]) {
                if (nc < 0 || nr < 0 || nc >= this.imageWidth || nr >= this.imageHeight) continue;
                const key = nr * this.imageWidth + nc;
                if (visited.has(key)) continue;
                if (rgbToHex(this.pixelData[nr][nc]) !== targetColor) continue;
                visited.add(key);
                queue.push([nc, nr, d + 1]);
            }
        }

        if (!ripple) {
            for (const ring of rings)
                for (const [c, r] of ring) this.#revealTile(c, r, { checkColor: false });
            return;
        }
        // ripple: one ring every 35ms, spreading out from the tap point
        rings.forEach((ring, d) => {
            const id = setTimeout(() => {
                this.pendingTimeouts.delete(id);
                for (const [c, r] of ring) this.#revealTile(c, r, { checkColor: false });
            }, d * 35);
            this.pendingTimeouts.add(id);
        });
    }
    
    #revealTile(col, row, { checkColor }) {
        const key = row * this.imageWidth + col;
        if (this.revealed.has(key)) return;

        const tile = this.numberGrid[row][col];
        if (!tile) return;

        const color = rgbToHex(this.pixelData[row][col]);
        if (checkColor && this.selectedColor !== color) return;

        this.revealed.add(key);
        tile.visible = false;
        this.initialCanvas.rect(col * this.tileSize, row * this.tileSize,
                                this.tileSize, this.tileSize).fill(color);

        if (this.revealed.size === this.totalPixels) {
            this.emit("puzzle-completion");
        }
    }

    /**
     * Reveal the tapped tile, then spread one tile up and one tile down
     * per step until the column is filled.
     */
    #verticalReveal(startCol, startRow, { checkColor = false, stepMs = 30 } = {}) {
        const maxD = Math.max(startRow, this.imageHeight - 1 - startRow);

        for (let d = 0; d <= maxD; d++) {
            const id = setTimeout(() => {
                this.pendingTimeouts.delete(id);
                const up = startRow - d;
                const down = startRow + d;
                if (up >= 0) this.#revealTile(startCol, up, { checkColor });
                if (down < this.imageHeight && down !== up)
                    this.#revealTile(startCol, down, { checkColor });
            }, d * stepMs);
            this.pendingTimeouts.add(id);
        }
    }

    destroy() {
        this.clear(); // wipe all EventEmitter subscriptions
        
        for (const id of this.pendingTimeouts) clearTimeout(id);
        this.pendingTimeouts.clear();
        this.pendingTimeouts = null;
        this.initialCanvas?.off('pointertap', this.#drawWhiteCanvasTapHandler);
        this.initialCanvas?.off('pointermove', this.#drawWhiteCanvasMoveHandler);
        this.revealed.clear();
        this.revealed = null;
        this.container.removeFromParent();
        this.container.destroy({ children: true });
        this.container = null;
    }
}

class ToolSlider extends EventEmitter {
    constructor(app) {
        super();

        this.app = app;
        this.container = new PIXI.Container();
        this.itemsContainer = new PIXI.Container();

        this.sliderHeight = 60; // Mini slider height
        this.bottomSliderHeight = 120; // Needs to sit on top of the BottomSlider (120px)

        // Create a white bg (full width)
        // this.background = new PIXI.Graphics();
        // this.updateBackground();

        // this.container.addChild(this.background);
        this.container.addChild(this.itemsContainer);

        // Position it right above the bottom slider
        this.container.y = this.app.screen.height - this.bottomSliderHeight - this.sliderHeight;
        this.container.eventMode = 'static';

        // Create a list of tools
        this.toolContainers = this.createItems();

        // Add to scene
        this.toolContainers.forEach(tool => {
            this.itemsContainer.addChild(tool);
        });

        // Setup listeners
        this.setupListeners();

        // Init
        this.#updateSelections('drag');
    }

    updateBackground() {
        this.background.clear();
        this.background.rect(0, 0, this.app.screen.width, this.sliderHeight).fill(0xffffff);

        this.container.hitArea = new PIXI.Rectangle(0, 0, this.app.screen.width, this.sliderHeight);
    }

    createItems() {
        // Map the buttons: Drag sets isToolSelected to false, Color sets it to true
        const tools = [
            { id: 'drag', label: 'Drag', textureName: 'drag' },
            { id: 'bomb', label: 'Bomb', textureName: 'drag' },
            { id: 'flood', label: 'Flood', textureName: 'drag' },
            { id: 'laser', label: 'Laser', textureName: 'drag' },
        ];

        const itemWidth = 44;
        const itemHeight = 44;
        const spacing = 15;

        const toolContainers = [];

        tools.forEach((toolData, index) => {
            const item = new PIXI.Container();
            item.x = spacing + index * (itemWidth + spacing);
            item.y = (this.sliderHeight - itemHeight) / 2;

            item.id = toolData.id;

            // Background block for each tool (gives active selection tint)
            const bg = new PIXI.Graphics();
            this.#drawItemBg(bg, itemWidth, itemHeight, false);
            item.addChild(bg);
            item.bg = bg;

            // Add the pre-loaded image sprite
            try {
                const sprite = PIXI.Sprite.from(toolData.textureName);
                sprite.width = itemWidth - 12;
                sprite.height = itemHeight - 12;
                sprite.x = 6;
                sprite.y = 6;
                item.addChild(sprite);
            } catch (e) {
                // Fallback text if sprite texture fails
                const fallbackText = new PIXI.Text({
                    text: toolData.label,
                    style: { fontSize: 11, fill: 0x333333 }
                });
                fallbackText.anchor.set(0.5);
                fallbackText.x = itemWidth / 2;
                fallbackText.y = itemHeight / 2;
                item.addChild(fallbackText);
            }
            
            toolContainers.push(item);
        });

        return toolContainers;
    }

    #drawItemBg(graphics, width, height, isActive) {
        graphics.clear();
        graphics.roundRect(0, 0, width, height, 8);
        if (isActive) {
            graphics.fill(0xe0f7fa).stroke({ width: 2, color: 0x00bcd4 });
        } else {
            graphics.fill(0xf5f5f5).stroke({ width: 1, color: 0xcccccc });
        }
    }

    // Refresh visual active states
    #updateSelections(selectedToolID) {
        this.itemsContainer.children.forEach((item, index) => {
            if (item.bg) {
                const isActive = selectedToolID === item.id;
                this.#drawItemBg(item.bg, 44, 44, isActive);
            }
        });
    }

    clearAllSelections() {
        this.itemsContainer.children.forEach((item, index) => {
            if (item.bg) {
                this.#drawItemBg(item.bg, 44, 44, false);
            }
        });
    }

    setupListeners() {
        // Resize handler
        this.resizeHandler = () => {
            this.container.y = this.app.screen.height - this.bottomSliderHeight - this.sliderHeight;
            this.updateBackground();
        };
        window.addEventListener('resize', this.resizeHandler);

        // Tool selection handler
        this.toolContainers.forEach(tool => {
            tool.eventMode = 'static';
            tool.cursor = 'pointer';
            tool.on('pointerup', () => {
                this.#updateSelections(tool.id);
                this.emit("update-tool-selection", tool.id);
            });
        });
    }

    destroy() {
        window.removeEventListener('resize', this.resizeHandler);
        this.resizeHandler = null;

        this.clear(); // wipe all EventEmitter subscriptions

        this.container.removeFromParent();
        this.container.destroy({ children: true });
        this.container = null;
    }
}

class BottomSlider extends EventEmitter {
    constructor(app, colorToNum, palette) {
        super();

        this.app = app;
        this.colorToNum = colorToNum;
        this.palette = palette;

        this.container = new PIXI.Container();
        this.itemsContainer = new PIXI.Container();

        this.isItemSelected = false;

        this.sliderHeight = 120;

        this.background = new PIXI.Graphics();
        this.updateBackground();

        this.container.addChild(this.background);
        this.container.addChild(this.itemsContainer);

        this.container.y = this.app.screen.height - this.sliderHeight;

        this.container.eventMode = 'static';

        // state
        this.isPointerDown = false;
        this.isDragging = false;
        this.pointerDownPos = null;
        this.dragStartX = 0;

        this.resizeTimeout = null;

        this.createItems(this.palette);
        this.setupListeners();
    }

    selectItem(id) {
        this.removeSelectedItem();
        this.isItemSelected = true;
        this.itemsContainer.children.forEach(child => {
            if(child.type === 'Outline' && child.id === id) {
                child.visible = true;
            }
        });
    }

    removeSelectedItem() {
        if(!this.isItemSelected) return;
        this.isItemSelected = false;
        this.itemsContainer.children.forEach(child => {
            if(child.type === "Outline") {
                child.visible = false;
            }
        });
    }

    setupListeners() {
        this.container.on('pointerdown', this.onPointerDown);
        this.container.on('globalpointermove', this.onPointerMove);
        this.container.on('pointerup', this.onPointerUp);
        this.container.on('pointerupoutside', this.onPointerUp);

        this.resizeHandler = () => {
            clearTimeout(this.resizeTimeout);

            this.resizeTimeout = setTimeout(() => {
                this.onResize();
            }, 100);
        };

        window.addEventListener('resize', this.resizeHandler);
    }

    removeListeners() {
        this.container.off('pointerdown', this.onPointerDown);
        this.container.off('globalpointermove', this.onPointerMove);
        this.container.off('pointerup', this.onPointerUp);
        this.container.off('pointerupoutside', this.onPointerUp);

        window.removeEventListener('resize', this.resizeHandler);

        clearTimeout(this.resizeTimeout);

        this.itemsContainer.children.forEach(item => {
            item.removeAllListeners();
        });
    }

    onResize = () => {
        this.container.y = this.app.screen.height - this.sliderHeight;
        this.updateBackground();
    }

    updateBackground() {
        this.background.clear();
        this.background.rect(0, 0, this.app.screen.width, this.sliderHeight).fill(0xffffff);

        this.container.hitArea = new PIXI.Rectangle(
            0, 0, this.app.screen.width, this.sliderHeight
        );
    }

    createItems(colors) {
        const itemWidth = 70;
        const itemHeight = 70;
        const spacing = 20;

        for (let i = 0; i < colors.length; i++) {
            const item = new PIXI.Graphics();

            // Set ID
            item.id = i;
            item.type = "Color";

            item.roundRect(0, 0, itemWidth, itemHeight, 10).fill(colors[i]);

            item.alpha = 1;

            item.x = spacing + i * (itemWidth + spacing);
            item.y = (this.sliderHeight - itemHeight) / 2;

            item.eventMode = 'static';
            item.cursor = 'pointer';

            item.on('pointerup', () => {
                if (this.isDragging) return;

                // console.log(`Selected item ${i}`);
                this.selectItem(item.id);

                item.alpha = 0.5;

                setTimeout(() => {
                    if (item.parent) {
                        item.alpha = 1;
                    }
                }, 200);

                this.emit("update-color-selection", item.id)
            });
            
            this.itemsContainer.addChild(item);

            // Add number label to color item based on colorToNum
            const num = (this.colorToNum.get(colors[i]) ?? i) + 1;
            const r = (colors[i] >> 16) & 0xff;
            const g = (colors[i] >> 8) & 0xff;
            const b = colors[i] & 0xff;
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            const textFill = brightness >= 128 ? 0x000000 : 0xffffff;

            // Create the label text
            const label = new PIXI.Text({
                text: String(num),
                style: {
                    fontSize: 24,
                    fill: textFill,
                    fontWeight: 'bold'
                }
            });
            label.id = i;
            label.type = "Label";
            label.anchor.set(0.5);
            label.x = item.x + itemWidth / 2;
            label.y = item.y + itemHeight / 2;
            label.eventMode = 'none';
            this.itemsContainer.addChild(label);

            // Add outline
            const outline = new PIXI.Graphics();
            outline.id = i;
            outline.type = "Outline";
            outline.roundRect(0, 0, itemWidth, itemHeight, 10);
            outline.stroke({ width: 5, color: 0xffffff, alignment: 1 }); // outer white
            outline.roundRect(2, 2, itemWidth - 4, itemHeight - 4, 9);
            outline.stroke({ width: 3, color: 0x000000, alignment: 0 }); // inner black, inside the path
            outline.visible = false;
            outline.x = item.x;
            outline.y = item.y;
            this.itemsContainer.addChild(outline);

            // Add last item
            if(i === colors.length - 1){
                const lastItem = new PIXI.Graphics();
                lastItem.roundRect(0, 0, spacing, itemHeight, 10).fill(0xffffff);
                lastItem.alpha = 0;

                lastItem.x = (i + 1) * (itemWidth + spacing);
                lastItem.y = (this.sliderHeight - itemHeight) / 2;
                this.itemsContainer.addChild(lastItem);
            }
        }
    }

    onPointerDown = (event) => {
        this.isPointerDown = true;
        this.isDragging = false;

        this.pointerDownPos = event.global.clone();
        this.dragStartX = this.itemsContainer.x;
    }

    onPointerMove = (event) => {
        if (!this.isPointerDown) return;

        const currentPos = event.global;
        const dx = currentPos.x - this.pointerDownPos.x;

        if (Math.abs(dx) > 5) {
            this.isDragging = true;
        }

        if (!this.isDragging) return;

        let newX = this.dragStartX + dx;

        const maxScroll = 0;
        const minScroll = Math.min(
            0,
            this.app.screen.width - this.itemsContainer.width - 20
        );

        this.itemsContainer.x = Math.max(minScroll, Math.min(maxScroll, newX));
    }

    onPointerUp = () => {
        this.isPointerDown = false;
        this.isDragging = false;
    }

    destroy() {
        if (this.isDestroyed) return;
        this.isDestroyed = true;

        this.removeListeners();

        this.clear(); // wipe EventEmitter subscriptions (e.g. scene's "update-color-selection" handler)

        this.container.removeFromParent();
        this.container.destroy({ children: true });

        this.app = null;
        this.container = null;
        this.itemsContainer = null;
        this.background = null;
        this.pointerDownPos = null;
        this.resizeHandler = null;
        this.resizeTimeout = null;
    }
}

class InputController {
    constructor(overlay, internalContainer) {
        this.overlay = overlay;
        this.internalContainer = internalContainer;

        this.activePointers = new Map();

        this.currentContainerPos = null;
        this.pinchState = null;

        this.setupListeners();
    }

    setupListeners() {
        this.overlay.on('pointerdown', this.onPointerDown);
        this.overlay.on('pointermove', this.onPointerMove);
        this.overlay.on('pointerup', this.onPointerUp);
        this.overlay.on('pointerout', this.onPointerUp);
        this.overlay.on('wheel', this.onWheel);
    }
    
    removeListeners() {
        this.overlay.off('pointerdown', this.onPointerDown);
        this.overlay.off('pointermove', this.onPointerMove);
        this.overlay.off('pointerup', this.onPointerUp);
        this.overlay.off('pointerout', this.onPointerUp);
        this.overlay.off('wheel', this.onWheel);
    }

    zoomAt(screenX, screenY, newScale) {
        newScale = Math.max(0.1, Math.min(newScale, 10));

        const localX =
            (screenX - this.internalContainer.x) /
            this.internalContainer.scale.x;

        const localY =
            (screenY - this.internalContainer.y) /
            this.internalContainer.scale.y;

        this.internalContainer.scale.set(newScale);

        this.internalContainer.x = screenX - localX * newScale;
        this.internalContainer.y = screenY - localY * newScale;
    }

    onWheel = (event) => {
        const mouseX = event.global.x;
        const mouseY = event.global.y;
        const zoomFactor = 1 - event.deltaY / 1000;
        const newScale = this.internalContainer.scale.x * zoomFactor;
        this.zoomAt(mouseX, mouseY, newScale);
    }

    onPointerDown = (event) => {
        const pos = event.data.global.clone();

        this.activePointers.set(event.pointerId, {
            startX: pos.x,
            startY: pos.y,
            x: pos.x,
            y: pos.y
        });

        if (this.activePointers.size === 1) {
            this.currentContainerPos = {
                x: this.internalContainer.x,
                y: this.internalContainer.y
            };
        }

        if (this.activePointers.size === 2) {
            const pointers = [...this.activePointers.values()];
            const p1 = pointers[0];
            const p2 = pointers[1];

            this.pinchState = {
                startScale: this.internalContainer.scale.x,

                startDistance: getDistance(
                    p1.x,
                    p1.y,
                    p2.x,
                    p2.y
                ),

                worldMid: {
                    x:
                        ((p1.x + p2.x) / 2 - this.internalContainer.x) /
                        this.internalContainer.scale.x,

                    y:
                        ((p1.y + p2.y) / 2 - this.internalContainer.y) /
                        this.internalContainer.scale.y
                }
            };
        }
    }

    onPointerMove = (event) => {
        if (!this.activePointers.has(event.pointerId)) return;

        const pointer = this.activePointers.get(event.pointerId);

        pointer.x = event.data.global.x;
        pointer.y = event.data.global.y;

        // ---------- One finger ----------
        if (this.activePointers.size === 1) {
            const moved =
                getDistance(
                    pointer.x,
                    pointer.y,
                    pointer.startX,
                    pointer.startY
                ) >= 10;

            if (!moved) return;

            if (false) {
                let x =
                    (pointer.x - this.internalContainer.x) /
                    this.internalContainer.scale.x;

                let y =
                    (pointer.y - this.internalContainer.y) /
                    this.internalContainer.scale.y;

                console.log(x, y);
            } else {
                this.internalContainer.x =
                    this.currentContainerPos.x +
                    pointer.x -
                    pointer.startX;

                this.internalContainer.y =
                    this.currentContainerPos.y +
                    pointer.y -
                    pointer.startY;
            }
        }

        // ---------- Two fingers ----------
        else if (this.activePointers.size === 2) {
            const pointers = [...this.activePointers.values()];

            const p1 = pointers[0];
            const p2 = pointers[1];

            const currentDistance = getDistance(
                p1.x,
                p1.y,
                p2.x,
                p2.y
            );

            let newScale =
                this.pinchState.startScale *
                (currentDistance / this.pinchState.startDistance);

            newScale = Math.max(0.1, Math.min(newScale, 10));

            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;

            this.internalContainer.scale.set(newScale);

            this.internalContainer.x =
                midX - this.pinchState.worldMid.x * newScale;

            this.internalContainer.y =
                midY - this.pinchState.worldMid.y * newScale;
        }
    }

    onPointerUp = (event) => {
        if (!this.activePointers.has(event.pointerId)) return;

        const pointer = this.activePointers.get(event.pointerId);

        if (this.activePointers.size === 1) {
            if (
                getDistance(
                    pointer.x,
                    pointer.y,
                    pointer.startX,
                    pointer.startY
                ) < 10
            ) {
                const x =
                    (pointer.startX - this.currentContainerPos.x) /
                    this.internalContainer.scale.x;

                const y =
                    (pointer.startY - this.currentContainerPos.y) /
                    this.internalContainer.scale.y;

                console.log(x, y);

                // this.chef.moveTo(x, y);
            }
        }

        this.activePointers.delete(event.pointerId);

        if (this.activePointers.size < 2) {
            this.pinchState = null;

            // reset pan origin after pinch
            if (this.activePointers.size === 1) {
                const remaining = [...this.activePointers.values()][0];

                remaining.startX = remaining.x;
                remaining.startY = remaining.y;

                this.currentContainerPos = {
                    x: this.internalContainer.x,
                    y: this.internalContainer.y
                };
            }
        }
    }

    destroy() {
        // Now these references match EXACTLY what was passed to .on()
        this.removeListeners();

        this.activePointers.clear();
        this.activePointers = null;
        this.currentContainerPos = null;
        this.pinchState = null;
        
        this.overlay = null;
        this.tool = null;
        this.internalContainer = null;
    }
}

(async () => {
    /*********************PIXI***********************/
    // Create a new application
    const app = new PIXI.Application();

    // Initialize the application
    await app.init({
        background: "#000",
        resizeTo: window,
        //resolution: window.devicePixelRatio || 1,
    });
    
    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);
    /*********************PIXI***********************/
    
    let gameScene, activeScene, loadingScene;
    
    loadingScene = new LoadingScene(app);
    activeScene = loadingScene;
    activeScene.show();
    
    // Listen for animate update
    app.ticker.add((time) => {
        activeScene.update(time.deltaTime);
        if(loadingScene.isComplete && activeScene.type === "loading-scene"){
            activeScene.hide();
            activeScene.destroy();
            // Switch to game scene
            gameScene = new GameScene(app);
            gameScene.start("image-4.png")
            activeScene = gameScene;
            activeScene.show();
        }
    });
    
})();
