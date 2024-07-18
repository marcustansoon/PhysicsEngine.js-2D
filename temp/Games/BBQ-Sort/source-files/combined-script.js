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
        // Scene related images
        {
          alias: "bg-main-menu-button",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/text-bg-transparent.png"
        },
        {
          alias: "patty-running",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/patty-run.png"
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
        {
          alias: "left-button",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/left-button.png"
        },
        {
          alias: "right-arrow",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/right-arrow.png"
        },
        {
          alias: "close-button",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/close-button-3.png"
        },
        {
          alias: "banner",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/paper-cropped-2-brighter.png"
        },
        {
          alias: "bg-gameplay-1",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bbq-grill-bg-5.jpg"
        },
        {
          alias: "tick",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/tick.png"
        },
        {
          alias: "untick",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/untick.png"
        },
        {
          alias: "level-completion-bg",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/level-completed-sprite-transparent.png"
        },
        {
          alias: "level-failed-banner",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/patty-burnt-2.png"
        },
        {
          alias: "level-failed-bg",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/level-failure-banner.png"
        },
        // In game related images
        {
          alias: "setting-icon",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/setting-icon-cropped.png"
        },
        {
          alias: "wooden-banner",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/wooden-banner-3.png"
        },
        {
          alias: "light-rotate-2",
          src: "https://pixijs.com/assets/light_rotate_2.png"
        },
        {
          alias: "light-rotate-1",
          src: "https://pixijs.com/assets/light_rotate_1.png"
        },
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
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/miniprawn.png"
        },
        {
          alias: "lobster",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bigprawn.png"
        },
        {
          alias: "eggplant",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bigeggplant.png"
        },
        {
          alias: "eggplant-slice",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/minieggplant.png"
        },
        {
          alias: "sausage",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bigsausage.png"
        },
        {
          alias: "mini-sausage",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/minisausage.png"
        },
        {
          alias: "salmon",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bigfish.png"
        },
        {
          alias: "salmon-slice",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/minisalmon.png"
        },
        {
          alias: "carrot",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bigcarrot.png"
        },
        {
          alias: "carrot-slice",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/minicarrot.png"
        },
        {
          alias: "cheese",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bigcheese.png"
        },
        {
          alias: "cheese-slice",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/minicheese.png"
        },
        {
          alias: "crab",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bigcrab.png"
        },
        {
          alias: "crab-slice",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/minicrab.png"
        },
        {
          alias: "drumstick",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bigdrum.png"
        },
        {
          alias: "drumstick-slice",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/minidrum.png"
        },
        {
          alias: "marshmallow",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bigmallow.png"
        },
        {
          alias: "marshmallow-slice",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/minimarsh.png"
        },
        {
          alias: "greenpepper",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bigpepper.png"
        },
        {
          alias: "greenpepper-slice",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/minipepper.png"
        },
        {
          alias: "potato",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bigpotato.png"
        },
        {
          alias: "potato-slice",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/minipotato.png"
        },
        {
          alias: "squid",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bigsquid.png"
        },
        {
          alias: "squid-slice",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/minisquid.png"
        },
        {
          alias: "steak",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bigsteak.png"
        },
        {
          alias: "steak-slice",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/ministeak.png"
        },
        {
          alias: "cabbage",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bigveggie.png"
        },
        {
          alias: "cabbage-slice",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/minicabbage.png"
        },
        {
          alias: "mushroom",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bigmushroom.png"
        },
        {
          alias: "mushroom-slice",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/minimushroom.png"
        },
        // Sound & music resources
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
          alias: "level-failure",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/brass-fail.mp3"
        },
        {
          alias: "single-completion",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/media/audioblocks-happy-happy-award-achievement.mp3"
        },
        {
          alias: "button-click",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/text-notification.mp3"
        },
        {
          alias: "tick-checkbox",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/tick.mp3"
        },
        {
          alias: "button-close-sound",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/analog-appliance-button-7.mp3"
        },
        {
          alias: "gameplay-music",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/8bittownthemesong.mp3"
        },
        {
          alias: "game-restart-sound",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/game-restart-audio.wav"
        },
        // Font styles
        {
          alias: "ChunkFive",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/ChunkFive-Regular.otf"
        },
        // GIFs
        {
          alias: "firework",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/firework-2.gif"
        },
        {
          alias: "raindrop",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/raindrop.gif"
        }
      ];

      const bgMainMenuTexture = await PIXI.Assets.load({
        alias: "bg-main-menu",
        src:
          "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bbq-grill-bg-6-compressed.jpg"
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
      rect.beginFill("#000000"); // Black color
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
        fill: "#FFFFFF",
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
      if (window && window["webkit"]) {
        window["webkit"].messageHandlers["cordova_iab"].postMessage(
          JSON.stringify({
            type: "loadDone",
            data: null
          })
        );
      }
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
        fontFamily: "Chunkfive Regular",
        fontSize: fontSize,
        fill: "#000000",
        dropShadow: false,
        fontWeight: "normal",
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
      rect.beginFill("#000000"); // Black color
      rect.alpha = 0;
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
        soundEffectPlay("button-click");
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
        soundEffectPlay("button-click");
        this.switchToSettingScene = true;
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
      bgTextQuit.on("pointerdown", () => {
        soundEffectPlay("button-click");
        if (!window || !window["webkit"]) {
          return;
        }
        window["webkit"].messageHandlers["cordova_iab"].postMessage(
          JSON.stringify({
            type: "quit",
            data: null
          })
        );
      });
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
      gamePlayMusic = PIXI.Assets.get("gameplay-music");
      backgroundMusicPlay();
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
      this.type = "level-selection-scene";
      this.container = new PIXI.Container();
      this.objects = [];
      this.isDestroyed = false;
      this.currentSelectedPage = 0;
      this.createScene();
    }

    createScene() {
      // Get bg main menu
      const levelSelectionTexture = PIXI.Assets.get("bg-main-menu");

      // Get canvas size ratio
      let scaleX = this.app.renderer.width / levelSelectionTexture.width;
      let scaleY = this.app.renderer.height / levelSelectionTexture.height;
      let scale = scaleX > scaleY ? scaleX : scaleY;

      // Calculate font size
      let fontSize = Math.round((scale / 0.3) * 18 * 10) / 10;

      // Create text with custom style
      let style = new PIXI.TextStyle({
        fontFamily: "Chunkfive Regular",
        fontSize: fontSize,
        fill: "#000000",
        dropShadow: false,
        fontWeight: "normal",
        wordWrap: true,
        wordWrapWidth: 440,
        letterSpacing: 2,
        lineJoin: "round"
      });

      // Create blur filter
      const blurFilter = new PIXI.BlurFilter();
      blurFilter.blur = 5; // Adjust the blur amount

      // Create bg level selection image
      const levelSelection = new PIXI.Sprite(levelSelectionTexture);
      levelSelection.anchor.set(0.5);
      levelSelection.scale.set(floor(scale, 2));
      levelSelection.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      levelSelection.filters = [blurFilter];
      this.objects.push(levelSelection);
      this.container.addChild(levelSelection);

      // Create a graphic rectangle
      const rect = new PIXI.Graphics();
      rect.beginFill("#000000"); // Black color
      rect.alpha = 0.5;
      rect.drawRect(
        Math.round(-this.app.renderer.width / 2),
        Math.round(-this.app.renderer.height / 2),
        Math.round(this.app.renderer.width),
        Math.round(this.app.renderer.height)
      );
      rect.endFill();
      rect.position.set(this.app.screen.width / 2, this.app.screen.height / 2);
      this.objects.push(rect);
      this.container.addChild(rect);

      // Create banner image (filled 90% of the width / height)
      let bannerTexture = PIXI.Assets.get("banner"),
        scaleBannerX = (this.app.renderer.height * 0.9) / bannerTexture.height,
        scaleBannerY = (this.app.renderer.width * 0.9) / bannerTexture.width,
        scaleBanner = scaleBannerY > scaleBannerX ? scaleBannerX : scaleBannerY;

      let banner = new PIXI.Sprite(bannerTexture);
      banner.anchor.set(0.5);
      banner.scale.set(scaleBanner);
      banner.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      this.objects.push(banner);
      this.container.addChild(banner);

      let levelSelectionBoxTexture = PIXI.Assets.get("patty-running");
      let scaleBoxX =
          this.app.renderer.width / 5 / levelSelectionBoxTexture.width,
        scaleBoxY =
          this.app.renderer.height / 5 / levelSelectionBoxTexture.height,
        scaleBox = scaleBoxX < scaleBoxY ? scaleBoxX : scaleBoxY;

      this.levelSelectionPages = [[]];
      let startPositionY = -1.3;
      let startPositionX = -1.3;
      let currentPageDisplayCount = 0;
      for (let level = 0; level < 126; level++) {
        // Only display a maximum of 12 levels on a page
        if (currentPageDisplayCount >= 9) {
          currentPageDisplayCount = 0;
          this.levelSelectionPages.push([]);
        }
        let incrementY =
            startPositionY + Math.floor(currentPageDisplayCount / 3) * 1.3,
          incrementX = startPositionX + (currentPageDisplayCount % 3) * 1.3;

        // Create level selection box
        let box = new PIXI.Sprite(levelSelectionBoxTexture);
        box.anchor.set(0.5);
        box.scale.set(floor(scaleBox, 2));
        box.position.set(
          this.app.screen.width / 2 + incrementX * floor(box.width, 2),
          this.app.screen.height / 2 + incrementY * floor(box.height, 2)
        );
        box.level = level;
        if (level > userCompletedLevel) {
          box.tint = "#3d3d3d";
        }
        makeInteractive(box);
        box.on("pointerdown", () => {
          soundEffectPlay("button-click");
          if (box.level > userCompletedLevel) return;
          this.selectedGameLevel = box.level;
          this.switchToGameScene = true;
        });
        this.objects.push(box);
        this.container.addChild(box);

        // Create text inside the box
        let text = new PIXI.Text(level + 1, style);
        text.anchor.set(0.5);
        text.position.set(box.x, box.y + (box.height / 2) * 1.1);
        this.objects.push(text);
        this.container.addChild(text);

        this.levelSelectionPages[this.levelSelectionPages.length - 1].push({
          levelSprite: box,
          textSprite: text
        });

        currentPageDisplayCount++;
      }

      // Create left and right button
      let leftArrow = new PIXI.Sprite(PIXI.Assets.get("left-button"));
      leftArrow.anchor.set(0.5);
      leftArrow.scale.set(floor((scaleBanner / 0.67) * 0.25, 2));
      leftArrow.scale.x *= -1; // Flip image
      leftArrow.position.set(
        this.app.screen.width / 5,
        banner.y + floor(banner.height * 0.5, 2)
      );
      makeInteractive(leftArrow);
      leftArrow.on("pointerdown", () => {
        soundEffectPlay("button-click");
        if (this.currentSelectedPage) this.currentSelectedPage--;
        else this.currentSelectedPage = this.levelSelectionPages.length - 1;
      });
      this.objects.push(leftArrow);
      this.container.addChild(leftArrow);

      let rightArrow = new PIXI.Sprite(PIXI.Assets.get("left-button"));
      rightArrow.anchor.set(0.5);
      rightArrow.scale.set(floor((scaleBanner / 0.67) * 0.25, 2));
      rightArrow.position.set(
        (this.app.screen.width / 5) * 4,
        banner.y + floor(banner.height * 0.5, 2)
      );
      makeInteractive(rightArrow);
      rightArrow.on("pointerdown", () => {
        soundEffectPlay("button-click");
        this.currentSelectedPage =
          (this.currentSelectedPage + 1) % this.levelSelectionPages.length;
      });
      this.objects.push(rightArrow);
      this.container.addChild(rightArrow);

      // Create back button
      let backButton = new PIXI.Sprite(PIXI.Assets.get("close-button"));
      backButton.anchor.set(0.5);
      backButton.scale.set(floor((scaleBanner / 0.67) * 0.25, 2));
      backButton.position.set(
        (this.app.screen.width / 6) * 5,
        banner.y - floor(banner.height * 0.5, 2)
      );
      makeInteractive(backButton);
      backButton.on("pointerdown", () => {
        soundEffectPlay("button-close-sound");
        this.switchToMainMenuScene = true;
      });
      this.objects.push(backButton);
      this.container.addChild(backButton);
    }

    show() {
      this.app.stage.addChild(this.container);
    }

    hide() {
      this.app.stage.removeChild(this.container);
    }

    destroy() {
      this.levelSelectionPages = null;
      this.objects.forEach((obj) => {
        this.container.removeChild(obj);
        obj.destroy();
      });
      this.objects = [];
      this.isDestroyed = true;
    }

    update() {
      for (let page = 0; page < this.levelSelectionPages.length; page++) {
        this.levelSelectionPages[page].forEach((elem) => {
          if (this.currentSelectedPage === page) {
            elem.textSprite.visible = true;
            elem.levelSprite.visible = true;
          } else {
            elem.textSprite.visible = false;
            elem.levelSprite.visible = false;
          }
          if (elem.levelSprite.level <= userCompletedLevel) {
            elem.levelSprite.tint = "#ffffff";
          } else {
            elem.levelSprite.tint = "#3d3d3d";
          }
        });
      }
    }
  }

  // Class for setting scene
  class SettingScene {
    constructor(app) {
      this.app = app;
      this.type = "setting-scene";
      this.container = new PIXI.Container();
      this.objects = [];
      this.isDestroyed = false;
      this.createScene();
    }

    createScene() {
      // Get bg main menu
      const settingTexture = PIXI.Assets.get("bg-main-menu");

      // Get canvas size ratio
      let scaleX = this.app.renderer.width / settingTexture.width;
      let scaleY = this.app.renderer.height / settingTexture.height;
      let scale = Math.max(scaleX, scaleY);

      // Calculate font size
      let fontSize = Math.round((scale / 0.18) * 11 * 10) / 10;

      // Create text with custom style
      let style = new PIXI.TextStyle({
        fontFamily: "Chunkfive Regular",
        fontSize: fontSize,
        fill: "#000000",
        dropShadow: false,
        fontWeight: "normal",
        wordWrap: true,
        wordWrapWidth: 440,
        letterSpacing: 2,
        lineJoin: "round"
      });

      // Create blur filter
      const blurFilter = new PIXI.BlurFilter();
      blurFilter.blur = 5; // Adjust the blur amount

      // Create bg main menu image
      const setting = new PIXI.Sprite(settingTexture);
      setting.anchor.set(0.5);
      setting.scale.set(floor(scale, 2));
      setting.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      setting.filters = [blurFilter];
      this.objects.push(setting);
      this.container.addChild(setting);

      // Create a graphic rectangle
      const rect = new PIXI.Graphics();
      rect.beginFill("#000000"); // Black color
      rect.alpha = 0.5;
      rect.drawRect(
        Math.round(-this.app.renderer.width / 2),
        Math.round(-this.app.renderer.height / 2),
        Math.round(this.app.renderer.width),
        Math.round(this.app.renderer.height)
      );
      rect.endFill();
      rect.position.set(this.app.screen.width / 2, this.app.screen.height / 2);
      this.objects.push(rect);
      this.container.addChild(rect);

      // Create banner image (filled 90% of the width / height)
      let bannerTexture = PIXI.Assets.get("banner"),
        scaleBannerX = (this.app.renderer.height * 0.9) / bannerTexture.height,
        scaleBannerY = (this.app.renderer.width * 0.9) / bannerTexture.width,
        scaleBanner = Math.min(scaleBannerX, scaleBannerY);

      let banner = new PIXI.Sprite(bannerTexture);
      banner.anchor.set(0.5);
      banner.scale.set(scaleBanner);
      banner.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      this.objects.push(banner);
      this.container.addChild(banner);

      // Create text
      let soundEffectText = new PIXI.Text("SOUND EFFECT", style);
      soundEffectText.anchor.set(0.5);
      // Create tick
      let tickSoundEffect = new PIXI.Sprite(
        soundEffect ? PIXI.Assets.get("tick") : PIXI.Assets.get("untick")
      );
      tickSoundEffect.anchor.set(0.5);
      tickSoundEffect.scale.set((scaleBanner / 0.5) * 0.15);
      makeInteractive(tickSoundEffect);
      tickSoundEffect.on("pointerdown", () => {
        soundEffect = !soundEffect;
        window.localStorage.setItem("sound-effect", soundEffect ? 1 : 0);
        tickSoundEffect.texture = soundEffect
          ? PIXI.Assets.get("tick")
          : PIXI.Assets.get("untick");
        soundEffectPlay("tick-checkbox");
      });

      soundEffectText.position.set(
        this.app.renderer.width / 2 -
          (soundEffectText.width + tickSoundEffect.width * 2) / 2 +
          soundEffectText.width / 2,
        this.app.renderer.height / 2 - banner.height / 4
      );
      this.objects.push(soundEffectText);
      this.container.addChild(soundEffectText);

      tickSoundEffect.position.set(
        this.app.screen.width / 2 +
          (soundEffectText.width + tickSoundEffect.width * 2) / 2 -
          tickSoundEffect.width / 2,
        this.app.renderer.height / 2 - banner.height / 4
      );
      this.objects.push(tickSoundEffect);
      this.container.addChild(tickSoundEffect);

      // Create text
      let musicText = new PIXI.Text("MUSIC", style);
      musicText.anchor.set(0.5);
      musicText.position.set(soundEffectText.x, this.app.renderer.height / 2);
      this.objects.push(musicText);
      this.container.addChild(musicText);
      // Create tick
      let tickMusic = new PIXI.Sprite(
        music ? PIXI.Assets.get("tick") : PIXI.Assets.get("untick")
      );
      tickMusic.anchor.set(0.5);
      tickMusic.scale.set((scaleBanner / 0.5) * 0.15);
      tickMusic.position.set(tickSoundEffect.x, this.app.renderer.height / 2);
      makeInteractive(tickMusic);
      tickMusic.on("pointerdown", () => {
        music = !music;
        if (!music) {
          if (activeMusic === "background-music") {
            backgroundMusic.stop();
          } else {
            gameplayMusic.stop();
          }
        } else {
          if (activeMusic === "background-music") {
            !backgroundMusic.isPlaying && backgroundMusicPlay();
          } else {
            !gameplayMusic.isPlaying && gameplayMusicPlay();
          }
        }
        window.localStorage.setItem("music", music ? 1 : 0);
        tickMusic.texture = music
          ? PIXI.Assets.get("tick")
          : PIXI.Assets.get("untick");
        soundEffectPlay("tick-checkbox");
      });
      this.objects.push(tickMusic);
      this.container.addChild(tickMusic);

      // Create text
      let vibrationText = new PIXI.Text("VIBRATION", style);
      vibrationText.anchor.set(0.5);
      vibrationText.position.set(
        soundEffectText.x,
        this.app.renderer.height / 2 + banner.height / 4
      );
      this.objects.push(vibrationText);
      this.container.addChild(vibrationText);
      // Create tick
      let tickVibration = new PIXI.Sprite(
        vibration ? PIXI.Assets.get("tick") : PIXI.Assets.get("untick")
      );
      tickVibration.anchor.set(0.5);
      tickVibration.scale.set((scaleBanner / 0.5) * 0.15);
      tickVibration.position.set(
        tickSoundEffect.x,
        this.app.renderer.height / 2 + banner.height / 4
      );
      makeInteractive(tickVibration);
      tickVibration.on("pointerdown", () => {
        vibration = !vibration;
        window.localStorage.setItem("vibration", vibration ? 1 : 0);
        tickVibration.texture = vibration
          ? PIXI.Assets.get("tick")
          : PIXI.Assets.get("untick");
        soundEffectPlay("tick-checkbox");
      });
      this.objects.push(tickVibration);
      this.container.addChild(tickVibration);

      // Create back button
      let backButton = new PIXI.Sprite(PIXI.Assets.get("close-button"));
      backButton.anchor.set(0.5);
      backButton.scale.set(floor((scaleBanner / 0.67) * 0.25, 2));
      backButton.position.set(
        (this.app.screen.width / 6) * 5,
        banner.y - floor(banner.height * 0.5, 2)
      );
      makeInteractive(backButton);
      backButton.on("pointerdown", () => {
        soundEffectPlay("button-close-sound");
        this.switchToMainMenuScene = true;
      });
      this.objects.push(backButton);
      this.container.addChild(backButton);
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

  class BBQ_Sprite {
    constructor() {}

    createRectGraphic(x, y, width, height, color) {
      return new PIXI.Graphics().rect(x, y, width, height).fill(color);
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

    getParentSpriteNameByChildName(childName) {
      switch (childName) {
        case "carrot-slice":
          return "carrot";
          break;
        case "cheese-slice":
          return "cheese";
          break;
        case "crab-slice":
          return "crab";
          break;
        case "drumstick-slice":
          return "drumstick";
          break;
        case "marshmallow-slice":
          return "marshmallow";
          break;
        case "mushroom-slice":
          return "mushroom";
          break;
        case "greenpepper-slice":
          return "greenpepper";
          break;
        case "potato-slice":
          return "potato";
          break;
        case "squid-slice":
          return "squid";
          break;
        case "steak-slice":
          return "steak";
          break;
        case "cabbage-slice":
          return "cabbage";
          break;
        case "eggplant-slice":
          return "eggplant";
          break;
        case "prawn":
          return "lobster";
          break;
        case "mini-sausage":
          return "sausage";
          break;
        case "salmon-slice":
          return "salmon";
          break;
        case "cucumber-slice":
          return "cucumber";
          break;
        case "meat":
          return "chicken-wing";
          break;
        default:
          return "chicken-wing";
          break;
      }
    }
  }

  class Stick extends BBQ_Sprite {
    constructor(scale, maxFoodPerStick) {
      super();
      this.maxFoodPerStick = maxFoodPerStick;
      this.content = [];
      this.container = new PIXI.Container();
      this.scale = scale;

      // Create stick
      this.createStick();

      // Create rect
      this.createInteractiveRect();

      // Setup filter
      this.filter = super.createGlowFilter();
      this.isSelected = false;
    }

    createStick() {
      let stick = new PIXI.Sprite(PIXI.Assets.get("bbq-stick"));
      stick.anchor.set(0.5);
      stick.scale.set(this.scale);
      this.stick = { type: "bbq-stick", obj: stick };
      this.container.addChild(stick);
    }

    createInteractiveRect() {
      let rect = super.createRectGraphic(
        -220 * this.scale * 0.5,
        -this.stick.obj.height * 0.5,
        220 * this.scale,
        this.stick.obj.height,
        "#0f0"
      );
      // Enable interaction for rect
      rect.interactive = true;
      rect.buttonMode = true;
      rect.alpha = 0.0;
      rect.cursor = "pointer";
      rect.on("pointerdown", () => this.onClick());
      this.rect = { obj: rect, type: "rect" };
      this.container.addChild(rect);
    }

    onClick() {
      if (this.completedPuzzleSprite) return;
      this.isSelected = !this.isSelected;
      if (this.isSelected) {
        this.selectionTimestamp = Date.now();
        this.playUpAnimation();
      } else {
        this.selectionTimestamp = null;
        this.playDownAnimation();
      }
    }

    createChildSprite(childName) {
      let sprite = new PIXI.Sprite(PIXI.Assets.get(childName));
      sprite.anchor.set(0.5);
      sprite.x = -500;
      sprite.y = -500;
      this.content.push({ obj: sprite, type: childName });
      this.scaleTo(this.scale);
      this.container.addChild(sprite);
    }

    createParentSprite(childName) {
      let sprite = new PIXI.Sprite(
        PIXI.Assets.get(super.getParentSpriteNameByChildName(childName))
      );
      sprite.anchor.set(0.5);
      sprite.x = this.stick.obj.x;
      sprite.y = this.stick.obj.y;
      this.completedPuzzleSprite = { obj: sprite, type: childName };
      this.scaleTo(this.stick.obj.scale.x);
      this.container.addChild(sprite);
    }

    getTopSpriteInfo() {
      let type = this.content.length
        ? this.content[this.content.length - 1].type
        : null;
      let length = 0;
      for (let index = this.content.length - 1; index >= 0; index--) {
        if (type !== this.content[index].type) break;
        length++;
      }
      return { type: type, length: length };
    }

    setCompletion() {
      let temp = this.getTopSpriteInfo();
      for (let index = 0; index < temp.length; index++) {
        let sprite = this.content.pop();
        this.container.removeChild(sprite.obj);
        sprite.obj.destroy();
      }
      this.createParentSprite(temp.type);
    }

    unloadTopSprites() {
      let temp = this.getTopSpriteInfo();
      for (let index = 0; index < temp.length; index++) {
        let sprite = this.content.pop();
        this.container.removeChild(sprite.obj);
        sprite.obj.destroy();
      }
      if (temp.length && this.isSelected) {
        this.isSelected = false;
        this.selectionTimestamp = null;
      }
    }

    loadTopSprites(type, length) {
      for (let temp = 0; temp < length; temp++) {
        this.createChildSprite(type);
      }
      this.isSelected = false;
      this.selectionTimestamp = null;
      this.playPlacementAnimation(length);
    }

    getDefaultYCoordinate(index) {
      let temp = this.stick.obj.height / 6;

      return (
        this.stick.obj.y +
        this.stick.obj.height / 2 -
        temp * (0.5 + (MAX_FOOD_PER_STICK - this.maxFoodPerStick)) -
        temp * index
      );
      return (
        this.stick.obj.y +
        Math.floor(
          (((150 * this.stick.obj.scale.x * 2 -
            index * 150 * this.stick.obj.scale.x * 2) *
            this.stick.obj.scale.x) /
            0.4) *
            100
        ) /
          100
      );
    }

    moveTo(x, y) {
      // Update stick position
      this.stick.obj.x = x;
      this.stick.obj.y = y;
      // Update rect position
      this.rect.obj.x = this.stick.obj.x;
      this.rect.obj.y = this.stick.obj.y;
      // Update children position accordingly
      this.content.forEach((elem, index) => {
        elem.obj.y = this.getDefaultYCoordinate(index);
        elem.obj.x = this.stick.obj.x;
      });
    }

    scaleTo(scale) {
      this.scale = scale;
      this.stick.obj.scale.set(scale);
      this.content.forEach((elem, index) => {
        elem.obj.scale.set(scale);
      });
      if (this.completedPuzzleSprite) {
        this.completedPuzzleSprite.obj.scale.set(
          Math.floor((scale / 0.4) * 0.85 * 10) / 10
        );
      }
      //this.rect.obj.scale.set(Math.floor((scale / 0.35) * 1 * 10) / 10);
    }

    playUpAnimation() {
      this.animation = "UP";
      this.selectionCurrentState = "WAIT";
      this.selectionNextState = "WAIT";
      this.selectionAnimation = {
        maxUpDistance:
          Math.floor(((50 * this.stick.obj.scale.x) / 0.4) * 10) / 10,
        speed: Math.floor(((6 * this.stick.obj.scale.x) / 0.4) * 10) / 10
      };
    }
    playDownAnimation() {
      this.animation = "DOWN";
      this.selectionCurrentState = "WAIT";
      this.selectionNextState = "WAIT";
      this.selectionAnimation = {
        maxDownDistance:
          Math.floor(((50 * this.stick.obj.scale.x) / 0.4) * 10) / 10,
        speed: Math.floor(((6 * this.stick.obj.scale.x) / 0.4) * 10) / 10
      };
    }
    playPlacementAnimation(count) {
      this.animation = "PLACEMENT";
      this.selectionCurrentState = "WAIT";
      this.selectionNextState = "WAIT";
      this.selectionAnimation = {
        maxDownDistance:
          Math.floor(((50 * this.stick.obj.scale.x) / 0.4) * 10) / 10,
        speed: Math.floor(((6 * this.stick.obj.scale.x) / 0.4) * 10) / 10,
        count: count
      };
    }
    destroy() {
      this.container.removeChild(this.stick.obj);
      this.stick.obj.destroy();
      this.stick = null;
      this.container.removeChild(this.rect.obj);
      this.rect.obj.destroy();
      this.rect = null;
      if (this.completedPuzzleSprite) {
        this.container.removeChild(this.completedPuzzleSprite.obj);
        this.completedPuzzleSprite.obj.destroy();
        this.completedPuzzleSprite = null;
      }
      this.content.forEach((elem) => {
        this.container.removeChild(elem.obj);
        elem.obj.destroy();
      });
      this.content = [];
      this.container.destroy();
      this.container = null;
      this.filter.destroy();
      this.filter = null;
      this.isDestroyed = true;
    }
    update() {
      let type = null;
      switch (this.selectionCurrentState) {
        case "IDLE":
          this.selectionNextState = "WAIT";
          break;
        case "WAIT":
          if (this.animation === "UP") this.selectionNextState = "PRE-UP";
          else if (this.animation === "DOWN")
            this.selectionNextState = "PRE-DOWN";
          else if (this.animation === "PLACEMENT")
            this.selectionNextState = "PRE-PLACEMENT";
          else this.selectionNextState = "WAIT";
          break;
        case "PRE-PLACEMENT":
          let temp1 = this.content.length - this.selectionAnimation.count;
          for (let index = this.content.length - 1; index >= 0; index--) {
            if (index >= temp1) {
              let startingPos =
                this.getDefaultYCoordinate(index) -
                this.selectionAnimation.maxDownDistance;
              this.content[index].obj.y = startingPos;
              this.content[index].obj.x = this.stick.obj.x;
            } else {
              this.content[index].obj.y = this.getDefaultYCoordinate(index);
              this.content[index].obj.x = this.stick.obj.x;
            }
            // Remove filter
            this.content[index].obj.filters = null;
          }
          this.selectionNextState = "PLACEMENT";
          break;
        case "PLACEMENT":
          let temp2 = this.content.length - this.selectionAnimation.count;
          for (let index = this.content.length - 1; index >= 0; index--) {
            if (index < temp2) {
              break;
            }
            let startPos =
              this.getDefaultYCoordinate(index) -
              this.selectionAnimation.maxDownDistance;
            if (
              Math.abs(startPos - this.content[index].obj.y) >=
              this.selectionAnimation.maxDownDistance
            ) {
              this.selectionNextState = "WAIT";
              this.animation = null;
              this.content[index].obj.y = this.getDefaultYCoordinate(index);
            } else {
              this.content[index].obj.y =
                this.content[index].obj.y + this.selectionAnimation.speed;
              this.selectionNextState = "PLACEMENT";
            }
          }
          break;
        case "PRE-UP":
          soundEffectPlay("up");
          let skipFilter = false;
          for (let index = this.content.length - 1; index >= 0; index--) {
            this.content[index].obj.y = this.getDefaultYCoordinate(index);
            this.content[index].obj.x = this.stick.obj.x;
            if (!type) {
              type = this.content[index].type;
            }
            if (type !== this.content[index].type || skipFilter) {
              skipFilter = true;
              continue;
            }
            // Apply filter
            this.content[index].obj.filters = [this.filter];
          }
          this.selectionNextState = "UP";
          break;
        case "UP":
          for (let index = this.content.length - 1; index >= 0; index--) {
            if (!type) {
              type = this.content[index].type;
            }
            if (type !== this.content[index].type) {
              break;
            }

            let startingPos = this.getDefaultYCoordinate(index);
            if (
              Math.abs(startingPos - this.content[index].obj.y) >=
              this.selectionAnimation.maxUpDistance
            ) {
              this.selectionNextState = "WAIT";
              this.animation = null;
              this.content[index].obj.y =
                startingPos - this.selectionAnimation.maxUpDistance;
            } else {
              this.content[index].obj.y =
                this.content[index].obj.y - this.selectionAnimation.speed;
              this.selectionNextState = "UP";
            }
          }
          break;
        case "PRE-DOWN":
          soundEffectPlay("down");
          for (let index = this.content.length - 1; index >= 0; index--) {
            if (!type) {
              type = this.content[index].type;
            }
            if (type !== this.content[index].type) {
              break;
            }
            // Remove filter
            this.content[index].obj.filters = null;

            let startingPos =
              this.getDefaultYCoordinate(index) -
              this.selectionAnimation.maxDownDistance;
            this.content[index].obj.y = startingPos;
            this.content[index].obj.x = this.stick.obj.x;
          }
          this.selectionNextState = "DOWN";
          break;
        case "DOWN":
          for (let index = this.content.length - 1; index >= 0; index--) {
            if (!type) {
              type = this.content[index].type;
            }
            if (type !== this.content[index].type) {
              break;
            }
            let startPos =
              this.getDefaultYCoordinate(index) -
              this.selectionAnimation.maxDownDistance;
            if (
              Math.abs(startPos - this.content[index].obj.y) >=
              this.selectionAnimation.maxDownDistance
            ) {
              this.selectionNextState = "WAIT";
              this.animation = null;
              this.content[index].obj.y = this.getDefaultYCoordinate(index);
            } else {
              this.content[index].obj.y =
                this.content[index].obj.y + this.selectionAnimation.speed;
              this.selectionNextState = "DOWN";
            }
          }
          break;
        default:
          this.selectionNextState = "IDLE";
          break;
      }
      this.selectionCurrentState = this.selectionNextState;
    }
  }

  // Class for gameplay scene
  class GamePlayScene {
    constructor(app, level) {
      this.app = app;
      this.level = level;
      this.type = "gameplay-scene";
      this.container = new PIXI.Container();
      this.objects = [];
      this.sticksGroup = [];
      this.isDestroyed = false;
      this.isPuzzleCompleted = false;
      this.isPuzzleFailed = false;
      this.createScene();
    }

    createScene() {
      // Get bg main menu
      const gamePlayTexture = PIXI.Assets.get("bg-gameplay-1");

      // Get canvas size ratio
      let scaleX = this.app.renderer.width / gamePlayTexture.width;
      let scaleY = this.app.renderer.height / gamePlayTexture.height;
      let scale = scaleX > scaleY ? scaleX : scaleY;

      // Calculate font size
      let fontSize = Math.round((scale / 0.3) * 24 * 10) / 10;

      // Create text with custom style
      let style = new PIXI.TextStyle({
        fontFamily: "Chunkfive Regular",
        fontSize: fontSize,
        fill: "#FFFFFF",
        dropShadow: false,
        fontWeight: "normal",
        wordWrap: true,
        wordWrapWidth: 440,
        letterSpacing: 2,
        lineJoin: "round"
      });

      // Calculate font size
      let fontSizeBanner = Math.round((scale / 0.46) * 25 * 10) / 10;

      // Create text with custom style
      let styleBanner = new PIXI.TextStyle({
        fontFamily: "Chunkfive Regular",
        fontSize: fontSizeBanner,
        fill: "#000000",
        dropShadow: false,
        fontWeight: "normal",
        wordWrap: true,
        wordWrapWidth: 440,
        letterSpacing: 2,
        lineJoin: "round"
      });

      // Create blur filter
      this.blurFilter = new PIXI.BlurFilter();
      this.blurFilter.blur = 5; // Adjust the blur amount

      // Create bg main menu image
      const gamePlayBG = new PIXI.Sprite(gamePlayTexture);
      gamePlayBG.anchor.set(0.5);
      gamePlayBG.scale.set(floor(scale, 2));
      gamePlayBG.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      gamePlayBG.filters = [this.blurFilter];
      this.objects.push(gamePlayBG);
      this.container.addChild(gamePlayBG);

      // Create a graphic rectangle
      const rect = new PIXI.Graphics();
      rect.beginFill("#000000"); // Black color
      rect.alpha = 0.4;
      rect.drawRect(
        Math.round(-this.app.renderer.width / 2),
        Math.round(-this.app.renderer.height / 2),
        Math.round(this.app.renderer.width),
        Math.round(this.app.renderer.height)
      );
      rect.endFill();
      rect.position.set(this.app.screen.width / 2, this.app.screen.height / 2);
      this.objects.push(rect);
      this.container.addChild(rect);

      // Level banner
      const levelBanner = new PIXI.Sprite(PIXI.Assets.get("wooden-banner"));
      levelBanner.anchor.set(0.5);
      levelBanner.scale.set(floor((scale / 0.25) * 0.15, 2));
      levelBanner.position.set(
        this.app.screen.width / 2,
        levelBanner.height / 2
      );
      this.objects.push(levelBanner);
      this.container.addChild(levelBanner);

      // Create text
      let levelText = new PIXI.Text(this.level + 1, style);
      levelText.anchor.set(0.5);
      levelText.position.set(levelBanner.x, levelBanner.y);
      this.objects.push(levelText);
      this.container.addChild(levelText);

      // Create setting icon
      const settingIcon = new PIXI.Sprite(PIXI.Assets.get("setting-icon"));
      settingIcon.anchor.set(0.5);
      settingIcon.scale.set(floor((scale / 0.45) * 0.16, 2));
      settingIcon.position.set(
        (this.app.screen.width * 5) / 6,
        levelBanner.height / 2
      );
      makeInteractive(settingIcon);
      settingIcon.on("pointerdown", () => {
        soundEffectPlay("button-close-sound");
        this.showPrompt();
      });
      this.settingIcon = settingIcon;
      this.objects.push(settingIcon);
      this.container.addChild(settingIcon);

      // Game logic
      let numberOfRows,
        numberOfColumns,
        numberOfSticks,
        maxFoodPerStick,
        foodNames;

      switch (this.level) {
        case 0:
          numberOfRows = 1 + 1;
          numberOfColumns = 3 + 1;
          numberOfSticks = 3;
          maxFoodPerStick = 3;
          foodNames = ["drumstick-slice", "mini-sausage"];
          break;
        case 1:
        case 2:
        case 3:
        case 4:
          numberOfRows = 1 + 1;
          numberOfColumns = 3 + 1;
          numberOfSticks = 3;
          maxFoodPerStick = 4;
          foodNames = ["drumstick-slice", "mini-sausage"];
          break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          numberOfRows = 2 + 1;
          numberOfColumns = 3 + 1;
          numberOfSticks = 5;
          maxFoodPerStick = 3;
          foodNames = ["drumstick-slice", "mini-sausage", "cabbage-slice"];
          break;
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
          numberOfRows = 2 + 1;
          numberOfColumns = 3 + 1;
          numberOfSticks = 5;
          maxFoodPerStick = 5;
          foodNames = ["drumstick-slice", "mini-sausage", "cabbage-slice"];
          break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
          numberOfRows = 2 + 1;
          numberOfColumns = 3 + 1;
          numberOfSticks = 6;
          maxFoodPerStick = 3;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice"
          ];
          break;
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
          numberOfRows = 2 + 1;
          numberOfColumns = 3 + 1;
          numberOfSticks = 6;
          maxFoodPerStick = 4;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice"
          ];
          break;
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
          numberOfRows = 2 + 1;
          numberOfColumns = 3 + 1;
          numberOfSticks = 6;
          maxFoodPerStick = 5;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice"
          ];
          break;
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
          numberOfRows = 2 + 1;
          numberOfColumns = 4 + 1;
          numberOfSticks = 7;
          maxFoodPerStick = 3;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice"
          ];
          break;
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
          numberOfRows = 2 + 1;
          numberOfColumns = 4 + 1;
          numberOfSticks = 7;
          maxFoodPerStick = 4;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice"
          ];
          break;
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
          numberOfRows = 2 + 1;
          numberOfColumns = 4 + 1;
          numberOfSticks = 7;
          maxFoodPerStick = 5;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice"
          ];
          break;
        case 46:
        case 47:
        case 48:
        case 49:
        case 50:
          numberOfRows = 2 + 1;
          numberOfColumns = 5 + 1;
          numberOfSticks = 8;
          maxFoodPerStick = 3;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn"
          ];
          break;
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
          numberOfRows = 2 + 1;
          numberOfColumns = 5 + 1;
          numberOfSticks = 8;
          maxFoodPerStick = 4;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn"
          ];
          break;
        case 56:
        case 57:
        case 58:
        case 59:
        case 60:
          numberOfRows = 2 + 1;
          numberOfColumns = 5 + 1;
          numberOfSticks = 8;
          maxFoodPerStick = 5;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn"
          ];
          break;
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
          numberOfRows = 2 + 1;
          numberOfColumns = 5 + 1;
          numberOfSticks = 9;
          maxFoodPerStick = 3;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn",
            "cheese-slice"
          ];
          break;
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
          numberOfRows = 2 + 1;
          numberOfColumns = 5 + 1;
          numberOfSticks = 9;
          maxFoodPerStick = 4;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn",
            "cheese-slice"
          ];
          break;
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
          numberOfRows = 2 + 1;
          numberOfColumns = 5 + 1;
          numberOfSticks = 9;
          maxFoodPerStick = 5;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn",
            "cheese-slice"
          ];
          break;
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
          numberOfRows = 2 + 1;
          numberOfColumns = 5 + 1;
          numberOfSticks = 10;
          maxFoodPerStick = 3;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn",
            "cheese-slice",
            "crab-slice"
          ];
          break;
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
          numberOfRows = 2 + 1;
          numberOfColumns = 5 + 1;
          numberOfSticks = 10;
          maxFoodPerStick = 4;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn",
            "cheese-slice",
            "crab-slice"
          ];
          break;
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
          numberOfRows = 2 + 1;
          numberOfColumns = 5 + 1;
          numberOfSticks = 10;
          maxFoodPerStick = 5;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn",
            "cheese-slice",
            "crab-slice"
          ];
          break;
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
          numberOfRows = 2 + 1;
          numberOfColumns = 6 + 1;
          numberOfSticks = 12;
          maxFoodPerStick = 3;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn",
            "cheese-slice",
            "crab-slice",
            "marshmallow-slice",
            "potato-slice"
          ];
          break;
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          numberOfRows = 2 + 1;
          numberOfColumns = 6 + 1;
          numberOfSticks = 12;
          maxFoodPerStick = 4;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn",
            "cheese-slice",
            "crab-slice",
            "marshmallow-slice",
            "potato-slice"
          ];
          break;
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
          numberOfRows = 2 + 1;
          numberOfColumns = 6 + 1;
          numberOfSticks = 12;
          maxFoodPerStick = 5;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn",
            "cheese-slice",
            "crab-slice",
            "marshmallow-slice",
            "potato-slice"
          ];
          break;
        case 96:
        case 97:
        case 98:
        case 99:
        case 100:
          numberOfRows = 3 + 1;
          numberOfColumns = 5 + 1;
          numberOfSticks = 14;
          maxFoodPerStick = 3;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn",
            "cheese-slice",
            "crab-slice",
            "marshmallow-slice",
            "potato-slice",
            "carrot-slice",
            "squid-slice"
          ];
          break;
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
          numberOfRows = 3 + 1;
          numberOfColumns = 5 + 1;
          numberOfSticks = 14;
          maxFoodPerStick = 4;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn",
            "cheese-slice",
            "crab-slice",
            "marshmallow-slice",
            "potato-slice",
            "carrot-slice",
            "squid-slice"
          ];
          break;
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
          numberOfRows = 3 + 1;
          numberOfColumns = 5 + 1;
          numberOfSticks = 14;
          maxFoodPerStick = 5;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn",
            "cheese-slice",
            "crab-slice",
            "marshmallow-slice",
            "potato-slice",
            "carrot-slice",
            "squid-slice"
          ];
          break;
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
          numberOfRows = 3 + 1;
          numberOfColumns = 6 + 1;
          numberOfSticks = 16;
          maxFoodPerStick = 3;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn",
            "cheese-slice",
            "crab-slice",
            "marshmallow-slice",
            "potato-slice",
            "carrot-slice",
            "squid-slice",
            "steak-slice",
            "greenpepper-slice"
          ];
          break;
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
          numberOfRows = 3 + 1;
          numberOfColumns = 6 + 1;
          numberOfSticks = 16;
          maxFoodPerStick = 4;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn",
            "cheese-slice",
            "crab-slice",
            "marshmallow-slice",
            "potato-slice",
            "carrot-slice",
            "squid-slice",
            "steak-slice",
            "greenpepper-slice"
          ];
          break;
        case 121:
        case 122:
        case 123:
        case 124:
        case 125:
          numberOfRows = 3 + 1;
          numberOfColumns = 6 + 1;
          numberOfSticks = 16;
          maxFoodPerStick = 5;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn",
            "cheese-slice",
            "crab-slice",
            "marshmallow-slice",
            "potato-slice",
            "carrot-slice",
            "squid-slice",
            "steak-slice",
            "greenpepper-slice"
          ];
          break;
        default:
          numberOfRows = 3 + 1;
          numberOfColumns = 6 + 1;
          numberOfSticks = 16;
          maxFoodPerStick = 5;
          foodNames = [
            "drumstick-slice",
            "mini-sausage",
            "cabbage-slice",
            "eggplant-slice",
            "salmon-slice",
            "prawn",
            "cheese-slice",
            "crab-slice",
            "marshmallow-slice",
            "potato-slice",
            "carrot-slice",
            "squid-slice",
            "steak-slice",
            "greenpepper-slice"
          ];
          break;
      }

      // Get canvas size ratio for stick scaling calculation
      let maxWidthPerSprite = 220,
        maxHeightPerSprite = 150;
      let scaleStickX =
        app.renderer.width / maxWidthPerSprite / numberOfColumns;
      let scaleStickY =
        app.renderer.height /
        numberOfRows /
        (maxHeightPerSprite * MAX_FOOD_PER_STICK);
      let scaleStick = Math.min(scaleStickX, scaleStickY);

      let allFoodNames = [];
      foodNames.forEach((name) => {
        let repeat = maxFoodPerStick;
        while (repeat--) allFoodNames.push(name);
      });
      // Shuffle thrice
      this.shuffle(allFoodNames);
      this.shuffle(allFoodNames);
      this.shuffle(allFoodNames);

      let startPositionX = 0,
        positionXCount = 0,
        startPositionY = 0;
      for (let stickCount = 0; stickCount < numberOfSticks; stickCount++) {
        let cStick = new Stick(scaleStick, maxFoodPerStick);
        for (let foodCount = 0; foodCount < maxFoodPerStick; foodCount++) {
          let foodName = allFoodNames.pop();
          if (!foodName) break;
          cStick.createChildSprite(foodName);
        }
        cStick.scaleTo(scaleStick);

        // Positioning
        positionXCount++;
        startPositionX += app.renderer.width / numberOfColumns;
        if (!stickCount) {
          startPositionY = app.renderer.height / numberOfRows;
        }
        if (positionXCount % numberOfColumns === 0) {
          positionXCount = 1;
          startPositionX = app.renderer.width / numberOfColumns;
          startPositionY += app.renderer.height / numberOfRows;
        }
        cStick.moveTo(startPositionX, startPositionY);
        this.container.addChild(cStick.container);
        this.sticksGroup.push(cStick);
      }

      this.maxFoodPerStick = maxFoodPerStick;

      // Create banner image (filled 90% of the width / height)
      let bannerTexture = PIXI.Assets.get("banner"),
        scaleBannerX = (this.app.renderer.height * 0.9) / bannerTexture.height,
        scaleBannerY = (this.app.renderer.width * 0.9) / bannerTexture.width,
        scaleBanner = Math.min(scaleBannerX, scaleBannerY);

      let banner = new PIXI.Sprite(bannerTexture);
      banner.anchor.set(0.5);
      banner.scale.set(scaleBanner);
      banner.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      this.banner = banner;
      this.objects.push(banner);

      // Create back button
      let backButton = new PIXI.Sprite(PIXI.Assets.get("close-button"));
      backButton.anchor.set(0.5);
      backButton.scale.set(floor((scaleBanner / 0.67) * 0.25, 2));
      backButton.position.set(
        (this.app.screen.width / 6) * 5,
        banner.y - floor(banner.height * 0.5, 2)
      );
      makeInteractive(backButton);
      backButton.on("pointerdown", () => {
        soundEffectPlay("button-close-sound");
        this.hidePrompt();
      });
      this.backButton = backButton;
      this.objects.push(backButton);

      // Create bg for text restart
      const bgTextRestart = new PIXI.Sprite(
        PIXI.Assets.get("bg-main-menu-button")
      );
      bgTextRestart.anchor.set(0.5);
      bgTextRestart.alpha = 1;
      bgTextRestart.scale.set(floor((scale / 0.46) * 0.5, 2));
      bgTextRestart.position.set(banner.x, banner.y - bgTextRestart.height);
      makeInteractive(bgTextRestart);
      bgTextRestart.on("pointerdown", () => {
        soundEffectPlay("game-restart-sound");
        this.switchToSameGameLevelScene = true;
      });
      this.bgTextRestart = bgTextRestart;
      this.objects.push(bgTextRestart);

      // Create restart text
      let restartText = new PIXI.Text("RESTART", styleBanner);
      restartText.anchor.set(0.5);
      restartText.position.set(bgTextRestart.x, bgTextRestart.y);
      this.restartText = restartText;
      this.objects.push(restartText);

      // Create bg for text quit
      const bgTextQuit = new PIXI.Sprite(
        PIXI.Assets.get("bg-main-menu-button")
      );
      bgTextQuit.anchor.set(0.5);
      bgTextQuit.alpha = 1;
      bgTextQuit.scale.set(floor((scale / 0.46) * 0.5, 2));
      bgTextQuit.position.set(banner.x, banner.y + bgTextQuit.height);
      makeInteractive(bgTextQuit);
      bgTextQuit.on("pointerdown", () => {
        soundEffectPlay("button-click");
        // Stop bg music
        gamePlayMusic.stop();
        backgroundMusic.stop();
        // Play gameplay music
        backgroundMusicPlay();
        this.switchToMainMenuScene = true;
      });
      this.bgTextQuit = bgTextQuit;
      this.objects.push(bgTextQuit);

      // Create restart text
      let quitText = new PIXI.Text("QUIT", styleBanner);
      quitText.anchor.set(0.5);
      quitText.position.set(bgTextQuit.x, bgTextQuit.y);
      this.quitText = quitText;
      this.objects.push(quitText);
    }

    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    showPrompt() {
      this.sticksGroup.forEach((stick) => {
        this.container.removeChild(stick.container);
      });
      this.container.addChild(this.banner);
      this.container.addChild(this.backButton);
      this.container.addChild(this.bgTextRestart);
      this.container.addChild(this.restartText);
      this.container.addChild(this.bgTextQuit);
      this.container.addChild(this.quitText);
      this.container.removeChild(this.settingIcon);
    }

    hidePrompt() {
      this.sticksGroup.forEach((stick) => {
        this.container.addChild(stick.container);
      });
      this.container.removeChild(this.backButton);
      this.container.removeChild(this.banner);
      this.container.removeChild(this.bgTextRestart);
      this.container.removeChild(this.restartText);
      this.container.removeChild(this.bgTextQuit);
      this.container.removeChild(this.quitText);
      this.container.addChild(this.settingIcon);
    }

    show() {
      this.app.stage.addChild(this.container);
    }

    hide() {
      this.app.stage.removeChild(this.container);
    }

    destroy() {
      this.blurFilter.destroy();
      this.blurFilter = null;
      this.objects.forEach((obj) => {
        this.container.removeChild(obj);
        obj.destroy();
      });
      this.sticksGroup.forEach((obj) => {
        this.container.removeChild(obj.container);
        obj.destroy();
      });
      this.sticksGroup = [];
      this.container.destroy();
      this.container = null;
      this.bgTextQuit = null;
      this.quitText = null;
      this.bgTextRestart = null;
      this.restartText = null;
      this.banner = null;
      this.backButton = null;
      this.settingIcon = null;
      this.isDestroyed = true;
    }

    update() {
      let isPuzzleCompleted = true,
        isPuzzleFailed = true;
      for (let indexM = 0; indexM < this.sticksGroup.length; indexM++) {
        let elem = this.sticksGroup[indexM];

        // Check for level completion
        if (!elem.completedPuzzleSprite && elem.content.length !== 0) {
          isPuzzleCompleted = false;
        }

        // Check for failure
        let currentTopInfo = elem.getTopSpriteInfo();
        // Filter stick sprites where not self and not completed
        let otherSticksGroup = this.sticksGroup.filter(
          (elem, index) => indexM !== index && !elem.completedPuzzleSprite
        );
        for (let temp = 0; temp < otherSticksGroup.length; temp++) {
          let topInfo = otherSticksGroup[temp].getTopSpriteInfo();
          if (
            otherSticksGroup[temp].content.length === 0 ||
            (topInfo.type === currentTopInfo.type &&
              otherSticksGroup[temp].content.length + currentTopInfo.length <=
                this.maxFoodPerStick)
          ) {
            isPuzzleFailed = false;
            break;
          }
        }

        // Update animation
        elem.update();

        if (elem.isSelected) {
          // Filter stick sprites where selected = true and not self
          let group = this.sticksGroup.filter(
            (elem, index) => elem.isSelected && indexM !== index
          );
          // Check if no other selection is detected and the only selected stick sprite has empty content
          if (!group.length && !elem.content.length) {
            // Unselect stick
            console.log("empty");
            elem.onClick();
            continue;
          }
          for (let index = 0; index < group.length; index++) {
            // Identify the first selected and second selected sprites
            let originSprite, targetSprite;
            if (elem.selectionTimestamp <= group[index].selectionTimestamp) {
              originSprite = elem;
              targetSprite = group[index];
            } else {
              originSprite = group[index];
              targetSprite = elem;
            }

            let originTopSpriteInfo = originSprite.getTopSpriteInfo(),
              targetTopSpriteInfo = targetSprite.getTopSpriteInfo();

            // Check if target and origin sprite are of different type
            if (
              targetTopSpriteInfo.length &&
              originTopSpriteInfo.type !== targetTopSpriteInfo.type
            ) {
              // Unselect both object
              originSprite.onClick();
              targetSprite.onClick();
              soundEffectPlay("error");
              console.log("err");
              break;
            }

            // Check if target length is enough to accommodate origin objects
            if (
              targetSprite.content.length + originTopSpriteInfo.length >
              this.maxFoodPerStick
            ) {
              // Unselect both object
              originSprite.onClick();
              targetSprite.onClick();
              soundEffectPlay("error");
              console.log("err2");
              break;
            }

            // Successful moving objects from origin to target stick
            soundEffectPlay("single-completion");
            originSprite.unloadTopSprites();
            targetSprite.loadTopSprites(
              originTopSpriteInfo.type,
              originTopSpriteInfo.length
            );

            // Check if target stick puzzle is completed
            if (
              targetSprite.getTopSpriteInfo().length === this.maxFoodPerStick
            ) {
              targetSprite.setCompletion();
            }
            break;
          }
        }
      }
      if (isPuzzleCompleted) {
        this.isPuzzleCompleted = true;
        soundEffectPlay("level-completion", {
          volume: 2
        });
      }
      if (isPuzzleFailed) {
        this.isPuzzleFailed = true;
        soundEffectPlay("level-failure", {
          volume: 2
        });
      }
    }
  }

  // Class for gameplay scene
  class GameCompleteScene {
    constructor(app) {
      this.app = app;
      this.level = 0;
      this.type = "game-complete-scene";
      this.container = new PIXI.Container();
      this.objects = [];
      this.isDestroyed = false;
      this.createScene();
    }

    createScene() {
      // Get bg main menu
      const gamePlayTexture = PIXI.Assets.get("bg-gameplay-1");

      // Get canvas size ratio
      let scaleX = this.app.renderer.width / gamePlayTexture.width;
      let scaleY = this.app.renderer.height / gamePlayTexture.height;
      let scale = scaleX > scaleY ? scaleX : scaleY;

      // Calculate font size
      let fontSize = Math.round((scale / 0.46) * 24 * 10) / 10;

      // Create text with custom style
      let style = new PIXI.TextStyle({
        fontFamily: "Chunkfive Regular",
        fontSize: fontSize,
        fill: "#000000",
        dropShadow: false,
        fontWeight: "normal",
        wordWrap: true,
        wordWrapWidth: 440,
        letterSpacing: 2,
        lineJoin: "round"
      });

      // Create blur filter
      //this.blurFilter = new PIXI.BlurFilter();
      //this.blurFilter.blur = 5; // Adjust the blur amount

      // Create bg main menu image
      /*const gamePlayBG = new PIXI.Sprite(gamePlayTexture);
      gamePlayBG.anchor.set(0.5);
      gamePlayBG.scale.set(floor(scale, 2));
      gamePlayBG.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      gamePlayBG.filters = [this.blurFilter];
      gamePlayBG.alpha = 0;
      this.objects.push(gamePlayBG);
      this.container.addChild(gamePlayBG);*/

      // Create a graphic rectangle
      const rect = new PIXI.Graphics();
      rect.beginFill("#000000"); // Black color
      rect.alpha = 0;
      rect.drawRect(
        Math.round(-this.app.renderer.width / 2),
        Math.round(-this.app.renderer.height / 2),
        Math.round(this.app.renderer.width),
        Math.round(this.app.renderer.height)
      );
      rect.endFill();
      rect.position.set(this.app.screen.width / 2, this.app.screen.height / 2);
      this.rect = rect;
      this.objects.push(rect);
      this.container.addChild(rect);

      // Get canvas size ratio
      let bannerTexture = PIXI.Assets.get("level-completion-bg");
      let scaleBannerX = this.app.renderer.width / bannerTexture.width;
      let scaleBannerY = this.app.renderer.height / bannerTexture.height;
      let scaleBanner = Math.min(scaleBannerX, scaleBannerY);
      this.scaleBanner = scaleBanner;

      // Add lights
      let light1 = new PIXI.Sprite(PIXI.Assets.get("light-rotate-1"));
      light1.anchor.set(0.5);
      light1.alpha = 0;
      light1.scale.set(floor((scaleBanner / 0.644) * 1, 2));
      light1.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      this.light1 = light1;
      this.objects.push(light1);
      this.container.addChild(light1);

      let light2 = new PIXI.Sprite(PIXI.Assets.get("light-rotate-2"));
      light2.anchor.set(0.5);
      light2.alpha = 0;
      light2.scale.set(floor((scaleBanner / 0.644) * 1, 2));
      light2.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      this.light2 = light2;
      this.objects.push(light2);
      this.container.addChild(light2);

      // Create level completion banner
      let levelCompletionBanner = new PIXI.Sprite(bannerTexture);
      levelCompletionBanner.anchor.set(0.5);
      levelCompletionBanner.alpha = 0;
      levelCompletionBanner.scale.set(floor(scaleBanner, 2));
      levelCompletionBanner.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      this.banner = levelCompletionBanner;
      this.objects.push(levelCompletionBanner);
      this.container.addChild(levelCompletionBanner);

      // Create bg for text play
      const bgTextPlay = new PIXI.Sprite(
        PIXI.Assets.get("bg-main-menu-button")
      );
      bgTextPlay.anchor.set(0.5);
      bgTextPlay.alpha = 0;
      bgTextPlay.scale.set(floor((scale / 0.46) * 0.5, 2));
      bgTextPlay.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2 + (levelCompletionBanner.width * 2) / 3
      );
      bgTextPlay.y -= (scale / 0.46) * 55;
      makeInteractive(bgTextPlay);
      bgTextPlay.on("pointerdown", () => {
        soundEffectPlay("button-click");
        this.switchToNextGameLevelScene = true;
      });
      this.bgTextPlay = bgTextPlay;
      this.objects.push(bgTextPlay);
      this.container.addChild(bgTextPlay);

      // Create text play
      let playText = new PIXI.Text("NEXT LEVEL", style);
      playText.anchor.set(0.5);
      playText.alpha = 0;
      playText.position.set(bgTextPlay.x, bgTextPlay.y);
      this.playText = playText;
      this.objects.push(playText);
      this.container.addChild(playText);

      // Create back button
      let backButton = new PIXI.Sprite(PIXI.Assets.get("close-button"));
      backButton.anchor.set(0.5);
      backButton.alpha = 0;
      backButton.scale.set(floor((scale / 0.46) * 0.25, 2));
      backButton.position.set(
        (this.app.screen.width / 6) * 5,
        levelCompletionBanner.y - floor(levelCompletionBanner.height * 0.5, 2)
      );
      makeInteractive(backButton);
      backButton.on("pointerdown", () => {
        soundEffectPlay("button-close-sound");
        this.switchToMainMenuScene = true;
        // Stop bg music
        gamePlayMusic.stop();
        backgroundMusic.stop();
        // Play gameplay music
        backgroundMusicPlay();
      });
      this.backButton = backButton;
      this.objects.push(backButton);
      this.container.addChild(backButton);

      // Add firework
      this.container.addChild(PIXI.Assets.get("firework"));
    }

    show() {
      this.app.stage.addChild(this.container);
      PIXI.Assets.get("firework").play();
    }

    hide() {
      PIXI.Assets.get("firework").stop();
      this.app.stage.removeChild(this.container);
    }

    reset() {
      this.banner.alpha = 0;
      this.backButton.alpha = 0;
      this.bgTextPlay.alpha = 0;
      this.playText.alpha = 0;
      this.light1.alpha = 0;
      this.light2.alpha = 0;
      this.rect.alpha = 0;
      this.animation = "PRE-ZOOM-IN-1";
    }

    destroy() {
      this.objects.forEach((obj) => {
        this.container.removeChild(obj);
        obj.destroy();
      });
      this.objects = null;
      this.container.destroy();
      this.container = null;
      this.banner = null;
      this.backButton = null;
      this.bgTextPlay = null;
      this.playText = null;
      this.light1 = null;
      this.light2 = null;
      this.rect = null;
      this.isDestroyed = true;
    }

    update() {
      switch (this.animation) {
        case "PRE-ZOOM-IN-1":
          this.banner.scale.x = this.scaleBanner * 3;
          this.banner.scale.y = this.scaleBanner * 3;
          this.delayFirework = 160;
          this.count = 0;
          this.alpha = 0;
          this.animation = "PRE-ZOOM-IN-2";
          break;
        case "PRE-ZOOM-IN-2":
          this.delayFirework -= 1;
          if (this.delayFirework <= 0) this.animation = "ZOOM-IN-ACC";
          break;
        case "ZOOM-IN-ACC":
          this.banner.scale.x = this.scaleBanner * 4 + this.count;
          this.banner.scale.y = this.scaleBanner * 4 + this.count;
          this.count -= (this.scaleBanner * 4) / 90;
          this.alpha += 0.01;
          this.light1.alpha = Math.min(1, this.alpha);
          this.light2.alpha = Math.min(1, this.alpha);
          this.banner.alpha = Math.min(1, this.alpha);
          this.rect.alpha = Math.min(0.4, this.alpha);
          if (this.banner.scale.x <= this.scaleBanner * 2) {
            this.animation = "ZOOM-IN";
          }
          break;
        case "ZOOM-IN":
          this.banner.scale.x = this.scaleBanner * 4 + this.count;
          this.banner.scale.y = this.scaleBanner * 4 + this.count;
          this.count -= ((this.scaleBanner * 4) / 90) * 1.2;
          this.alpha += 0.012;
          this.light1.alpha = Math.min(1, this.alpha);
          this.light2.alpha = Math.min(1, this.alpha);
          this.banner.alpha = Math.min(1, this.alpha);
          this.rect.alpha = Math.min(0.4, this.alpha);
          if (this.banner.scale.x <= this.scaleBanner) {
            this.animation = "IDLE";
          }
          break;
        case "IDLE":
          this.banner.scale.x = this.scaleBanner;
          this.banner.scale.y = this.scaleBanner;
          this.light1.alpha = 1;
          this.light2.alpha = 1;
          this.banner.alpha = 1;
          this.backButton.alpha = 1;
          this.bgTextPlay.alpha = 1;
          this.playText.alpha = 1;
          break;
      }
      this.light2.rotation += 0.01;
      this.light1.rotation += 0.02;
      if (this.light2.rotation >= Math.PI * 2) {
        this.light2.rotation = 0;
      }
      if (this.light1.rotation >= Math.PI * 2) {
        this.light1.rotation = 0;
      }
    }
  }

  // Class for gameplay scene
  class GameFailScene {
    constructor(app) {
      this.app = app;
      this.level = 0;
      this.type = "game-fail-scene";
      this.container = new PIXI.Container();
      this.objects = [];
      this.isDestroyed = false;
      this.createScene();
    }

    createScene() {
      // Get bg main menu
      const gamePlayTexture = PIXI.Assets.get("bg-gameplay-1");

      // Get canvas size ratio
      let scaleX = this.app.renderer.width / gamePlayTexture.width;
      let scaleY = this.app.renderer.height / gamePlayTexture.height;
      let scale = scaleX > scaleY ? scaleX : scaleY;

      // Calculate font size
      let fontSize = Math.round((scale / 0.46) * 25 * 10) / 10;

      // Create text with custom style
      let style = new PIXI.TextStyle({
        fontFamily: "Chunkfive Regular",
        fontSize: fontSize,
        fill: "#000000",
        dropShadow: false,
        fontWeight: "normal",
        wordWrap: true,
        wordWrapWidth: 440,
        letterSpacing: 2,
        lineJoin: "round"
      });

      // Create blur filter
      //this.blurFilter = new PIXI.BlurFilter();
      //this.blurFilter.blur = 5; // Adjust the blur amount

      // Create bg main menu image
      /*const gamePlayBG = new PIXI.Sprite(gamePlayTexture);
      gamePlayBG.anchor.set(0.5);
      gamePlayBG.scale.set(floor(scale, 2));
      gamePlayBG.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      gamePlayBG.filters = [this.blurFilter];
      gamePlayBG.alpha = 0;
      this.objects.push(gamePlayBG);
      this.container.addChild(gamePlayBG);*/

      // Create a graphic rectangle
      const rect = new PIXI.Graphics();
      rect.beginFill("#000000"); // Black color
      rect.alpha = 0;
      rect.drawRect(
        Math.round(-this.app.renderer.width / 2),
        Math.round(-this.app.renderer.height / 2),
        Math.round(this.app.renderer.width),
        Math.round(this.app.renderer.height)
      );
      rect.endFill();
      rect.position.set(this.app.screen.width / 2, this.app.screen.height / 2);
      this.rect = rect;
      this.objects.push(rect);
      this.container.addChild(rect);

      // Get canvas size ratio
      let bannerTexture = PIXI.Assets.get("level-failed-banner");
      let scaleBannerX = this.app.renderer.width / bannerTexture.width;
      let scaleBannerY = this.app.renderer.height / bannerTexture.height;
      let scaleBanner = Math.min(scaleBannerX, scaleBannerY);
      this.scaleBanner = scaleBanner;

      // Create level completion banner
      let levelFailBanner = new PIXI.Sprite(bannerTexture);
      levelFailBanner.anchor.set(0.5);
      levelFailBanner.alpha = 0;
      levelFailBanner.scale.set(floor(scaleBanner, 2));
      levelFailBanner.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      this.banner = levelFailBanner;
      this.objects.push(levelFailBanner);
      this.container.addChild(levelFailBanner);

      // Create level completion banner
      let levelFailBg = new PIXI.Sprite(PIXI.Assets.get("level-failed-bg"));
      levelFailBg.anchor.set(0.5);
      levelFailBg.alpha = 0;
      levelFailBg.rotation = 0.1;
      levelFailBg.scale.set(floor((scaleBanner / 0.15) * 0.22, 2));
      levelFailBg.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2
      );
      this.bannerBg = levelFailBg;
      this.objects.push(levelFailBg);
      this.container.addChild(levelFailBg);

      // Create bg for text play
      const bgTextPlay = new PIXI.Sprite(
        PIXI.Assets.get("bg-main-menu-button")
      );
      bgTextPlay.anchor.set(0.5);
      bgTextPlay.alpha = 0;
      bgTextPlay.scale.set(floor((scale / 0.46) * 0.5, 2));
      bgTextPlay.position.set(
        this.app.screen.width / 2,
        this.app.screen.height / 2 + (levelFailBanner.width * 2) / 3
      );
      bgTextPlay.y -= (scale / 0.46) * 55;
      makeInteractive(bgTextPlay);
      bgTextPlay.on("pointerdown", () => {
        soundEffectPlay("button-click");
        this.switchToSameGameLevelScene = true;
      });
      this.bgTextPlay = bgTextPlay;
      this.objects.push(bgTextPlay);
      this.container.addChild(bgTextPlay);

      // Create text play
      let playText = new PIXI.Text("RESTART", style);
      playText.anchor.set(0.5);
      playText.alpha = 0;
      playText.position.set(bgTextPlay.x, bgTextPlay.y);
      this.playText = playText;
      this.objects.push(playText);
      this.container.addChild(playText);

      // Create back button
      let backButton = new PIXI.Sprite(PIXI.Assets.get("close-button"));
      backButton.anchor.set(0.5);
      backButton.alpha = 0;
      backButton.scale.set(floor((scale / 0.46) * 0.25, 2));
      backButton.position.set(
        (this.app.screen.width / 6) * 5,
        levelFailBanner.y - floor(levelFailBanner.height * 0.5, 2)
      );
      makeInteractive(backButton);
      backButton.on("pointerdown", () => {
        soundEffectPlay("button-close-sound");
        this.switchToMainMenuScene = true;
        // Stop music
        gamePlayMusic.stop();
        backgroundMusic.stop();
        // Play gameplay music
        backgroundMusicPlay();
      });
      this.backButton = backButton;
      this.objects.push(backButton);
      this.container.addChild(backButton);

      // Add raindrop
      this.container.addChild(PIXI.Assets.get("raindrop"));
    }

    show() {
      this.app.stage.addChild(this.container);
      PIXI.Assets.get("raindrop").play();
    }

    hide() {
      PIXI.Assets.get("raindrop").stop();
      this.app.stage.removeChild(this.container);
    }

    reset() {
      this.banner.alpha = 0;
      this.bannerBg.alpha = 0;
      this.backButton.alpha = 0;
      this.bgTextPlay.alpha = 0;
      this.playText.alpha = 0;
      this.rect.alpha = 0;
      this.animation = "PRE-ZOOM-IN-1";
    }

    destroy() {
      this.objects.forEach((obj) => {
        this.container.removeChild(obj);
        obj.destroy();
      });
      this.objects = null;
      this.container.destroy();
      this.container = null;
      this.banner = null;
      this.bannerBg = null;
      this.backButton = null;
      this.bgTextPlay = null;
      this.playText = null;
      this.rect = null;
      this.isDestroyed = true;
    }

    update() {
      switch (this.animation) {
        case "PRE-ZOOM-IN-1":
          this.banner.scale.x = this.scaleBanner * 4;
          this.banner.scale.y = this.scaleBanner * 4;
          this.delayFirework = 140;
          this.count = 0;
          this.alpha = 0;
          this.animation = "PRE-ZOOM-IN-2";
          break;
        case "PRE-ZOOM-IN-2":
          this.delayFirework -= 1;
          if (this.delayFirework <= 0) this.animation = "ZOOM-IN-ACC";
          break;
        case "ZOOM-IN-ACC":
          this.banner.scale.x = this.scaleBanner * 4 + this.count;
          this.banner.scale.y = this.scaleBanner * 4 + this.count;
          this.count -= (this.scaleBanner * 4) / 90;
          this.alpha += 0.007;
          this.banner.alpha = Math.min(1, this.alpha);
          this.rect.alpha = Math.min(0.4, this.alpha);
          if (this.banner.scale.x <= this.scaleBanner * 2) {
            this.animation = "ZOOM-IN";
          }
          break;
        case "ZOOM-IN":
          this.banner.scale.x = this.scaleBanner * 4 + this.count;
          this.banner.scale.y = this.scaleBanner * 4 + this.count;
          this.count -= ((this.scaleBanner * 4) / 90) * 1.5;
          this.alpha += 0.01;
          this.banner.alpha = Math.min(1, this.alpha);
          this.rect.alpha = Math.min(0.4, this.alpha);
          if (this.banner.scale.x <= this.scaleBanner) {
            this.animation = "ZOOM-IN-2";
            this.alpha = 0;
          }
          break;
        case "ZOOM-IN-2":
          this.banner.scale.x = this.scaleBanner;
          this.banner.scale.y = this.scaleBanner;
          this.banner.alpha = 1;
          this.backButton.alpha = 1;
          this.bgTextPlay.alpha = 1;
          this.playText.alpha = 1;
          this.bannerBg.alpha = Math.min(1, this.alpha);
          this.alpha += 0.015;
          if (this.alpha >= 1) {
            this.animation = "IDLE";
          }
          break;
        case "IDLE":
          this.banner.scale.x = this.scaleBanner;
          this.banner.scale.y = this.scaleBanner;
          this.banner.alpha = 1;
          this.bannerBg.alpha = 1;
          this.backButton.alpha = 1;
          this.bgTextPlay.alpha = 1;
          this.playText.alpha = 1;
          break;
      }
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

  function backgroundMusicPlay() {
    activeMusic = "background-music";
    if (!music) return;
    backgroundMusic &&
      backgroundMusic.play({
        volume: 0.35,
        loop: 1
      });
  }

  function gamePlayMusicPlay() {
    activeMusic = "gameplay-music";
    if (!music) return;
    gamePlayMusic &&
      gamePlayMusic.play({
        volume: 0.5,
        loop: 1
      });
  }

  function soundEffectPlay(assetName, option) {
    if (!soundEffect) return;
    gamePlayMusic && PIXI.Assets.get(assetName).play(option);
  }

  const MAX_FOOD_PER_STICK = 6;
  let backgroundMusic, gamePlayMusic, activeMusic;
  let activeScene;
  let loadingScene = new LoadingScene(app);
  loadingScene.show();
  let mainMenuScene,
    levelSelectionScene,
    settingScene,
    gameScene,
    gameCompleteScene,
    gameFailScene;
  activeScene = loadingScene;

  let userCompletedLevel = parseInt(window.localStorage.getItem("level") ?? 0);
  let soundEffect = parseInt(window.localStorage.getItem("sound-effect") ?? 1),
    music = parseInt(window.localStorage.getItem("music") ?? 1),
    vibration = parseInt(window.localStorage.getItem("vibration") ?? 1);

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
      activeScene = levelSelectionScene;
    } else if (activeScene.switchToMainMenuScene) {
      activeScene.switchToMainMenuScene = false;
      activeScene.hide();
      mainMenuScene.show();
      activeScene = mainMenuScene;
      if (gameScene) {
        // Reset old game scene
        gameScene.hide();
        gameScene.destroy();
        gameScene = null;
      }
    } else if (activeScene.switchToSettingScene) {
      activeScene.switchToSettingScene = false;
      activeScene.hide();
      if (!settingScene) settingScene = new SettingScene(app);
      settingScene.show();
      activeScene = settingScene;
    } else if (activeScene.switchToGameScene) {
      // Stop bg music
      backgroundMusic.stop();
      gamePlayMusic.stop();
      // Play gameplay music
      gamePlayMusicPlay();
      activeScene.switchToGameScene = false;
      activeScene.hide();
      gameScene = new GamePlayScene(app, activeScene.selectedGameLevel);
      gameScene.show();
      activeScene = gameScene;
    } else if (activeScene.isPuzzleCompleted) {
      // Disable interactivity in game scene
      activeScene.container.interactiveChildren = false;
      console.log("win " + activeScene.level);
      // Update game level in local storage
      window.localStorage.setItem(
        "level",
        gameScene.level === userCompletedLevel
          ? ++userCompletedLevel
          : userCompletedLevel
      );
      // Only update game level when a higher level achievement is accomplished
      if (
        userData &&
        userData.uuid &&
        userCompletedLevel > userData.gameLevel
      ) {
        updateGameLevel(userCompletedLevel);
        userData.gameLevel = userCompletedLevel;
      }
      if (!gameCompleteScene) gameCompleteScene = new GameCompleteScene(app);
      gameCompleteScene.level = activeScene.level;
      gameCompleteScene.reset();
      gameCompleteScene.show();
      activeScene = gameCompleteScene;
    } else if (activeScene.isPuzzleFailed) {
      // Disable interactivity in game scene
      activeScene.container.interactiveChildren = false;
      console.log("f");
      console.log(activeScene.level);
      if (!gameFailScene) gameFailScene = new GameFailScene(app);
      gameFailScene.level = activeScene.level;
      console.log("f " + gameFailScene.level);
      gameFailScene.reset();
      gameFailScene.show();
      activeScene = gameFailScene;
    } else if (activeScene.switchToNextGameLevelScene) {
      activeScene.switchToNextGameLevelScene = false;
      activeScene.hide();
      // Reset old game scene
      gameScene.hide();
      gameScene.destroy();
      gameScene = null;
      // Create new game scene
      gameScene = new GamePlayScene(app, ++activeScene.level);
      console.log("nex lv " + activeScene.level);
      gameScene.show();
      activeScene = gameScene;
    } else if (activeScene.switchToSameGameLevelScene) {
      activeScene.switchToSameGameLevelScene = false;
      console.log("res" + activeScene.level);
      activeScene.hide();
      // Reset old game scene
      gameScene.hide();
      gameScene.destroy();
      gameScene = null;
      // Create new game scene
      gameScene = new GamePlayScene(app, activeScene.level);
      gameScene.show();
      activeScene = gameScene;
    }
  });

  /****************************************/
  var userData, userDataRequestInterval;
  function requestUserData() {
    if (!window || !window["webkit"]) {
      return;
    }
    window["webkit"].messageHandlers["cordova_iab"].postMessage(
      JSON.stringify({
        type: "get-user-data",
        data: null
      })
    );
  }

  function updateGameLevel(gameLevel) {
    if (!window || !window["webkit"] || !userData || !userData.uuid) {
      return;
    }
    window["webkit"].messageHandlers["cordova_iab"].postMessage(
      JSON.stringify({
        type: "update-game-level",
        data: {
          gameLevel: gameLevel
        }
      })
    );
  }

  function init() {
    userDataRequestInterval = setInterval(requestUserData, 30000);
  }
  window.addEventListener("message", (e) => {
    if (!e.detail || !e.detail.type) return;
    switch (e.detail.type) {
      case "get-user-data":
        if (!e.detail.data || !e.detail.data.uuid) return;
        userData = e.detail.data;
        clearInterval(userDataRequestInterval);
        if (userCompletedLevel > userData.gameLevel) {
          updateGameLevel(userCompletedLevel);
          userData.gameLevel = userCompletedLevel;
        } else {
          userCompletedLevel = userData.gameLevel;
          window.localStorage.setItem("level", userCompletedLevel);
        }
        break;
      default:
        break;
    }
  });
  init();
  /****************************************/
})();
