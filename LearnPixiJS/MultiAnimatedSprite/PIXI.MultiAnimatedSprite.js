//Usage:
//https://jsfiddle.net/jvb3f68w/152/
//
//Method:
//        sprite.playAnimation(START_fRAME,END_FRAME+1)

class MultiAnimatedSprite extends PIXI.extras.AnimatedSprite {
  constructor(tex, autoUpdate) {
    super(tex, autoUpdate);//call the super class
    
    this._texturesStartFrame = 0;//default
    this._texturesEndFrame = tex.length;//default

		//replace the old currentFrame method
    //due to errors, the method is only replaced after super class is called
    Object.defineProperty(this, "currentFrame", {
      
      get: function() {
        let currentFrame = 	Math.floor(this._currentTime) % this._texturesEndFrame;
        
        if (currentFrame < 0) {
          currentFrame += this._texturesEndFrame;
        }
        if (currentFrame==0)//check if currentframe is at index zero
        {
        	//currentFrame=this._texturesStartFrame;//not necessary
          this._currentTime+=this._texturesStartFrame;//if so, update the currentframe to be at the specific animation startframe
          //this can be done by adding the currentTime by the  animation startframe index
        	
        }
        //console.log(currentFrame);
        return currentFrame;
      }
    });
  }
  playAnimation(startframe, endframe) {//play specific animation starting from startframe to endframe-1
  	this.stop();
    this._texturesStartFrame = startframe;
    this._texturesEndFrame = endframe;
    this.gotoAndPlay(startframe);    
  }
  update(deltaTime)//replace the old update method
    {
        const elapsed = this.animationSpeed * deltaTime;
        const previousFrame = this.currentFrame;

        if (this._durations !== null)
        {
            let lag = this._currentTime % 1 * this._durations[this.currentFrame];

            lag += elapsed / 60 * 1000;

            while (lag < 0)
            {
                this._currentTime--;
                lag += this._durations[this.currentFrame];
            }

            const sign = Math.sign(this.animationSpeed * deltaTime);

            this._currentTime = Math.floor(this._currentTime);

            while (lag >= this._durations[this.currentFrame])
            {
                lag -= this._durations[this.currentFrame] * sign;
                this._currentTime += sign;
            }

            this._currentTime += lag / this._durations[this.currentFrame];
        }
        else
        {
            this._currentTime += elapsed;
        }

        if (this._currentTime < 0 && !this.loop)
        {
            this.gotoAndStop(this.texturesStartFrame);//

            if (this.onComplete)
            {
                this.onComplete();
            }
        }
        else if (this._currentTime >= this._texturesEndFrame && !this.loop)//
        {
            this.gotoAndStop(this._texturesEndFrame - 1);//

            if (this.onComplete)
            {
                this.onComplete();
            }
        }
        else if (previousFrame !== this.currentFrame)
        {
            if (this.loop && this.onLoop)
            {
                if (this.animationSpeed > 0 && this.currentFrame < previousFrame)
                {
                    this.onLoop();
                }
                else if (this.animationSpeed < 0 && this.currentFrame > previousFrame)
                {
                    this.onLoop();
                }
            }

            this.updateTexture();
        }
    }

   
}
PIXI.MultiAnimatedSprite = MultiAnimatedSprite;
