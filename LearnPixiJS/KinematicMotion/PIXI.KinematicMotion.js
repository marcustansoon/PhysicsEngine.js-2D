//https://rawgit.com/marcustansoon/PhysicsEngine.js-2D/master/LearnPixiJS/KinematicMotion/PIXI.KinematicMotion.js
//example usage : https://jsfiddle.net/6ad5ugs3/127/ 
//example usage : https://jsfiddle.net/ftz5n6co/4/   --cleaner version
//https://jsfiddle.net/s420ucfL/

//method :    registerChild(SPRITE)             -> registeration must be done first before attaching any kineamtic motion
//            unregisterChild(SPRITE)           -> remove all previously added kinematic-related properties from sprite
//            addMotion(PROPERTIES,MOTION_NAME,SPRITE)  PROPERTIES-> {angle:in degree,v:velocity,a:acceleration}, add new kinematic motion to sprite if name supplied is unique(motion hasnt been added), else, alter the old motion properties
//            hasMotion(MOTION_NAME,SPRITE)            ->verify if sprite has specified motion attached
//            removeMotion(MOTION_NAME,SPRITE)  -> remove a particular motion from sprite
//            updateMotion()                    -> implement the effect of all added kinemation motions on sprite movement, invoke it in gameloop

//properties added/accesible
//      sprite.KinematicList            (data type: Set) contain all added motions' names
//      sprite.Kinematic[MOTION_NAME]   .incrementX,incrementY,previousTruncatedY,previousTruncatedX,totalAX,aX,aY,totalAY

//attachable callback
//	sprite.Kinematic[MOTION_NAME].onUpdate=func()   	-> triggered on each Motion.updateMotion method


let KinematicGroup=new Set();//used to keep track of sprites with kinematic motion added and update their movement respectively
const KinematicConstant = 1/180*Math.PI;//degree to rad formula
class KinematicMotion
{
	  constructor()
	  {

	  }
	  registerChild(sprite)//register a sprite, enabling kinematic motion to be added without errors
	  {
		sprite.Kinematic={};//store kinematic motion properties
	   	sprite.KinematicList=new Set();//store kinematic motions' names
		sprite.Kinematic.onUpdate=null;
	  }
	  unregisterChild(sprite)//unregister a sprite
	  {
		delete sprite.Kinematic;//remove all kinematic-added properties
	  	sprite.KinematicList.clear();
	  	delete sprite.KinematicList;
	  	KinematicGroup.delete(sprite);//remove sprite from kinematic group
	  }
	  //able to either add new motion or edit existing motion
	  addMotion(obj,name,sprite)//obj-> angle:degree,v:velocity,a:acceleration
	  {
		let temp = obj.angle*KinematicConstant,//convert to rad.
	    	cos = Math.cos(temp),
	   	sin = Math.sin(temp);

	    if (Math.abs(cos)<0.00001)//check if value is close to zero after conversion
	    {
		cos=0;//if so, assigne value zero to it
	    }
	    if (Math.abs(sin)<0.00001)//check if value is close to zero after conversion
	    {
		sin=0;
	    }

	    if (!this.hasMotion(name,sprite))//check if motion alrdy attached to sprite
	    {
		sprite.KinematicList.add(name);//push kinematic name into sprite kinematic arr
	     	KinematicGroup.add(sprite);	//add sprite into kinematic group
		sprite.Kinematic[name]={};
	      	//console.log('created '+name);
	    }

    
	    sprite.Kinematic[name].incrementX=cos*obj.v;//cal the amount of fixed increment for x
	    sprite.Kinematic[name].previousTruncatedX=0;//used to store the truncated decimal potion of x

	    sprite.Kinematic[name].incrementY=sin*obj.v;//cal the amount of fixed increment for y
	    sprite.Kinematic[name].previousTruncatedY=0;//used to store the truncated decimal potion of y

	    sprite.Kinematic[name].aX=cos*obj.a;//store the fixed acceleration
	    sprite.Kinematic[name].totalAX=0;//sum up the acc for each increment of x/y

	    sprite.Kinematic[name].aY=sin*obj.a;
	    sprite.Kinematic[name].totalAY=0;
	
		sprite.Kinematic[name].onUpdate=null;
	  }
	  hasMotion(name,sprite)//check if sprite has particular motion attached
	  {
	    return sprite.KinematicList.has(name);
	  }
	  removeMotion(name,sprite)//remove motion from a sprite,given a kinematic motion's name
	  {
		sprite.KinematicList.delete(name);
	    delete sprite.Kinematic[name];
	  }
	  updateMotion()//update movement of each kinematic's member
	  {
		KinematicGroup.forEach((member)=>{
		member.KinematicList.forEach((name)=>{

		let tempx=member.Kinematic[name].incrementX + member.Kinematic[name].totalAX + member.Kinematic[name].previousTruncatedX,//total up the fixed x increment, acc amount and previous truncated decimal potion
		tempy=member.Kinematic[name].incrementY + member.Kinematic[name].totalAY + member.Kinematic[name].previousTruncatedY,
		f_tempx = Math.floor(tempx),//round down to whole number
		f_tempy =  Math.floor(tempy);


		member.x += f_tempx;//for best performance, sprite x and y will be whole number, instead of decimal
			member.Kinematic[name].previousTruncatedX=tempx-f_tempx;//keep track of the truncated decimal potion

		member.y += f_tempy;
		member.Kinematic[name].previousTruncatedY=tempy-f_tempy;

		member.Kinematic[name].totalAX+=member.Kinematic[name].aX;//increase the total acc in x direction after each increment
		member.Kinematic[name].totalAY+=member.Kinematic[name].aY;
			
		//invoket callback func attached to the motion name if exists
		if (member.Kinematic[name].onUpdate){
		    member.Kinematic[name].onUpdate();
		    }
	      });
	    });
	  }
  
}
if (PIXI)//check if PIXI.js exists
{
	PIXI.KinematicMotion=KinematicMotion;
}
else
{
	throw new Error ("PIXI undefined, please include the PIXI.js script");
}
