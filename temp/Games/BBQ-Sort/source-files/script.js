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

    // Create a new loader for sprite images
    const resourcesToBeLoad = [
        {
            "alias": 'bbq-stick',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/bbq-stick.png"
        },
        {
            "alias": 'cucumber-slice',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/cucumber-slice.png"
        },
        {
            "alias": 'cucumber',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/cucumber.png"
        },
        {
            "alias": 'meat',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/meat.png"
        },
        {
            "alias": 'chicken-wing',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/chicken-wing.png"
        },
        {
            "alias": 'prawn',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/prawn.png"
        },
        {
            "alias": 'lobster',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/lobster.png"
        },
        {
            "alias": 'eggplant',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/eggplant.png"
        },
        {
            "alias": 'eggplant-slice',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/eggplant-slice.png"
        },
        {
            "alias": 'sausage',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/sausage.png"
        },
        {
            "alias": 'mini-sausage',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/mini-sausage.png"
        },
        {
            "alias": 'salmon',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/salmon.png"
        },
        {
            "alias": 'salmon-slice',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/salmon-slice.png"
        },
    ];
    // Create a loader for sound assets
    const soundManifest = [
        {
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
        {
            alias: 'level-entry',
            src: 'https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/entry-level.mp3'
        },
        {
            alias: 'level-completion',
            src: 'https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/completion-level.wav'
        },
    ];

    // Add multiple textures to the loader
    await PIXI.Assets.load(resourcesToBeLoad, callback)
    let songResources;
    PIXI.Assets.addBundle('sound', soundManifest);
    PIXI.Assets.loadBundle('sound').then((resources) => {
        console.log(resources)
        songResources = resources
        // Play background music
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

    })

    class BBQ_Sprite {
        constructor() {
            
        }

        createSprite(type) {
            let sprite = new PIXI.Sprite(PIXI.Texture.from(type));
            sprite.anchor.set(0.5)
            return sprite;
        }

        createRectGraphic(x, y, width, height, color) {
            return new PIXI.Graphics()
            .rect(x, y, width, height)
            .fill(color);
        }
    }
    
    class Stick extends BBQ_Sprite {
        constructor() {
            super();
            this.content = []
            this.container = new PIXI.Container()
            
            // Create rect
            let rect = super.createRectGraphic(-120 * 0.5, -350 * 0.5, 120, 350, '#0f0');
            
            // Enable interaction for rect
            rect.interactive = true;
            rect.buttonMode = true;
            rect.alpha = 0.1
            rect.cursor = 'pointer';
            rect.on('pointerdown', () => {
                this.isSelected = !this.isSelected;
                if (this.isSelected) {
                    this.playUpAnimation()
                } else {
                    this.playDownAnimation()
                }
            });
            this.rect = {'obj': rect, 'type': 'rect'}
            this.container.addChild(rect)

            // Create stick
            let stick = super.createSprite('bbq-stick')
            this.stick = {
                'type': 'bbq-stick',
                'obj': stick
            };
            this.scaleTo(0.4)
            this.container.addChild(stick)

            // Setup filter
            this.filter = this.createGlowFilter();
            this.isSelected = false;
        }

        createSprite(type) {
            let sprite = super.createSprite(type)
            this.content.push({'obj': sprite, 'type': type})
            this.scaleTo(this.stick.obj.scale.x)
            this.container.addChild(sprite)
        }

        createGlowFilter() {
            // Create a color matrix filter
            let filter = new PIXI.ColorMatrixFilter();

            // Set the filter to enhance the brightness and color for a glow effect
            filter.brightness(1.1, false); // Adjust brightness (1.5 for 50% more brightness)
            filter.contrast(1.1, false); // Increase contrast
            filter.hue(100, false); // Adjust hue to give it a glowing effect
            filter.saturate(1.1, false); // Increase saturation
            return filter;
        }
        
        getDefaultYCoordinate(index) {
            return this.stick.obj.y + Math.floor((60 - index * 60) * this.stick.obj.scale.x / 0.4 * 100) / 100
        }
        moveTo(x, y) {
            // Update stick position
            this.stick.obj.x = x
            this.stick.obj.y = y
            // Update rect position
            this.rect.obj.x = this.stick.obj.x
            this.rect.obj.y = this.stick.obj.y
            // Update children position accordingly
            this.content.forEach((elem, index) => {
                elem.obj.y = this.getDefaultYCoordinate(index)
                elem.obj.x = this.stick.obj.x
            })
        }
        scaleTo(scale) {
            this.stick.obj.scale.set(scale)
            this.content.forEach((elem, index) => {
                elem.obj.scale.set(Math.floor(scale / 0.4 * 0.5 * 10) / 10);
            });
        }
        playUpAnimation() {
            this.animation = "UP";
            this.selectionCurrentState = "WAIT";
            this.selectionNextState = "WAIT";
            this.selectionAnimation = {
                'maxUpDistance': Math.floor(50 * this.stick.obj.scale.x / 0.4 * 10) / 10,
                'speed': Math.floor(6 * this.stick.obj.scale.x / 0.4 * 10) / 10,
            }
        }
        playDownAnimation() {
            this.animation = "DOWN";
            this.selectionCurrentState = "WAIT";
            this.selectionNextState = "WAIT";
            this.selectionAnimation = {
                'maxDownDistance': Math.floor(50 * this.stick.obj.scale.x / 0.4 * 10) / 10,
                'speed': Math.floor(6 * this.stick.obj.scale.x / 0.4 * 10) / 10,
            }
        }
        update() {
            let type = null;
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
                    songResources['up'].play()
                    let skipFilter = false
                    for (let index = this.content.length - 1; index >= 0; index--) {
                        this.content[index].obj.y = this.getDefaultYCoordinate(index)
                        this.content[index].obj.x = this.stick.obj.x
                        if (!type) {
                            type = this.content[index].type
                        }
                        if (type !== this.content[index].type || skipFilter) {
                            skipFilter = true
                            continue;
                        }
                        // Apply filter
                        this.content[index].obj.filters = [this.filter];
                    }
                    this.selectionNextState = "UP"
                    break;
                case "UP":
                    for (let index = this.content.length - 1; index >= 0; index--) {
                        if (!type) {
                            type = this.content[index].type
                        }
                        if (type !== this.content[index].type) {
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
                    songResources['down'].play()
                    for (let index = this.content.length - 1; index >= 0; index--) {
                        if (!type) {
                            type = this.content[index].type
                        }
                        if (type !== this.content[index].type) {
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
                    for (let index = this.content.length - 1; index >= 0; index--) {
                        if (!type) {
                            type = this.content[index].type
                        }
                        if (type !== this.content[index].type) {
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
    }

    const container = new PIXI.Container();

    let cStick = new Stick()
    cStick.createSprite('meat')
    cStick.createSprite('prawn')
    cStick.createSprite('prawn')
    cStick.createSprite('meat')
    cStick.moveTo(150, 250)
    container.addChild(cStick.container)


    app.stage.addChild(container)

    function callback(progress) {
        //console.log(progress)
    }

    // Listen for animate update
    app.ticker.add((time) => {
        cStick.update()
    });

})();
