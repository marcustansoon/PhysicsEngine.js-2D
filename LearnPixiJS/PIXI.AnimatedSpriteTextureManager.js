//https://rawgit.com/marcustansoon/PhysicsEngine.js-2D/master/LearnPixiJS/PIXI.AnimatedSpriteTextureManager.js
//For extracting animation frames of a given img url

class AnimatedSpriteTextureManager {
  constructor(src, isJSON, properties) {
    //src -> string (image url)
    //isJSON -> boolean, indicate if supplied 'src' is type of json
    //properties -> have x,y,row,col, frame height,frame width,total_frames
    properties.isJSON = isJSON;
    this.AnimatedSpriteTextureProperties = properties;
    this.AnimatedSpriteTextureBaseT = null;


    if (typeof src === "string") {

      if (isJSON && PIXI.loader.resources[src].textures[properties.name]) //check is json and texture is loaded
      {
        //console.log('is json');
        this.AnimatedSpriteTextureBaseT = PIXI.loader.resources[src].textures[properties.name];

        this.AnimatedSpriteTextureProperties.x = this.AnimatedSpriteTextureBaseT.frame.x;//store the x,y position
        this.AnimatedSpriteTextureProperties.y = this.AnimatedSpriteTextureBaseT.frame.y;
        this.AnimatedSpriteTextureProperties.width = this.AnimatedSpriteTextureBaseT.frame.width;//store the frame width and height
        this.AnimatedSpriteTextureProperties.height = this.AnimatedSpriteTextureBaseT.frame.height;
        
      }
      else if (PIXI.loader.resources[src].texture) //check if texture is loaded (non json)
      {
        this.AnimatedSpriteTextureBaseT = PIXI.loader.resources[src].texture;
      }
    }
  }
//extract out the animation frames
  extractTexture() { //always return an array of textures
    let properties = this.AnimatedSpriteTextureProperties,
      base_texture = this.AnimatedSpriteTextureBaseT,
      textures = [];

    if (!properties.x) {//if x is undefined, then define it as zero
      properties.x = 0;
    }
    if (!properties.y) {//if yx is undefined, then define it as zero
      properties.y = 0;
    }

//automatically find the row and col (or width and height)
    if (!properties.rol && !properties.col && properties.width && properties.height) //for width and height given by user
    {
      //console.log('yes wh');
      if (properties.isJSON) {//check is json
        properties.col = Math.floor((base_texture.width) / properties.width);
        properties.row = Math.floor((base_texture.height) / properties.height);
      } 
      else //for non json img file
      {
        properties.col = ((base_texture.width - properties.x) / properties.width)<<0;
        properties.row = ((base_texture.height - properties.y) / properties.height)<<0;
      }
    } 
    else if (!properties.width && !properties.height && properties.row && properties.col) //for row and col given by user
    {
      //console.log('yes rc');
      properties.width = ((base_texture.width - properties.x) / properties.col)<<0;
      properties.height = ((base_texture.height - properties.y) / properties.row)<<0;

    }
   

    for (let row = 0; row < properties.row; row++) {//for each row and col, extract out each frame using 'PIXI.Rectangle'
      for (let col = 0; col < properties.col; col++) {

        let rectangle = new PIXI.Rectangle(properties.x + col * properties.width, properties.y + row * properties.height, properties.width, properties.height);
        let texture_temp = new PIXI.Texture(base_texture);
        texture_temp.frame = rectangle;
        textures.push(texture_temp);

        properties.total_frames--; //decrement total frames to be pushed after each successful push
        if (properties.total_frames == 0) //check if total frames remaining is zero
        {
          row = 999;//automatically break the extraction process when total_frames exceeded
          break;
        }
      }
    }
    //console.log(textures.length);
    //console.log(properties.col);
    //console.log(properties.row);

    properties = undefined;
    base_texture = undefined;
    delete this.AnimatedSpriteTextureProperties; //delete unnecessary obj properties
    delete this.AnimatedSpriteTextureBaseT;
    return textures;//return textures (array)
  }

}
PIXI.AnimatedSpriteTextureManager = AnimatedSpriteTextureManager;
