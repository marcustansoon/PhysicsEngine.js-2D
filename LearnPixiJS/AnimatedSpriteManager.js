//Allow assignment and control of multiple animation states (attack,walk,jump,etc) of a sprite

class AnimatedSpriteManager extends PIXI.extras.AnimatedSprite {
  constructor(textures, autoUpdate) {
    super(textures, autoUpdate);//inherit previous properties and method

    this._totalTextures = textures; //store the combined total animated frames (attack,walk,jump,etc)
  }

//'frames' can be either array or a single integer
//'frames' represent frames number for an animation state
  playAnimatedState(frames) {//play certain animation state 
    this.stop(); //stop the current animation
    if (Array.isArray(frames)) //check is an animation state consists of multiple frames
    {
      let textures = [];//create an empty array
      if (frames.length > this.totalFrames) //check if total frame number exceeded total combined animation frames
      {
        throw new Error("Animated State Frames is more than total frames");
      }
      frames.forEach(texture => { //for each 'frames' value, assign the relevant animated frames into the 'textures'
        textures.push(this._totalTextures[texture]);
      });
      this.textures = textures;//assign back the new animation state frames
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





