//https://rawgit.com/marcustansoon/PhysicsEngine.js-2D/master/LearnPixiJS/KinematicMotion/PIXI.KinematicMotionV1.02.js
//example usage : https://jsfiddle.net/6ad5ugs3/127/ 
//example usage : https://jsfiddle.net/ftz5n6co/4/   --cleaner version

//method :    registerChild(SPRITE)            		-> registeration must be done first before attaching any kineamtic motion
//            unregisterChild(SPRITE)          		-> remove all previously added kinematic-related properties from sprite
//            addMotion(PROPERTIES,MOTION_NAME,SPRITE)  PROPERTIES-> {angle:in degree,v:velocity,a:acceleration}, add new kinematic motion to sprite if name supplied is unique(motion hasnt been added), else, alter the old motion properties
//            hasMotion(MOTION_NAME,SPRITE)            	->verify if sprite has specified motion attached
//            removeMotion(MOTION_NAME,SPRITE)  	-> remove a particular motion from sprite
//            updateMotion(GROUP,name)           	->GROUP: array of objs, name: Name of Motion, implement the effect of the specified kinemation motions on sprite movement(Normal Usage: invoke this method in your gameloop)

//properties added/accesible
//      sprite.KinematicMotions[MOTION_NAME]   .incrementX,incrementY,previousTruncatedY,previousTruncatedX,aXMultiplier,aX,aY,aYMultiplier

//attachable callback
//	sprite.Kinematic[MOTION_NAME].onUpdate=func()   	-> triggered on each Motion.updateMotion method
const KinematicConstant = 1 / 180 * Math.PI; //degree to rad formula
class KinematicMotion {
    constructor() {

    }
    addMotionS(name,vx,vy,ax,ay,sprite){
        if (!sprite.KinematicMotions) {
            sprite.KinematicMotions = {};
        }
        if (!this.hasMotion(name, sprite)) //check if motion alrdy attached to sprite
        {
            sprite.KinematicMotions[name] = {};
        }
        sprite.KinematicMotions[name].incrementX = vx; //cal the amount of fixed increment for x
        sprite.KinematicMotions[name].previousTruncatedX = 0; //used to store the truncated decimal potion of x

        sprite.KinematicMotions[name].incrementY = vy; //cal the amount of fixed increment for y
        sprite.KinematicMotions[name].previousTruncatedY = 0; //used to store the truncated decimal potion of y

        sprite.KinematicMotions[name].aX = ax; //store the fixed acceleration
        sprite.KinematicMotions[name].aXMultiplier = 0; //sum up the acc for each increment of x/y

        sprite.KinematicMotions[name].aY = ay;
        sprite.KinematicMotions[name].aYMultiplier = 0;

        sprite.KinematicMotions[name].onUpdate = null;
    }
    //able to either add new motion or edit existing motion
    addMotion( name,angle,v,a, sprite) 
    {

        let temp = angle * KinematicConstant, //convert to rad.
            cos = Math.cos(temp),
            sin = Math.sin(temp);
	    console.log('cos',cos);
		console.log('sin',sin);
        if (!sprite.KinematicMotions) {
            sprite.KinematicMotions = {};
        }
        if (Math.abs(cos) < 0.00001) //check if value is close to zero after conversion
        {
            cos = 0; //if so, assigne value zero to it
        }
        if (Math.abs(sin) < 0.00001) //check if value is close to zero after conversion
        {
            sin = 0;
        }
        if (!this.hasMotion(name, sprite)) //check if motion alrdy attached to sprite
        {
            sprite.KinematicMotions[name] = {};
        }
		
        sprite.KinematicMotions[name].incrementX = (cos * v * 1000<<0)/1000; //cal the amount of fixed increment for x
        sprite.KinematicMotions[name].previousTruncatedX = 0; //used to store the truncated decimal potion of x
		console.log('incX',sprite.KinematicMotions[name].incrementX);
        sprite.KinematicMotions[name].incrementY = (sin * v * 1000<<0)/1000; //cal the amount of fixed increment for y
        sprite.KinematicMotions[name].previousTruncatedY = 0; //used to store the truncated decimal potion of y
		console.log(sprite.KinematicMotions[name].incrementY);
        sprite.KinematicMotions[name].aX = cos * a; //store the fixed acceleration
        sprite.KinematicMotions[name].aXMultiplier = 0; //sum up the acc for each increment of x/y

        sprite.KinematicMotions[name].aY = sin * a;
        sprite.KinematicMotions[name].aYMultiplier = 0;

        sprite.KinematicMotions[name].onUpdate = null;
    }
    hasMotion(name, sprite) //check if sprite has particular motion attached
    {
        return sprite.KinematicMotions.hasOwnProperty(name);
    }
    removeMotion(name, sprite) //remove motion from a sprite,given a kinematic motion's name
    { 
        delete sprite.KinematicMotions[name];
    }
    updateMotion(GROUP,name) //update movement of each kinematic's member,name-> motion name
    {
        //GROUP.forEach((member) => {
	let length = GROUP.length,member;
        for (let loop=0;loop<length;loop++){    
		member = GROUP[loop];
                let tempx = member.KinematicMotions[name].incrementX + member.KinematicMotions[name].aX*member.KinematicMotions[name].aXMultiplier + member.KinematicMotions[name].previousTruncatedX, //total up the fixed x increment, acc amount and previous truncated decimal potion
                    tempy = member.KinematicMotions[name].incrementY + member.KinematicMotions[name].aY*member.KinematicMotions[name].aYMultiplier + member.KinematicMotions[name].previousTruncatedY;

				
                member.x += tempx<<0; //for best performance, sprite x and y will be whole number, instead of decimal
                member.KinematicMotions[name].previousTruncatedX = tempx%1; //keep track of the truncated decimal potion

                member.y += tempy<<0;
                member.KinematicMotions[name].previousTruncatedY = tempy%1;//get decimal portion

                member.KinematicMotions[name].aXMultiplier++; //increase the total acc in x direction after each increment
                member.KinematicMotions[name].aYMultiplier++;

                //invoke callback func attached to the motion name if exists
                if (member.KinematicMotions[name].onUpdate) {
                    member.KinematicMotions[name].onUpdate();
                }
				console.log('float',member.x);
				console.log(member.KinematicMotions[name].previousTruncatedY);
	}    
        //});
    }

}

    PIXI.KinematicMotion = KinematicMotion;
