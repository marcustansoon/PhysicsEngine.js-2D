
/*-----------------------------------------------------------------------------*/

(function(){


var PhysicsObj = [];//Declaring Array that stores registered object properties

function Kinematic(){}

Kinematic.prototype.RegisterKinematicObject= function(Object){
//function RegisterPhysicsObject(Object){//Register an Object that has x and y properties
	let _this = Object;
	
    /*
    if (_this.x==undefined || _this.y==undefined)
	{
		throw Error ("Must Register Object with existing x and y as part of their properties");
		return;
	}*/
    
    
	_this.KinematicVelocityComponent={};//Initializing
	_this.KinematicAccelerationComponent={};
	_this.KinematicTrackCurrentTick={};
	_this.KinematicTrackEndTick={};
	_this.KinematicComponentName=[];
	_this.KinematicIsComponentRemovableAfterXSeconds={};
	_this.KinematicTrackTotalIncrementX={};
	_this.KinematicTrackTotalIncrementY={};
	
	_this.KinematicComponentRemoveBoolean={};
	_this.KinematicCurrentVelocityValue={};
	
	PhysicsObj[PhysicsObj.length] = _this;//Store the registered Object component
};

Kinematic.prototype.KinematicHandler = function (Tick)
//function KinematicEquation (PhysicsTick)
{

	
	//this->Element
	//Name->Name
	PhysicsObj.forEach(function(Element){
		
		let ResultX=0,
		ResultY=0;
		//console.log(Element.x);
		Element.KinematicComponentName.forEach(function(Name,Index)
		{
			
			let t = (Tick.GetCurrentTotalTick()- Element.KinematicTrackCurrentTick[Name])/Tick.GetTicksPerSecond();//in terms of seconds
			
			//Check if the Component Removal Time expires
			if ((Element.KinematicIsComponentRemovableAfterXSeconds[Name] && (t>Element.KinematicTrackEndTick[Name]/Tick.GetTicksPerSecond()))||Element.KinematicComponentRemoveBoolean[Name])
			{
				console.log('x:'+Element.x+' Y:'+Element.y);
				
				//Delete Unused Object Properties
				delete Element.KinematicVelocityComponent[Name];
				delete Element.KinematicAccelerationComponent[Name];
				delete Element.KinematicIsComponentRemovableAfterXSeconds[Name];
				delete Element.KinematicTrackEndTick[Name];
				delete Element.KinematicTrackCurrentTick[Name];
				delete Element.KinematicTrackTotalIncrementX[Name];
				delete Element.KinematicTrackTotalIncrementY[Name];
				delete Element.KinematicCurrentVelocityValue[Name];
				delete Element.KinematicComponentRemoveBoolean[Name];
				
				Element.KinematicComponentName.splice(Index, 1);
				
				console.log('Deleted '+ Name + ' Kinematic Component');
				console.log(Name+' arr size ' +Element.KinematicComponentName.length);
				
			}
			else
			{	
				//x calculations
				let u = Element.KinematicVelocityComponent[Name].x;
				let a = Element.KinematicAccelerationComponent[Name].x;
				
				
				ResultX = u*t + (1/2)*a*t*t;
				
				//Keep track of the increment per unit time
				//Purpose:- So that it will be added (using '+=') up to the Canvas X,Y Position (Without using '=')
				let increase = ResultX - Element.KinematicTrackTotalIncrementX[Name];
				Element.KinematicTrackTotalIncrementX[Name]+=increase;
				
				
				Element.x+=increase;//Move the canvas based on the amount of increment per unit time
				
				//Keep Track of the Instantaneous Velocity
				Element.KinematicCurrentVelocityValue[Name].x=u+a*t;
				
				//y calculations
				u = Element.KinematicVelocityComponent[Name].y,
				a = Element.KinematicAccelerationComponent[Name].y;
				
				ResultY = u*t + (1/2)*a*t*t;
				
				increase = ResultY - Element.KinematicTrackTotalIncrementY[Name];
				Element.KinematicTrackTotalIncrementY[Name]+=increase;
				
				Element.y-=increase;//Move the canvas based on the amount of increment per unit time
				
				//Keep Track of the Instantaneous Velocity
				Element.KinematicCurrentVelocityValue[Name].y=u+a*t;
			}
			
			
		});
		
	});
	
};

//Allow Addition of new Kinematic Component
//Allow pre-existing Kinematic Component's attributes to be altered
Kinematic.prototype.AddKinematicParameters = function(String, Velocity,Acceleration,AngleInDegree,RemoveAfterXSeconds,Name,Tick,Object)
{
	let _this = Object;
	//Ensure the Name of the Component to be ADDED is unique
	if (String === "Add" && _this.KinematicComponentName.includes(Name))
	{
			throw  Error ("Kinematic Name Given Already Exists, Add Kinematic Component Fails");
			return;
	}
	//Ensure the Name of the Component To be EDITED exist
	else if (String === "Change" && !_this.KinematicComponentName.includes(Name))
	{
			throw  Error ("Kinematic Name Given Does not Exists, Change Kinematic Component Fails");
			return;
	}
	else if ((String != "Add") && (String != "Change"))//Throw error if the String parameter is not specified
	{
		throw  Error ("Kinematic Parameters Given Is Incomplete");
		return;
	}
	
	
	if (String === "Add")
	{
		console.log('Added '+Name+' Successfully');
		_this.KinematicComponentName.push(Name);//Push the Unique New Name in the Object array
	}
	else
	{
		console.log('Changed '+Name+' Successfully');
	}
	//Setting up the Velocity in x and y direction
	_this.KinematicVelocityComponent[Name]={x:Velocity*Math.cos(DegreeToRadians(AngleInDegree)),y:Velocity*Math.sin(DegreeToRadians(AngleInDegree))};
	
	//Setting up the Acceleration in x and y direction
	_this.KinematicAccelerationComponent[Name]={x:Acceleration*Math.cos(DegreeToRadians(AngleInDegree)),y:Acceleration*Math.sin(DegreeToRadians(AngleInDegree))};
	
	//Keep Track of Current Tick
	_this.KinematicTrackCurrentTick[Name]=Tick.GetCurrentTotalTick();
	
	//Reset Total Increment (X and Y)
	_this.KinematicTrackTotalIncrementX[Name]=0;
	_this.KinematicTrackTotalIncrementY[Name]=0;
	
	//Check if the component needs to be removed after X seconds
	if (RemoveAfterXSeconds>0)
	{
		_this.KinematicTrackEndTick[Name]=/*PhysicsEngineTick.CurrentTick +*/ RemoveAfterXSeconds*Tick.GetTicksPerSecond ();//Convert the Seconds into Total Ticks. Default: (1 second = 50 ticks)
		_this.KinematicIsComponentRemovableAfterXSeconds[Name]=true;
		console.log('With Countdown');
	}
	else
	{
		_this.KinematicIsComponentRemovableAfterXSeconds[Name]=false;
		console.log('Without Countdown');
	}
	
	_this.KinematicCurrentVelocityValue[Name]={x:0,y:0};//default value
	_this.KinematicComponentRemoveBoolean[Name]=false;//default value
	
	
};

//Remove Any Added Kinematic Parameters by incorporating the 'name' representing that component
Kinematic.prototype.RemoveKinematicParameters = function(Name,Object){
	let _this = Object;
	if (_this.KinematicComponentName.includes(Name))//Verify the existence of the name of kinematic component
	{
		console.log('Removing '+Name);
		_this.KinematicIsComponentRemovableAfterXSeconds[Name]=true;//Execution of the following two statements will trigger deletion in the next execution of PhysicsEngineTick function
		_this.KinematicTrackEndTick[Name]=0;
		_this.KinematicComponentRemoveBoolean[Name]=true;
	}
	else //Throw Error If Name Doesnt Exists
	{
		throw  Error ("Kinematic Name Given Does not Exists");
	}
};

//Obtain Instantaneous Velocity in the specified Direction
//'Name' is the name of the Kinematic component
//'String' is the direction (either x or y)
Kinematic.prototype.GetInstantaneousVelocity = function (Name,String,Object){
	let _this = Object;
	if (_this.KinematicComponentName.includes(Name))//Verify the existence of the name of kinematic component
	{
		if (String==="x"||String==="X")
			return _this.KinematicCurrentVelocityValue[Name].x;
		else if (String==="y"||String==="Y")
			return _this.KinematicCurrentVelocityValue[Name].y;
		else
			throw  Error ("Invalid Return Velocity Parameters");
	}
	
	
};

//Obtain Instantaneous Acceleration in the specified Direction
//'Name' is the name of the Kinematic component
//'String' is the direction (either x or y)
Kinematic.prototype.GetInstantaneousDistanceTravelled = function (Name,String,Object){
	let _this = Object;
	if (_this.KinematicComponentName.includes(Name))//Verify the existence of the name of kinematic component
	{
		if (String==="x"||String==="X")
			return _this.KinematicTrackTotalIncrementX[Name];
		else if (String==="y"||String==="Y")
			return _this.KinematicTrackTotalIncrementY[Name];
		else
			throw  Error ("Invalid Return Acc Parameters");
	}
	
	
};
// checks if a particular kinematic component exists
Kinematic.prototype.CheckIfKinematicComponentExists=function(Name,Object)
{
	let _this = Object;
	return _this.KinematicComponentName.includes(Name);
};
function DegreeToRadians ()//Convert Angle In Degree To Radian
{
	return ((arguments[0]/180)*Math.PI);//Return Angle in Rads
}


Game2DEngine.Kinematic=Kinematic;

})();
/*------------------------------------------------------------------------------*/
