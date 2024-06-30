(async () => {


    // Create the loading scene
    class LoadingScene {
        constructor(app) {
            this.app = app;
            this.container = new PIXI.Container();
            this.createScene();
        }

        async createScene() {
            // Create a new loader for sprite images
            const resourcesToBeLoad = [{
                    "alias": 'bbq-stick',
                    "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/bbq-stick.png"
                },
                {
                    "alias": 'cucumber-slice',
                    "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/cucumber-slice.png"
                },
                {
                    alias: 'bird',
                    src: 'https://pixijs.io/sound/examples/resources/bird.mp3'
                },
            ]

            await PIXI.Assets.load(resourcesToBeLoad, this.callback);
        }

        update() {

        }

    }



    // Create a new application
    const app = new PIXI.Application();

    // Initialize the application
    await app.init({
        background: "#000",
        resizeTo: window
    });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);
    // Create a new loader for sprite images
    const resourcesToBeLoad = [{
            "alias": 'bbq-stick',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/bbq-stick.png"
        },
        {
            "alias": 'cucumber-slice',
            "src": "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/cucumber-slice.png"
        },
        {
            alias: 'bird',
            src: 'https://pixijs.io/sound/examples/resources/bird.mp3'
        },
    ]

    await PIXI.Assets.load(resourcesToBeLoad, callback)

    function callback(progress) {
        console.log(progress)
    }
    console.log(PIXI.Assets.get("bird").play())



})();
