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
        // In game related images
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
        // Font styles
        {
          alias: "ChunkFive",
          src:
            "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/ChunkFive-Regular.otf"
        }
      ];

      const bgMainMenuTexture = await PIXI.Assets.load({
        alias: "bg-main-menu",
        src:
          "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/bbq-grill-bg-3-compressed.png"
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
      rect.alpha = 0.1;
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
        PIXI.Assets.get("button-click").play();
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
      backgroundMusic.play({
        volume: 0.35,
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
      for (let level = 0; level < 50; level++) {
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
          PIXI.Assets.get("button-click").play();
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
        PIXI.Assets.get("button-click").play();
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
        PIXI.Assets.get("button-click").play();
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
        PIXI.Assets.get("button-click").play();
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
      let scale = scaleX > scaleY ? scaleX : scaleY;

      // Calculate font size
      let fontSize = Math.round((scale / 0.18) * 12 * 10) / 10;

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
      let tickSoundEffect = new PIXI.Sprite(PIXI.Assets.get("tick"));
      tickSoundEffect.anchor.set(0.5);
      tickSoundEffect.scale.set((scaleBanner / 0.5) * 0.15);

      soundEffectText.position.set(
        this.app.renderer.width / 2 -
          (soundEffectText.width + tickSoundEffect.width) / 2 +
          soundEffectText.width / 2,
        this.app.renderer.height / 2 - banner.height / 4
      );
      this.objects.push(soundEffectText);
      this.container.addChild(soundEffectText);

      tickSoundEffect.position.set(
        this.app.screen.width / 2 +
          (soundEffectText.width + tickSoundEffect.width) / 2,
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
      let tickMusic = new PIXI.Sprite(PIXI.Assets.get("tick"));
      tickMusic.anchor.set(0.5);
      tickMusic.scale.set((scaleBanner / 0.5) * 0.15);
      tickMusic.position.set(tickSoundEffect.x, this.app.renderer.height / 2);
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
      let tickVibration = new PIXI.Sprite(PIXI.Assets.get("tick"));
      tickVibration.anchor.set(0.5);
      tickVibration.scale.set((scaleBanner / 0.5) * 0.15);
      tickVibration.position.set(
        tickSoundEffect.x,
        this.app.renderer.height / 2 + banner.height / 4
      );
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
        PIXI.Assets.get("button-click").play();
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
    constructor(scale) {
      super();
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
      if (this.completedPuzzle) return;
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
      this.completedPuzzle = { obj: sprite, type: childName };
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
      return (
        this.stick.obj.y +
        Math.floor((((60 - index * 60) * this.stick.obj.scale.x) / 0.4) * 100) /
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
      if (this.completedPuzzle) {
        this.completedPuzzle.obj.scale.set(
          Math.floor((scale / 0.4) * 0.8 * 10) / 10
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
          PIXI.Assets.get("up").play();
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
          PIXI.Assets.get("down").play();
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

      // Game logic
      let numberOfRows,
        numberOfColumns,
        numberOfSticks,
        maxFoodPerStick,
        foodNames;

      if (this.level == 0) {
        numberOfRows = 1 + 1;
        numberOfColumns = 3 + 1;
        numberOfSticks = 3;
        maxFoodPerStick = 4;
        foodNames = ["meat", "mini-sausage"];
      } else if (this.level == 1) {
        numberOfRows = 1 + 1;
        numberOfColumns = 3 + 1;
        numberOfSticks = 3;
        maxFoodPerStick = 4;
        foodNames = ["meat", "mini-sausage"];
      } else {
        numberOfRows = 1 + 1;
        numberOfColumns = 3 + 1;
        numberOfSticks = 3;
        maxFoodPerStick = 4;
        foodNames = ["meat", "mini-sausage"];
      }

      // Get canvas size ratio for stick scaling calculation
      let maxWidthPerSprite = 220,
        maxHeightPerSprite = 150;
      let scaleStickX =
        app.renderer.width / maxWidthPerSprite / numberOfColumns;
      let scaleStickY =
        app.renderer.height / numberOfRows / (maxHeightPerSprite * 8);
      let scaleStick = Math.min(scaleX, scaleY);

      let allFoodNames = [];
      foodNames.forEach((name) => {
        let repeat = maxFoodPerStick;
        while (repeat--) allFoodNames.push(name);
      });
      allFoodNames = this.shuffle(allFoodNames);

      let startPositionX = 0,
        positionXCount = 0,
        startPositionY = 0;
      for (let stickCount = 0; stickCount < numberOfSticks; stickCount++) {
        let cStick = new Stick(scaleStick);
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
    }

    shuffle(array) {
      return array
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
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
      this.isDestroyed = true;
    }

    update() {
      let isPuzzleCompleted = true,
        isPuzzleFailed = true;
      for (let indexM = 0; indexM < this.sticksGroup.length; indexM++) {
        let elem = this.sticksGroup[indexM];

        // Check for level completion
        if (!elem.completedPuzzle && elem.content.length !== 0) {
          isPuzzleCompleted = false;
        }

        // Check for failure
        let currentTopInfo = elem.getTopSpriteInfo();
        // Filter stick sprites where not self
        let otherSticksGroup = this.sticksGroup.filter(
          (elem, index) => indexM !== index
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
              PIXI.Assets.get("error").play();
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
              PIXI.Assets.get("error").play();
              console.log("err2");
              break;
            }

            // Successful moving objects from origin to target stick
            PIXI.Assets.get("single-completion").play();
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
        PIXI.Assets.get("level-completion").play({
          volume: 2
        });
      }
      if (isPuzzleFailed) {
        this.isPuzzleFailed = true;
        PIXI.Assets.get("level-failure").play({
          volume: 2
        });
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

  let backgroundMusic;
  let activeScene;
  let loadingScene = new LoadingScene(app);
  loadingScene.show();
  let mainMenuScene, levelSelectionScene, settingScene, gameScene;
  activeScene = loadingScene;

  let userCompletedLevel = window.localStorage.getItem("level") ?? 0;

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
    } else if (activeScene.switchToSettingScene) {
      activeScene.switchToSettingScene = false;
      activeScene.hide();
      if (!settingScene) settingScene = new SettingScene(app);
      settingScene.show();
      activeScene = settingScene;
    } else if (activeScene.switchToGameScene) {
      activeScene.switchToGameScene = false;
      activeScene.hide();
      gameScene = new GamePlayScene(app, activeScene.selectedGameLevel);
      gameScene.show();
      activeScene = gameScene;
    } else if (activeScene.isPuzzleCompleted) {
      console.log("win");
      window.localStorage.setItem(
        "level",
        gameScene.level === userCompletedLevel
          ? ++userCompletedLevel
          : userCompletedLevel
      );
      gameScene.hide();
      gameScene.destroy();
      gameScene = null;
      levelSelectionScene.show();
      activeScene = levelSelectionScene;
    } else if (activeScene.isPuzzleFailed) {
      console.log("f");
      gameScene.hide();
      gameScene.destroy();
      gameScene = null;
      levelSelectionScene.show();
      activeScene = levelSelectionScene;
    }
  });
})();
