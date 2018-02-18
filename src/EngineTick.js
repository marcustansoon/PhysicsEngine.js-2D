"use strict";

var Game2DEngine={};

(function(){


const TickSetting = {
	TickLoopRate:20 //Represent the Physics Time Tick Rate -> Default is 20 (every 20 milliseconds, increment one Time Tick)
};


//IMPORTANT : In order for this Physics Engine Codes to work -> Remember to invoke the Start func (eg : 'PhysicsEngineTick.Start();') Put that statement at the startup of your game

function EngineTick(){};//empty function for now

EngineTick.prototype.Start=function()//Function that starts the Time Tick Count with 50 Ticks per Second (default)
{
	let CallBackFunctions=[];//default
    
	
    for (let x=0;x<arguments.length;x++)
    {
    	if (typeof arguments[x] === "function")
       	CallBackFunctions.push(arguments[x]);//only stores arguments that are expressed as functions
        console.log(arguments[x]);
    }
    
	if (!isNaN(arguments[0]))
	{
		TickSetting.TickLoopRate = arguments[0];//store the tick loop rate if given by user as the 1st param 
	}
	TickSetting.TicksPerSecond=1/TickSetting.TickLoopRate*1000;//Determine the number of Ticks Per Second
	
	Object.freeze(TickSetting);
	Object.preventExtensions(TickSetting);//prevent further modification
	
	console.log("Running Physics Engine Time Tick at rate of "+ TickSetting.TickLoopRate +'milliseconds with '+ TickSetting.TicksPerSecond+' Ticks per second');
	
	let CurrentTick = 0,
    	CurrentMegaTick=0;
	
	this.TickInterval = setInterval(
		()=>
		{
			IncrementCurrentTick();//Increment the Time Tick
		
        	CallBackFunctions.forEach(element=>{
            	element();//call the passed functions
            });
            
            //KinematicEquation(this);
			
		}

	,TickSetting.TickLoopRate);//20milliseconds Fixed Loop by default unless user changed the tick loop rate
	
	this.GetCurrentTotalTick = function()//Return Total time tick
	{
		return CurrentTick+CurrentMegaTick*1000000;
	}
	
	function IncrementCurrentTick ()//func that increment tick. default:-> 50 ticks per second
	{
		CurrentTick++;//Increment Current Tick
			
            if (CurrentTick === 1000000)//Check if current tick exceeds the max threshold value
            {
            	CurrentMegaTick++;
                CurrentTick=0;
            }
	}
}

//Get number of ticks per second
EngineTick.prototype.GetTicksPerSecond = function(){
	return TickSetting.TicksPerSecond;
}

//get the tick loop rate (1 tick loop rate -> every 1 millisecond increment one tick)
EngineTick.prototype.GetTickLoopRate = function(){
	return TickSetting.TickLoopRate;
}


Game2DEngine.EngineTick=EngineTick;

})();




/*
var enginetick=new Game2DEngine.EngineTick();
enginetick.Start();
console.log(enginetick.GetCurrentTotalTick());
*/
