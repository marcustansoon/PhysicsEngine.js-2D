

"use strict";
/*-----------------------------------------------------------------------------*/

const TickLoopRate = 20;//Represent the Physics Time Tick Rate -> Default is 20 (every 20 milliseconds, increment one Time Tick)

const TicksPerSecond = 1/TickLoopRate*1000;//Determine the number of Ticks Per Second

const GravitationalAccelerationConstant = -9.8;// assuming to be real life scenario m/s^2

//IMPORTANT : In order for this Physics Engine Codes to work -> Remember to invoke the Start func (eg : 'PhysicsEngineTick.Start();') Put that statement at the startup of your game
function PhysicsEngineTick (){}//empty function for now

PhysicsEngineTick.prototype.Start=function()//Function that starts the Time Tick Count with 50 Ticks per Second
{
	console.log("Running Physics Engine Time Tick at rate of "+ TickLoopRate +'milliseconds with '+TicksPerSecond+' Ticks per second');
	let CurrentTick = 0,
    CurrentMegaTick=0;
	
	this.TickInterval = setInterval(
		()=>
		{
			IncrementCurrentTick();//Increment the Time Tick
		
            KinematicEquation(this);
			
		}

	,TickLoopRate);//20milliseconds Fixed Loop
	
	this.GetCurrentTotalTick = function()//Return Total time tick
	{
		return CurrentTick+CurrentMegaTick*1000000;
	}
	
	function IncrementCurrentTick ()//func that increment tick -> 50 ticks per second
	{
		CurrentTick++;//Increment Current Tick
			
            if (CurrentTick === 1000000)//Check if current tick exceeds the max threshold value
            {
            	CurrentMegaTick++;
                CurrentTick=0;
            }
	}
}

var PhysicsObj = [];//Declaring Array that stores registered object properties

var PhysicsEngineTick = new PhysicsEngineTick ();

function RegisterPhysicsObject(){//Register an Object that has x and y properties
	if (this.x==undefined || this.y==undefined)
	{
		throw Error ("Must Register Object with existing x and y as part of their properties");
		return;
	}
	this.KinematicVelocityComponent={};//Initializing
	this.KinematicAccelerationComponent={};
	this.KinematicTrackCurrentTick={};
	this.KinematicTrackEndTick={};
	this.KinematicComponentName=[];
	this.KinematicIsComponentRemovableAfterXSeconds={};
	this.KinematicTrackTotalIncrementX={};
	this.KinematicTrackTotalIncrementY={};
	
	this.KinematicCurrentVelocityValue={};
	
	PhysicsObj[PhysicsObj.length] = this;//Store the registered Object component
}

function KinematicEquation (PhysicsTick)
{
	//this->Element
	//Name->Name
	PhysicsObj.forEach(function(Element){
		
		let ResultX=0,
		ResultY=0;
		
		Element.KinematicComponentName.forEach(function(Name,Index)
		{
			
			let t = (PhysicsEngineTick.GetCurrentTotalTick()- Element.KinematicTrackCurrentTick[Name])/TicksPerSecond;//in terms of seconds
			
			//Check if the Component Removal Time expires
			if (Element.KinematicIsComponentRemovableAfterXSeconds[Name] && (t>Element.KinematicTrackEndTick[Name]/TicksPerSecond))
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
	
}

//Allow Addition of new Kinematic Component
//Allow pre-existing Kinematic Component's attributes to be altered
RegisterPhysicsObject.prototype.SetKinematicParameters = function(String, Velocity,Acceleration,AngleInDegree,RemoveAfterXSeconds,Name)
{
	//Ensure the Name of the Component to be ADDED is unique
	if (String === "Add" && this.KinematicComponentName.includes(Name))
	{
			throw  Error ("Kinematic Name Given Already Exists, Add Kinematic Component Fails");
			return;
	}
	//Ensure the Name of the Component To be EDITED exist
	else if (String === "Change" && !this.KinematicComponentName.includes(Name))
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
		this.KinematicComponentName.push(Name);//Push the Unique New Name in the Object array
	}
	else
	{
		console.log('Changed '+Name+' Successfully');
	}
	//Setting up the Velocity in x and y direction
	this.KinematicVelocityComponent[Name]={x:Velocity*Math.cos(DegreeToRadians(AngleInDegree)),y:Velocity*Math.sin(DegreeToRadians(AngleInDegree))};
	
	//Setting up the Acceleration in x and y direction
	this.KinematicAccelerationComponent[Name]={x:Acceleration*Math.cos(DegreeToRadians(AngleInDegree)),y:Acceleration*Math.sin(DegreeToRadians(AngleInDegree))};
	
	//Keep Track of Current Tick
	this.KinematicTrackCurrentTick[Name]=PhysicsEngineTick.GetCurrentTotalTick();
	
	//Reset Total Increment (X and Y)
	this.KinematicTrackTotalIncrementX[Name]=0;
	this.KinematicTrackTotalIncrementY[Name]=0;
	
	//Check if the component needs to be removed after X seconds
	if (RemoveAfterXSeconds>0)
	{
		this.KinematicTrackEndTick[Name]=/*PhysicsEngineTick.CurrentTick +*/ RemoveAfterXSeconds*TicksPerSecond;//Convert the Seconds into Total Ticks (1 second = 50 ticks)
		this.KinematicIsComponentRemovableAfterXSeconds[Name]=true;
		console.log('With Countdown');
	}
	else
	{
		this.KinematicIsComponentRemovableAfterXSeconds[Name]=false;
		console.log('Without Countdown');
	}
	
	this.KinematicCurrentVelocityValue[Name]={x:0,y:0};
	
}

//Remove Any Added Kinematic Parameters by incorporating the 'name' representing that component
RegisterPhysicsObject.prototype.RemoveKinematicParameters = function(Name){
	if (this.KinematicComponentName.includes(Name))//Verify the existence of the name of kinematic component
	{
		console.log('Removing '+Name);
		this.KinematicIsComponentRemovableAfterXSeconds[Name]=true;//Execution of the following two statements will trigger deletion in the next execution of PhysicsEngineTick function
		this.KinematicTrackEndTick[Name]=0;
	}
	else //Throw Error If Name Doesnt Exists
	{
		throw  Error ("Kinematic Name Given Does not Exists");
	}
}

//Obtain Instantaneous Velocity in the specified Direction
//'Name' is the name of the Kinematic component
//'String' is the direction (either x or y)
RegisterPhysicsObject.prototype.GetInstantaneousVelocity = function (Name,String){
	if (this.KinematicComponentName.includes(Name))//Verify the existence of the name of kinematic component
	{
		if (String==="x"||String==="X")
			return this.KinematicCurrentVelocityValue[Name].x;
		else if (String==="y"||String==="Y")
			return this.KinematicCurrentVelocityValue[Name].y;
		else
			throw  Error ("Invalid Return Velocity Parameters");
	}
	
	
}

//Obtain Instantaneous Acceleration in the specified Direction
//'Name' is the name of the Kinematic component
//'String' is the direction (either x or y)
RegisterPhysicsObject.prototype.GetInstantaneousDistanceTravelled = function (Name,String){
	if (this.KinematicComponentName.includes(Name))//Verify the existence of the name of kinematic component
	{
		if (String==="x"||String==="X")
			return this.KinematicTrackTotalIncrementX[Name];
		else if (String==="y"||String==="Y")
			return this.KinematicTrackTotalIncrementY[Name];
		else
			throw  Error ("Invalid Return Acc Parameters");
	}
	
	
}

function DegreeToRadians ()//Convert Angle In Degree To Radian
{
	return ((arguments[0]/180)*Math.PI);//Return Angle in Rads
}

/*------------------------------------------------------------------------------*/
