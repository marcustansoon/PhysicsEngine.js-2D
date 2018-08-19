////https://rawgit.com/marcustansoon/PhysicsEngine.js-2D/master/LearnPixiJS/ObjectPooling/PIXI.ObjectPoolingV1.01.js
//Class Function : Enable PIXI objects (Sprites/Graphics/AnimSprites) to be reuseable, instead of destroying and re-instantiating a whole new obj

//Methods :    
//              createSprite(TEXTURE)               -> Create new sprite (automatically triggered on demand),TEXTURE is type of PIXI texture
//              createAnimatedSprite(TEXTURES)      -> NOTE: TEXTURES are of array data type,consisting only PIXI textures (NOT texture URL)
//              createGraphic(W,H,COLOR)            -> Create a rectangle of width W, height H, and colour COLOR
//              getSprite(TEXTURES,BOOL)            -> Obtain a sprite from 'PoolObjects' arr. Automatically create a new sprite (trigger createSprite method) if 'PoolObjects' is empty
//              getAnimatedSprite(TEXTURES,BOOL)    -> TEXTURES: arr of ready-use PIXI.Textures, BOOL: boolean for overwritting the sprite texture once retrived from obj pool
//              getGraphic(TEXTURES)  
//              returnSprite(SPRITE)                -> Return a SPRITE to its respective 'PoolObjects' arr, to be reused again later
//              returnAnimatedSprite(SPRITE) 
//              returnGraphic(SPRITE)

//Properties added/accesible
//Note : the following properties are added to the main instantiation obj
//this.Sprites=[];      -> For storing the reusable sprites/animsprites/graphics
//this.animatedSprites=[];
//this.Graphics=[];
//this.SpritesLength, animatedSpritesLength, GraphicsLength -> store the length of its respective objpool arr (Optimization purpose)

//Editable//attachable callback FUNCTION
//this.onCreate(SPRITE/GRAPHICS/ANIM, NUM)=null;           //triggered after creating a new SPRITE/GRAPHICS/ANIM
//this.onReturn(SPRITE/GRAPHICS/ANIM, NUM)=null;           //triggered on returning SPRITE/GRAPHICS/ANIM to respective objPool arr
//this.onGet(SPRITE/GRAPHICS/ANIM, NUM)=null;              //triggered once after retrieving SPRITE/GRAPHICS/ANIM from objpool arr / newly created 
//this.onRetrive(SPRITE/GRAPHICS/ANIM, NUM)=null;           //triggered on retrieving obj from Objectpools

//where NUM used as an indicator (0 -> Sprite, 1 -> animatedSprite, 2 -> Graphic Rect)

class ObjectPooling {
  constructor() {
    this.Sprites = []; //indicated by 0
    this.SpritesLength = 0; //storing 'this.Sprites'.length (Optimization purpose)
    this.animatedSprites = []; //indicated by 1
    this.animatedSpritesLength = 0;
    this.Graphics = []; //indicated by 2
    this.GraphicsLength = 0;
    this.onCreate = null; //triggered on creating new sprite
    this.onRetrieve = null; //triggered on creating new sprite
    this.onReturn = null; //triggered on returning sprite to objpool arr
    this.onGet = null; //triggered once sprite is obtained either from objpool arr or newly created 
  }
  //create new sprite (automatically triggered on demand)
  createGraphic(type, color, p1, p2) {
    let graphic = new PIXI.Graphics();
    graphic.beginFill(color);
    switch (type) {
      case "rect":
      case "Rect":
      case "r":
      case "R":
      case "Rec":
        graphic.drawRect(0, 0, p1, p2);
        break;
      default:
        graphic.drawCircle(0, 0, p1);
    }
    
    graphic.endFill();
    console.log('Created a new Graphic', type);
    return graphic;
  }
  createSprite(texture) {
    let sprite = new PIXI.Sprite(texture);
    console.log('Created a new Sprite');
    return sprite;
  }
  createAnimatedSprite(textures) {
    let sprite = new PIXI.extras.AnimatedSprite(textures);
    console.log('Created a new Animated Sprite');
    return sprite;
  }
  //return a sprite to 'PoolObjects' arr, to be reused again
  returnGraphic(graphic) {
    console.log('Graphic removed');
    this.Graphics.push(graphic);
    this.GraphicsLength++;
    if (this.onReturn)
      this.onReturn(graphic, 2);
  }
  returnSprite(sprite) {
    console.log('Sprite removed');
    this.Sprites.push(sprite);
    this.SpritesLength++;
    if (this.onReturn)
      this.onReturn(sprite, 0);
  }
  returnAnimatedSprite(sprite) {
    console.log('Animated Sprite removed');
    this.animatedSprites.push(sprite);
    this.animatedSpritesLength++;
    if (this.onReturn)
      this.onReturn(sprite, 1);
  }
  //get a sprite from 'PoolObjects' arr, if its empty, then create a new sprite (trigger createSprite method)
  getGraphic(type, color, p1, p2) { //return a PIXI.Rect/Circle (Graphics) obj
    let obj_temp;
    if (this.GraphicsLength == 0) //check if 'PoolObjects' arr is empty
    {
      obj_temp = this.createGraphic(type, color, p1, p2); //if so, create a new sprite
      if (this.onCreate) //invoke callback func whenever a new sprite is created
        this.onCreate(obj_temp, 2);
    } else {
      let index = --this.GraphicsLength;
      obj_temp = this.Graphics[index];
      if (this.onRetrieve)
        this.onRetrieve(obj_temp, 2);
      console.log("Retrieved a sprite");
    }
    this.Graphics.pop();
    if (this.onGet) //invoke onGet callback func
      this.onGet(obj_temp, 2);
    return obj_temp;
  }
  getSprite(texture, boolean) { //Return a PIXI.Sprite obj
    let obj_temp;
    if (this.SpritesLength == 0) //check if 'PoolObjects' arr is empty
    {
      obj_temp = this.createSprite(texture); //if so, create a new sprite
      if (this.onCreate) //invoke callback func whenever a new sprite is created
        this.onCreate(obj_temp, 0);
    } else {
      let index = --this.SpritesLength;
      obj_temp = this.Sprites[index];
      if (boolean && obj_temp.texture != texture) //check if theres a need to overwrite the old texture
      {
        obj_temp.texture = texture;
        console.log("Texture changed");
      }
      if (this.onRetrieve)
        this.onRetrieve(obj_temp, 0);
      console.log("Retrieved a sprite");
    }
    this.Sprites.pop();
    if (this.onGet) //invoke onGet callback func
      this.onGet(obj_temp, 0);

    return obj_temp;
  }
  getAnimatedSprite(textures, boolean) { //return an animSprite obj
    let obj_temp;
    if (this.animatedSpritesLength == 0) //check if 'PoolObjects' arr is empty
    {
      obj_temp = this.createAnimatedSprite(textures); //if so, create a new sprite
      if (this.onCreate) //invoke callback func whenever a new sprite is created
        this.onCreate(obj_temp, 1);
    } else {
      let index = --this.animatedSpritesLength;
      obj_temp = this.animatedSprites[index];
      if (boolean && obj_temp.textures != textures) //check if theres a need to overwrite the old textures
      {
        obj_temp.textures = textures;
        console.log("Textures changed");
      }
      if (this.onRetrieve)
        this.onRetrieve(obj_temp, 1);
      console.log("Retrieved an animSprite");
    }
    this.animatedSprites.pop();
    if (this.onGet) //invoke onGet callback func
      this.onGet(obj_temp, 1);

    return obj_temp;
  }

}
PIXI.ObjectPooling = ObjectPooling;
