(async () => {

    // Create a new application
    const app = new PIXI.Application();

    // Initialize the application
    await app.init({
        background: '#000',
        resizeTo: window
    });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);

    // Create a new loader
    let resourcesToBeLoad = [{
            "alias": 'bbq-stick',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/bbq-stick.png"
        },
        {
            "alias": 'cucumber-slice',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/cucumber-slice.png"
        },
        {
            "alias": 'meat',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/meat.png"
        },
        {
            "alias": 'prawn',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/prawn.png"
        },
    ];



    // Add multiple textures to the loader
    await PIXI.Assets.load(resourcesToBeLoad, callback)
    /*const soundManifest = [{
            alias: 'bird',
            src: 'https://pixijs.io/sound/examples/resources/bird.mp3'
        },
        {
            alias: 'background-music',
            src: 'https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/Nintendo%20Wii%20-%20Mii%20Channel%20Theme%20-%20Jazz%20Cover.mp3'
        },
        {
            alias: 'up',
            src: 'https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/poink.mp3'
        },
        {
            alias: 'down',
            src: 'https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/poink-retrace.mp3'
        },
    ]
    let songResources;
    PIXI.Assets.addBundle('demo', soundManifest);
    PIXI.Assets.loadBundle('demo').then((resources) => {
        console.log(resources)
        songResources = resources
        let bgSound = resources['background-music']
        bgSound.play({
            volume: 0.01,
            loop: 1,
            filters: [
                new PIXI.sound.filters.StereoFilter(-1),
            ],
        });
        setTimeout(function() {
            bgSound.play({
                loop: 1,
                filters: [
                    new PIXI.sound.filters.StereoFilter(1),
                ],
            });
        }, 50);

    })*/

    // Declaration
    class Stick {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }

    let group1 = {
        'stick': null,
        'rect': null,
        'content': []
    };
    
    group1.scaleTo = function(scale){
        this.stick.obj.scale.set(scale)
        this.content.forEach((elem, index) => {
            elem.obj.scale.set(Math.floor(scale / 0.4 * 0.5 * 10) / 10);
        });
    }

    group1.getDefaultYCoordinate = function(index){
        return this.stick.obj.y + Math.floor((60 - index * 60) * this.stick.obj.scale.x / 0.4 * 100) / 100
    }

    group1.moveTo = function(x, y) {
        this.stick.obj.x = x
        this.stick.obj.y = y
        this.content.forEach((elem, index) => {
            elem.obj.y = this.getDefaultYCoordinate(index)
            elem.obj.x = this.stick.obj.x
        })
    }

    group1.playUpAnimation = function() {
        this.animation = "UP";
        this.selectionCurrentState = "WAIT";
        this.selectionNextState = "WAIT";
        this.selectionAnimation = {
            'maxUpDistance': Math.floor(50 * this.stick.obj.scale.x / 0.4 * 10) / 10,
            'speed': Math.floor(6 * this.stick.obj.scale.x / 0.4 * 10) / 10,
        }
    }
    group1.playDownAnimation = function() {
        this.animation = "DOWN";
        this.selectionCurrentState = "WAIT";
        this.selectionNextState = "WAIT";
        this.selectionAnimation = {
            'maxDownDistance': Math.floor(50 * this.stick.obj.scale.x / 0.4 * 10) / 10,
            'speed': Math.floor(6 * this.stick.obj.scale.x / 0.4 * 10) / 10,
        }
    }

    group1.playJumpToAnimation = function(x, y){

    }


    group1.update = function() {
        switch (this.selectionCurrentState) {
            case "IDLE":
                this.selectionNextState = "WAIT"
                break;
            case "WAIT":
                if (this.animation === "UP")
                    this.selectionNextState = "PRE-UP"
                else if (this.animation === "DOWN")
                    this.selectionNextState = "PRE-DOWN"
                else
                    this.selectionNextState = "WAIT"
                break;
            case "PRE-UP":
                let type = null
                //songResources['up'].play()
                for (let index = this.content.length - 1; index >= 0; index--) {
                    if (!type) {
                        type = this.content[index].type
                    }
                    if (type === this.content[index].type) {
                        // Apply filter
                        this.content[index].obj.filters = isSelected ? [filter] : null;
                    }
                    this.content[index].obj.y = this.getDefaultYCoordinate(index)
                    this.content[index].obj.x = this.stick.obj.x
                }
                this.selectionNextState = "UP"
                break;
            case "UP":
                let type1 = null;
                for (let index = this.content.length - 1; index >= 0; index--) {
                    if (!type1) {
                        type1 = this.content[index].type
                    }
                    if (type1 !== this.content[index].type) {
                        break;
                    }

                    let startingPos = this.getDefaultYCoordinate(index)
                    if (Math.abs(startingPos - this.content[index].obj.y) >= this.selectionAnimation.maxUpDistance) {
                        this.selectionNextState = "WAIT"
                        this.animation = null
                        this.content[index].obj.y = startingPos - this.selectionAnimation.maxUpDistance
                    } else {
                        this.content[index].obj.y = this.content[index].obj.y - this.selectionAnimation.speed;
                        this.selectionNextState = "UP"
                    }
                }
                break;
            case "PRE-DOWN":
                let type2 = null;
                //songResources['down'].play()
                for (let index = this.content.length - 1; index >= 0; index--) {
                    if (!type2) {
                        type2 = this.content[index].type
                    }
                    if (type2 !== this.content[index].type) {
                        break;
                    }
                    // Remove filter
                    this.content[index].obj.filters = null;

                    let startingPos = this.getDefaultYCoordinate(index) - this.selectionAnimation.maxDownDistance
                    this.content[index].obj.y = startingPos
                    this.content[index].obj.x = this.stick.obj.x
                }
                this.selectionNextState = "DOWN"
                break;
            case "DOWN":
                let type3 = null;
                for (let index = this.content.length - 1; index >= 0; index--) {
                    if (!type3) {
                        type3 = this.content[index].type
                    }
                    if (type3 !== this.content[index].type) {
                        break;
                    }
                    let startPos = this.getDefaultYCoordinate(index) - this.selectionAnimation.maxDownDistance
                    if (Math.abs(startPos - this.content[index].obj.y) >= this.selectionAnimation.maxDownDistance) {
                        this.selectionNextState = "WAIT"
                        this.animation = null;
                        this.content[index].obj.y = this.getDefaultYCoordinate(index)
                    } else {
                        this.content[index].obj.y = this.content[index].obj.y + this.selectionAnimation.speed;
                        this.selectionNextState = "DOWN"
                    }
                }
                break;
            default:
                this.selectionNextState = "IDLE"
                break;

        }

        this.selectionCurrentState = this.selectionNextState;

    }




    const prawnTexture = PIXI.Texture.from('prawn');
    const meatTexture = PIXI.Texture.from('meat');
    const stickTexture = PIXI.Texture.from('bbq-stick');

    const container = new PIXI.Container();

    app.stage.addChild(container);

    // Create a Graphics object, draw a rectangle and fill it
    let rect = new PIXI.Graphics()
        .rect(-120 * 0.5, -350 * 0.5, 120, 350)
        .fill(0xff0000);

    // Enable interaction
    rect.interactive = true;
    rect.buttonMode = true;
    rect.alpha = 0
    rect.x = app.screen.width / 2
    rect.y = app.screen.height / 2
    rect.cursor = 'pointer';

    group1.rect = {
        'type': 'rect',
        'obj': rect,
    };

    // Add it to the stage to render
    container.addChild(rect);

    // Create stick
    let stick = new PIXI.Sprite(stickTexture);
    stick.anchor.set(0.5);
    stick.scale.set(0.4);
    // Move the sprite to the center of the screen
    stick.x = app.screen.width / 2;
    stick.y = app.screen.height / 2;
    group1.stick = {
        'type': 'stick',
        'obj': stick
    };

    container.addChild(stick);

    // Create prawn
    let prawn = new PIXI.Sprite(prawnTexture);
    prawn.anchor.set(0.5);
    prawn.scale.set(0.5);
    // Move the sprite to the center of the screen
    prawn.x = app.screen.width / 2;
    prawn.y = app.screen.height / 2 + 75;
    container.addChild(prawn);
    group1.content.push({
        'type': 'prawn',
        'obj': prawn
    })

    // Create prawn
    let prawn2 = new PIXI.Sprite(prawnTexture);
    prawn2.anchor.set(0.5);
    prawn2.scale.set(0.5);
    // Move the sprite to the center of the screen
    //prawn2.x = app.screen.width / 2;
    //prawn2.y = app.screen.height / 2 + 0;
    container.addChild(prawn2);
    group1.content.push({
        'type': 'prawn',
        'obj': prawn2
    })

    // Create meat
    let meat = new PIXI.Sprite(meatTexture);
    meat.anchor.set(0.5);
    meat.scale.set(0.5);
    container.addChild(meat);
    group1.content.push({
        'type': 'meat',
        'obj': meat
    })

    // Create meat
    let meat2 = new PIXI.Sprite(meatTexture);
    meat2.anchor.set(0.5);
    meat2.scale.set(0.5);
    container.addChild(meat2);
    group1.content.push({
        'type': 'meat',
        'obj': meat2
    })

    
    // Create a color matrix filter
    const filter = new PIXI.ColorMatrixFilter();

    // Function to apply the glow effect
    function applyGlowFilter(filter) {
        // Set the filter to enhance the brightness and color for a glow effect
        filter.brightness(1.1, false); // Adjust brightness (1.5 for 50% more brightness)
        filter.contrast(1.1, false); // Increase contrast
        filter.hue(100, false); // Adjust hue to give it a glowing effect
        filter.saturate(1.1, false); // Increase saturation
    }

    // Apply the glow effect
    applyGlowFilter(filter);

    let isSelected = false;

    rect.on('pointerdown', () => {
        isSelected = !isSelected;
        if (isSelected) {
            group1.playUpAnimation()
        } else {
            group1.playDownAnimation()
        }
    });

    group1.scaleTo(0.4)
    group1.moveTo(app.screen.width / 2, app.screen.height / 2)


    function callback(progress) {
        //console.log(progress)
    }

    // Listen for animate update
    app.ticker.add((time) => {
        // Continuously rotate the container!
        // * use delta to create frame-independent transform *
        group1.update()
    });


})();
