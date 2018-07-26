//https://rawgit.com/marcustansoon/PhysicsEngine.js-2D/master/LearnPixiJS/GroundBoundary/PIXI.GroundBoundary.js

class GroundBoundary
    {
    	constructor(){
        	this.GroundArr=[];
        }
        //set groundArr (representing the ground level)
        setGroundLevel(groundArr){
        	this.GroundArr=groundArr;
        }
        //set the number of pixel representing one subdata of GroundArr
        //For instance, if NumPixel=5 pixels then ground level from y=0 to 5 is GroundArr[0], y=6 to 10 is represented in GroundArr[1], and so on;
        setNumPixel(num){
        	this.NumPixel=num;
        }
        //register a sprite, add some properties to it (needed for syncing to ground in 'updateSyncing' method )
        registerChild(sprite){
        	if (Array.isArray(sprite) || sprite instanceof Set){
            	sprite.forEach(function(member){
                	  member.Gposition=1;//default (air=1,ground=0)
                    member.GneedSyncing=false;
                });
                return;
            }
            sprite.Gposition=1;
            sprite.GneedSyncing=false;            
        }
        //remove all properties added in the 'registerChild' method
        unregisterChild(sprite){
        	if (Array.isArray(sprite) || sprite instanceof Set){
            	sprite.forEach(function(member){
                	delete member.Gposition;
                    delete member.GneedSyncing;
                });
                return;
            }
            delete sprite.Gposition;
            delete sprite.GneedSyncing;      
        }
        //sync the sprite to the ground,check for collision as well and invoke callback on syncing and collision
        updateSyncing(Group,CollisionCallback,SyncingCallback){
        	Group.forEach((member)=>{
            	//check if sprite collide with ground level and it's position is 1 (air)
            	if (member.y>this.GroundArr[member.x]&&member.Gposition==1){     				//if so, set it's positon is set to 0 (represent ground)
                	// and set 'Syncing' to true, to sync the y coordinate to the ground level 
                  member.GneedSyncing=true;
                  member.Gposition=0;
                  console.log('collided with ground');
                  //invoke callback when SPRITE first collides with ground
                  if (CollisionCallback){
                  	CollisionCallback(member); 
                  }
       	 		}
                
                if (member.Gposition==0&&member.GneedSyncing){
                  let index=Math.floor(member.x/this.NumPixel);           
                  member.y=this.GroundArr[index];//get the ground level and sync SPRITE.y to ground
                  member.GneedSyncing=false;//turn 'Syncing' to false after syncing
                  console.log('y synced to ground');
                  //invoke callback when SPRITE synced with ground
                  if (SyncingCallback){
                  	SyncingCallback(member);
                  }
                }        
            });		
		}
    }
    PIXI.GroundBoundary=GroundBoundary;
