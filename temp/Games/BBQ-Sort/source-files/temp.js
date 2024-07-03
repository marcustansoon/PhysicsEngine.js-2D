(async () => {
  // Create a new application
  const app = new PIXI.Application();

  // Initialize the application
  await app.init({
    background: "#FFFFFF",
    resizeTo: window
  });

  // Append the application canvas to the document body
  document.body.appendChild(app.canvas);

  const gameContainer = new PIXI.Container();
  gameContainer.visible = 0;

  // Create a new loader for sprite images
  const resourcesToBeLoad = [
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
    }
  ];
  // Create a loader for sound assets
  const soundManifest = [
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
    }
  ];

  // Add multiple textures to the loader
  await PIXI.Assets.load(resourcesToBeLoad, callback);
  let songResources;
  PIXI.Assets.addBundle("sound", soundManifest);
  PIXI.Assets.loadBundle("sound").then((resources) => {
    songResources = resources;
    setTimeout(() => {
      gameContainer.visible = 1;
    }, 1000);
    // Play background music
    //return;
    let bgSound = resources["background-music"];
    bgSound.play({
      volume: 0.01,
      loop: 1,
      filters: [new PIXI.sound.filters.StereoFilter(-1)]
    });
    setTimeout(function () {
      bgSound.play({
        loop: 1,
        filters: [new PIXI.sound.filters.StereoFilter(1)]
      });
    }, 50);
  });

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
      rect.alpha = 0.1;
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
      this.container.removeChild(this.rect.obj);
      this.content.forEach((elem) => {
        this.container.removeChild(elem.obj);
        elem.obj.destroy();
      });
      this.content = [];
      this.isDestroyed = true;
      this.container.destroy();
      this.container = null;
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
          //songResources["up"].play();
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
          //songResources["down"].play();
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

  class GameLogic {
    constructor(app, level) {
      this.app = app;
      this.level = level;
      this.type = "gameplay-scene";
      this.container = new PIXI.Container();
      this.sticksGroup = [];
      this.isDestroyed = false;
      this.isPuzzleCompleted = false;
      this.createScene();
    }

    shuffle(array) {
      return array
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
    }

    createScene() {
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

      // Get canvas size ratio
      let maxWidthPerSprite = 220,
        maxHeightPerSprite = 150;
      let scaleX = app.renderer.width / maxWidthPerSprite / numberOfColumns;
      let scaleY =
        app.renderer.height / numberOfRows / (maxHeightPerSprite * 8);
      let scale = Math.min(scaleX, scaleY);

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
        let cStick = new Stick(scale);
        for (let foodCount = 0; foodCount < maxFoodPerStick; foodCount++) {
          let foodName = allFoodNames.pop();
          if (!foodName) break;
          cStick.createChildSprite(foodName);
        }
        cStick.scaleTo(scale);

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
    }

    show() {
      this.app.stage.addChild(this.container);
    }

    hide() {
      this.app.stage.removeChild(this.container);
    }

    destroy() {
      this.sticksGroup.forEach((obj) => {
        this.container.removeChild(obj.container);
        obj.destroy();
      });
      this.sticksGroup = [];
      this.isDestroyed = true;
      this.container.destroy();
      this.container = null;
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
                4)
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
              //songResources["error"].play();
              console.log("err");
              break;
            }

            // Check if target length is enough to accommodate origin objects
            if (targetSprite.content.length + originTopSpriteInfo.length > 4) {
              // Unselect both object
              originSprite.onClick();
              targetSprite.onClick();
              //songResources["error"].play();
              console.log("err2");
              break;
            }

            // Successful moving objects from origin to target stick
            //songResources["single-completion"].play();
            originSprite.unloadTopSprites();
            targetSprite.loadTopSprites(
              originTopSpriteInfo.type,
              originTopSpriteInfo.length
            );

            // Check if target stick puzzle is completed
            if (targetSprite.getTopSpriteInfo().length === 4) {
              targetSprite.setCompletion();
            }
            break;
          }
        }
      }
      if (isPuzzleCompleted) {
        this.isPuzzleCompleted = true;
      }
      if (isPuzzleFailed) {
        this.isPuzzleFailed = true;
      }
    }
  }

  let gameLogic = new GameLogic(app, 0);
  gameLogic.show();
  app.stage.addChild(gameContainer);

  setTimeout(() => {
    gameLogic.hide();
    gameLogic.destroy();
  }, 5000);

  function callback(progress) {
    //console.log(progress)
  }

  // Listen for animate update
  app.ticker.add((time) => {
    gameLogic.update();
  });
})();
