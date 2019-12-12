//https://rawgit.com/marcustansoon/PhysicsEngine.js-2D/master/LearnPixiJS/PIXI.AnimatedSpriteManager.js
//Allow assignment and control of multiple animation states (attack,walk,jump,etc) of a sprite

class AnimatedSpriteManager extends PIXI.AnimatedSprite {
  constructor(textures, animationStates,autoUpdate) {
    super(textures, autoUpdate);//inherit previous properties and method
    
    this._totalTextures = textures; //store the combined total animated frames (attack,walk,jump,etc)
    this._animationStates=animationStates;//{attack:[0,1,2],run:[5,6,7]}
  }

//'frames' can be either array or a single integer
//'frames' represent frames number for an animation state
  playAnimatedState(frames) {//play certain animation state 
    this.stop(); //stop the current animation
    

    if (frames.length) //check is an animation state consists of multiple frames (either array or string)
    {
      //let textures = [];//create an empty array
      if (typeof frames==='string'){//check if string
        this.textures=this._animationStates[frames];
        return; 
      }
      
      if (frames.length > this._totalTextures.length) //check if total frame number exceeded total combined animation frames
      {
        throw new Error("Animated State Frames is more than total frames");
      }
      this.textures.length=0;
      for(let temp=0;temp<frames.length;temp++){
        this.textures.push(this._totalTextures[temp]);
      }
      /*frames.forEach(texture => { //for each 'frames' value, assign the relevant animated frames into the 'textures'
        textures.push(this._totalTextures[texture]);
      });*/
      //this.textures = textures;//assign back the new animation state frames
      this.gotoAndPlay(0); //play the animation state, start from zero

    } else //following statements only execute if animation state is static (consist of  a single frame)
    {
      if (frames > this._totalTextures.length)
        throw new Error("Frame index is exceeded");

      this.textures = [this._totalTextures[frames]];
      this.gotoAndStop(0);//go to that particular frame
    }
  }
}
PIXI.AnimatedSpriteManager = AnimatedSpriteManager;





