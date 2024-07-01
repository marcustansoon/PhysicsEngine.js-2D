(async () => {
  function floor(value, precision) {
    return (
      Math.floor(value * Math.pow(10, precision)) / Math.pow(10, precision)
    );
  }

  function makeInteractive(obj) {
    obj.interactive = true;
    obj.buttonMode = true;
    obj.cursor = "pointer";
  }

  // Class for loading scene
  class LoadingScene {
    constructor(app) {
      this.app = app;
      this.type = "loading-scene";
      this.container = new PIXI.Container();
      this.objects = [];
      this.isDestroyed = false;
      this.createScene();
    }

    async createScene() {
      // Create a new loader for sprite images
      const resourcesToBeLoad = [
        // Background images
        {
          alias: "bg-main-menu-button",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/text-bg-transparent.png"
        },
        {
          alias: "level-selection-box",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/box-square.png"
        },
        {
          alias: "star",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/star.png"
        },
        {
          alias: "bg-level-selection",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/level-selection-bg.jpg"
        },
        // Object images
        {
          alias: "bbq-stick",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/bbq-stick.png"
        },
        {
          alias: "cucumber-slice",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/cucumber-slice.png"
        },
        {
          alias: "cucumber",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/cucumber.png"
        },
        {
          alias: "meat",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/meat.png"
        },
        {
          alias: "chicken-wing",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/chicken-wing.png"
        },
        {
          alias: "prawn",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/prawn.png"
        },
        {
          alias: "lobster",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/lobster.png"
        },
        {
          alias: "eggplant",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/eggplant.png"
        },
        {
          alias: "eggplant-slice",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/eggplant-slice.png"
        },
        {
          alias: "sausage",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/sausage.png"
        },
        {
          alias: "mini-sausage",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/mini-sausage.png"
        },
        {
          alias: "salmon",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/salmon.png"
        },
        {
          alias: "salmon-slice",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/salmon-slice.png"
        },
        // Sounds
        {
          alias: "bird",
          src: "https://pixijs.io/sound/examples/resources/bird.mp3"
        },
        {
          alias: "background-music",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/audioblocks-cinematic-night-jazz-club-background-music.mp3"
        },
        {
          alias: "error",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/error.mp3"
        },
        {
          alias: "up",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/poink.mp3"
        },
        {
          alias: "down",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/poink-retrace.mp3"
        },
        {
          alias: "level-entry",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/entry-level.mp3"
        },
        {
          alias: "level-completion",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/completion-level.wav"
        },
        {
          alias: "single-completion",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/audioblocks-happy-happy-award-achievement.mp3"
        },
        {
          alias: "button-click",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/button-click.mp3"
        }
      ];

      const bgMainMenuTexture = await PIXI.Assets.load({
        alias: "bg-main-menu",
        src:
          "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/main-menu-expanded.png"
      });

      // Get canvas size ratio
      let scaleX = this.app.renderer.width / bgMainMenuTexture.width;
      let scaleY = this.app.renderer.height / bgMainMenuTexture.height;
      let scale = scaleX > scaleY ? scaleX : scaleY;

      // Calculate font size
      let fontSize = Math.round((scale / 0.3) * 24 * 10) / 10;

      // Create blur filter
      const blurFilter = new PIXI.BlurFilter();
      blurFilter.blur = 5; // Adjust the blur amount

      const mainMenu = new PIXI.Sprite(bgMainMenuTexture);
      mainMenu.anchor.set(0.5);
      mainMenu.filters = [blurFilter];
      mainMenu.scale.set(floor(scale, 2));
      mainMenu.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      this.objects.push(mainMenu);
      this.container.addChild(mainMenu);

      // Create a graphic rectangle
      const rect = new PIXI.Graphics();
      rect.beginFill(0xf); // Black color
      rect.alpha = 0.5;
      rect.drawRect(
        Math.round(-this.app.renderer.width / 2),
        Math.round(-this.app.renderer.height / 2),
        Math.round(this.app.renderer.width),
        Math.round(this.app.renderer.height)
      );
      rect.endFill();
      rect.filters = [blurFilter];
      rect.position.set(this.app.screen.width / 2, this.app.screen.height / 2);
      this.objects.push(rect);
      this.container.addChild(rect);

      // Create text with custom style
      let style = new PIXI.TextStyle({
        fontFamily: "Trebuchet MS, sans-serif",
        fontSize: fontSize,
        fill: "#fff", // Gradient
        dropShadow: false,
        fontWeight: "bold",
        wordWrap: true,
        wordWrapWidth: 440,
        letterSpacing: 2,
        lineJoin: "round"
      });
      let loadingText = new PIXI.Text("Loading ...", style);
      loadingText.anchor.set(0.5);
      loadingText.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      this.objects.push(loadingText);
      this.container.addChild(loadingText);
      this.loadingText = loadingText;
      this.progress = 0;

      await PIXI.Assets.load(
        resourcesToBeLoad,
        this.loadProgressCallback.bind(this)
      );

      this.isComplete = true;
    }

    loadProgressCallback(progress) {
      this.progress = floor(progress * 100, 2);
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
        obj.destroy();
      });
      this.objects = [];
      this.isDestroyed = true;
    }

    update() {
      // Update the percentage text
      if (!this.loadingText) return;
      this.loadingText.text = `Loading: ${this.progress}%`;
    }
  }

  // Class for main menu scene
  class MainMenuScene {
    constructor(app) {
      this.app = app;
      this.type = "main-menu-scene";
      this.container = new PIXI.Container();
      this.objects = [];
      this.isDestroyed = false;
      this.createScene();
    }

    createScene() {
      // Get bg main menu
      const bgMainMenuTexture = PIXI.Assets.get("bg-main-menu");

      // Get canvas size ratio
      let scaleX = this.app.renderer.width / bgMainMenuTexture.width;
      let scaleY = this.app.renderer.height / bgMainMenuTexture.height;
      let scale = scaleX > scaleY ? scaleX : scaleY;

      // Calculate font size
      let fontSize = Math.round((scale / 0.3) * 24 * 10) / 10;

      // Create text with custom style
      let style = new PIXI.TextStyle({
        fontFamily: "Trebuchet MS, sans-serif",
        fontSize: fontSize,
        fill: "#000", // Gradient
        dropShadow: false,
        fontWeight: "bold",
        wordWrap: true,
        wordWrapWidth: 440,
        letterSpacing: 2,
        lineJoin: "round"
      });

      // Create blur filter
      const blurFilter = new PIXI.BlurFilter();
      blurFilter.blur = 20; // Adjust the blur amount

      // Create bg main menu image
      const mainMenu = new PIXI.Sprite(PIXI.Assets.get("bg-main-menu"));
      mainMenu.anchor.set(0.5);
      mainMenu.scale.set(floor(scale, 2));
      mainMenu.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      this.objects.push(mainMenu);
      this.container.addChild(mainMenu);

      // Create a graphic rectangle
      const rect = new PIXI.Graphics();
      rect.beginFill(0xf); // Black color
      rect.alpha = 0.15;
      rect.drawRect(
        Math.round((-scale / 0.4) * 200),
        Math.round((-scale / 0.4) * 150),
        Math.round((scale / 0.4) * 400),
        Math.round((scale / 0.4) * 300)
      );
      rect.endFill();
      rect.position.set(this.app.screen.width / 2, this.app.screen.height / 2);
      rect.filters = [blurFilter];
      this.objects.push(rect);
      this.container.addChild(rect);

      // Create bg for text play
      const bgTextPlay = new PIXI.Sprite(
        PIXI.Assets.get("bg-main-menu-button")
      );
      bgTextPlay.anchor.set(0.5);
      bgTextPlay.scale.set(floor((scale / 0.3) * 0.5, 2));
      bgTextPlay.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      bgTextPlay.y -= (scale / 0.3) * 55;
      makeInteractive(bgTextPlay);
      bgTextPlay.on("pointerdown", () => {
        PIXI.Assets.get("button-click").play();
        this.switchToPlayScene = true;
      });
      this.objects.push(bgTextPlay);
      this.container.addChild(bgTextPlay);

      // Create text play
      let playText = new PIXI.Text("PLAY", style);
      playText.anchor.set(0.5);
      playText.position.set(bgTextPlay.x, bgTextPlay.y);
      this.objects.push(playText);
      this.container.addChild(playText);

      // Create bg for text setting
      const bgTextSetting = new PIXI.Sprite(
        PIXI.Assets.get("bg-main-menu-button")
      );
      bgTextSetting.anchor.set(0.5);
      bgTextSetting.scale.set(floor((scale / 0.3) * 0.5, 2));
      bgTextSetting.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      makeInteractive(bgTextSetting);
      bgTextSetting.on("pointerdown", () => {
        PIXI.Assets.get("button-click").play();
      });
      this.objects.push(bgTextSetting);
      this.container.addChild(bgTextSetting);

      // Create text setting
      let settingText = new PIXI.Text("SETTING", style);
      settingText.anchor.set(0.5);
      settingText.position.set(bgTextSetting.x, bgTextSetting.y);
      this.objects.push(settingText);
      this.container.addChild(settingText);

      // Create bg for text quit
      const bgTextQuit = new PIXI.Sprite(
        PIXI.Assets.get("bg-main-menu-button")
      );
      bgTextQuit.anchor.set(0.5);
      bgTextQuit.scale.set(floor((scale / 0.3) * 0.5, 2));
      bgTextQuit.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      makeInteractive(bgTextQuit);
      bgTextQuit.y += (scale / 0.3) * 55;
      this.objects.push(bgTextQuit);
      this.container.addChild(bgTextQuit);

      // Create text quit
      let quitText = new PIXI.Text("QUIT", style);
      quitText.anchor.set(0.5);
      quitText.position.set(bgTextQuit.x, bgTextQuit.y);
      this.objects.push(quitText);
      this.container.addChild(quitText);

      // Play background music
      backgroundMusic = PIXI.Assets.get("background-music");
      backgroundMusic.play({
        volume: 0.2,
        loop: 1
      });
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
        obj.destroy();
      });
      this.objects = [];
      this.isDestroyed = true;
    }

    update() {}
  }

  // Class for main menu scene
  class LevelSelectionScene {
    constructor(app) {
      this.app = app;
      this.type = "main-menu-scene";
      this.container = new PIXI.Container();
      this.objects = [];
      this.isDestroyed = false;
      this.createScene();
    }

    createScene() {
      // Get bg main menu
      const bgMainMenuTexture = PIXI.Assets.get("bg-level-selection");

      // Get canvas size ratio
      let scaleX = this.app.renderer.width / bgMainMenuTexture.width;
      let scaleY = this.app.renderer.height / bgMainMenuTexture.height;
      let scale = scaleX > scaleY ? scaleX : scaleY;

      // Create bg main menu image
      const mainMenu = new PIXI.Sprite(PIXI.Assets.get("bg-level-selection"));
      mainMenu.anchor.set(0.5);
      mainMenu.scale.set(floor(scale, 2));
      mainMenu.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      this.objects.push(mainMenu);
      this.container.addChild(mainMenu);

      let levelSelectionBoxTexture = PIXI.Assets.get("level-selection-box");
      let scaleBoxX =
          this.app.renderer.width / 6 / levelSelectionBoxTexture.width,
        scaleBoxY =
          this.app.renderer.height / 6 / levelSelectionBoxTexture.height,
        scaleBox = scaleBoxX < scaleBoxY ? scaleBoxX : scaleBoxY;

      let startPositionY = -2;
      let startPositionX = -2;
      for (let temp = 0; temp < 12; temp++) {
        let incrementY = startPositionY + Math.floor(temp / 4) * 1.3,
          incrementX = startPositionX + (temp % 4) * 1.3;

        let box = new PIXI.Sprite(levelSelectionBoxTexture);
        box.anchor.set(0.5);
        box.scale.set(floor(scaleBox, 2));
        box.position.set(
          this.app.screen.width / 2 + incrementX * floor(box.width, 2),
          this.app.screen.height / 2 + incrementY * floor(box.height, 2)
        );
        makeInteractive(box);
        box.on("pointerdown", () => {
          PIXI.Assets.get("button-click").play();
        });
        this.objects.push(box);
        this.container.addChild(box);
      }
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
        obj.destroy();
      });
      this.objects = [];
      this.isDestroyed = true;
    }

    update() {}
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

  let backgroundMusic;
  let activeScene;
  let loadingScene = new LoadingScene(app);
  loadingScene.show();
  let mainMenuScene, levelSelectionScene;
  activeScene = loadingScene;

  // Listen for animate update
  app.ticker.add((time) => {
    activeScene.update();
    if (
      activeScene.isComplete &&
      !activeScene.isDestroyed &&
      activeScene.type === "loading-scene"
    ) {
      // Switch to main menu scene
      mainMenuScene = new MainMenuScene(app);
      mainMenuScene.show();
      activeScene.hide();
      activeScene.destroy();
      activeScene = mainMenuScene;
    } else if (activeScene.switchToPlayScene) {
      activeScene.switchToPlayScene = false;
      activeScene.hide();
      if (!levelSelectionScene)
        levelSelectionScene = new LevelSelectionScene(app);
      levelSelectionScene.show();
    }
  });
})();
