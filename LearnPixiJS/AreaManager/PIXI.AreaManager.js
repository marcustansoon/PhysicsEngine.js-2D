//https://rawgit.com/marcustansoon/PhysicsEngine.js-2D/master/LearnPixiJS/AreaManager/PIXI.AreaManager.js
//class for handling the creating,and handling area properties including checking for area collision between two parties
//Example Usage : https://www.w3schools.com/code/tryit.asp?filename=FTE4LRA421SZ
//     		  https://jsfiddle.net/yjsrvxqf/2/   --cleaner version           
    
    
//method :    createArea(AREA_NAME,PROPERTIES)           -> create a new area
                                                         //PROPERTIES -> offsetX,offsetY,w,h
//            destroyArea(AREA_NAME)                     -> destroy a created area (note: properties attached to sprite (related to this area) are not deleted automatically. Need to delete it manually,by invoking removeAreaFromChild method)
//            addAreaToChild(AREA_NAME,SPRITE)           -> attach an area to a sprite
//            setAreaActive(BOOLEAN,AREA_NAME,SPRITE)    ->//set whether the area attached to a sprite is active (is it collideable with other area? it has to be active for it to do so)
//            removeAreaFromChild(AREA_NAME,SPRITE)      -> //remove attached area from a sprite,by deleting that area-related properties
//            checkCollision(group1,area1,group2,area2,callback)   -> Check whether area1 of group1 is colliding with area2 of group2,if so ,invoke callback parameter (callback has to be function)    

//properties added/accesible
//        sprite[AREA_NAME].active=true;    ->for determining whether a particular area is collideable
//        sprite[AREA_NAME].collidedWith    ->for storing collided sprites  
    
    
    
    let Area={};
    class AreaManager
    {	
    	constructor()
        {
        
        }
    	  //create a new area
        createArea(aname,properties)//properties->w,h,offsetX,offsetY
        {
        	Area[aname]=properties;
            console.log('Created '+aname+' area');
        }
        //destroy a created area (note: properties attached to sprite (related to this area) are not deleted automatically. Need to delete it manually,by invoking removeAreaFromChild method)
       	destroyArea(aname)
        {
        	console.log('Deleted '+aname);
        	delete Area[aname];
        }
        //attach an area to a sprite
    	addAreaToChild(aname,sprite)
        {
          	sprite[aname]={};
            sprite[aname].active=true;//for determining whether a particular area is collideable
            sprite[aname].collidedWith=new Set();//for storing collided sprites
        }
        //set whether the area attached to a sprite is active (is it collideable with other area? it has to be active for it to do so)
      setAreaActive(boolean,aname,sprite)
        {
        	sprite[aname].active=boolean;
        }
        //remove attached area from a sprite,by deleting that area-related properties
    	removeAreaFromChild(aname,sprite)
        {
        	sprite[aname].collidedWith.clear();
            sprite[aname].collidedWith=null;
            delete sprite[aname];
        }
        
        checkCollision(group1,area1,group2,area2,callback)//Check whether area1 of group1 is colliding with area2 of group2
        {
        	
        	group1.forEach((member1)=>{//pick every member of group1
            	if (member1[area1].active)//check if area1 for member1 is active
                {
                	member1[area1].collidedWith.clear();//clear all previously stored collided sprites of member1
                	group2.forEach((member2)=>{
                    	if (member2[area2].active)//check if area2 of member2 is active
                        {
                        	let x1 = member1.x+Area[area1].offsetX,
                            y1 = member1.y+Area[area1].offsetY,
                            x2 = member2.x+Area[area2].offsetX,
                            y2 = member2.y+Area[area2].offsetY;
                            
                        	//check for collision between two areas
                        	if (x1 + Area[area1].w >= x2 &&    // r1 right edge past r2 left
                              x1 <= x2 + Area[area2].w &&    // r1 left edge past r2 right
                              y1 + Area[area1].h >= y2 &&    // r1 top edge past r2 bottom
                              y1 <= y2 + Area[area2].h)    
                            {    
                                member1[area1].collidedWith.add(member2);//if collision happens, add the respective member2 sprite to the 'collidedWith' group of the member1
                            } 
                        }
                    });
                    if (member1[area1].collidedWith.size !=0 && typeof callback == "function")//check if callback func is valid
                    {
                    	callback();//if so,invoke it
                    }
                }
            });
        }
    }

if (PIXI)//check if PIXI.js exists
{
  PIXI.AreaManager=AreaManager;
}
else
{
	throw new Error ("PIXI undefined, please include the PIXI.js script");
}
