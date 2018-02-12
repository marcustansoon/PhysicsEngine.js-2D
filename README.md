# PhysicsEngine
Sample Demo with p5 collision .js:-

https://www.w3schools.com/code/tryit.asp?filename=FODK89T1QF0L

https://jsfiddle.net/1suk5ejt/2/

Brief Descriptions :-
This engine allows you to apply kinematic motion component (velocity, acceleration) aimed at a specified angle to an canvas object, using ```Kinematic Equation (S=U*t + 1/2*a*t*t)```. Multiple motions acted on the same object are also supported.
This engine can be utilised in many fields such as game development. It does have its own Fixed Timer Tick. Do remember to start the Physics Timer at the startup of your project.

```javascript
PhysicsEngineTick.Start();//Start the Physics Engine Time Tick
```

Before applying any motion component to any canvas object, you must first register the object.
Because this physics engine attaches motion to an object, it is necessary for that particular object to have both x and y properties before registration is done.

Example of registering an object:-

```javascript
var MyObj = new Obj(20,10);

function Obj(x,y){
  this.x=x;//Object MUST have both x and y properties, allowing any attached kinematic motion to alter them
  this.y=y;
  RegisterPhysicsObject.call(this); // Register the 'MyObj' as part of the Physics Object
}
```

You are also required to inherit the prototype properties of that engine so that kinematic motion can be attached to that registered object:-

```javascript
YourObj.prototype = Object.create(RegisterPhysicsObject.prototype);//Inherit the Prototype properties of Physics Engine
YourObj.prototype.constructor = YourObj;//declare 'Obj' as the parent root which has the prototype functions of Physics Engine (eg SetKinematicParameters, RemoveKinematicParameters, etc)
```


Features/Functions provided for Registered Object:-

1) Attach an Kinematic Component
```javascript
//Inducing Kinematic Component to YourObj
YourObj.SetKinematicParameters("Add",//Specifies that you want to add a new component to an object (String)
                                115,//Velocity (Integer/Float)
                                -35,//Acceleration (Integer/Float)
                                90,//Angle in degree (Integer/Float)
                                0,//Represent number of seconds for this component to be removed, Put '0' which implies the component is permanent (Integer/Float)
                                "Sample");//Name of this component, It must be Unique. An Object cannot have more than one component attached with the same name!!! (String)                         
```


2) Change an existing Kinematic Component
```javascript
YourObj.SetKinematicParameters("Change",//Specifies that you want to change a particular component attached to an Object (String)
                                0,//Velocity (Integer/Float)
                                -2,//Acceleration (Integer/Float)
                                90,//Angle in degree (Integer/Float)
                                0,//Represent number of seconds for this component to be removed, Put '0', which implies the component is permanent (Integer/Float)
                                "Sample");//Name of the component to be changed (String)    
```

3) Remove an existing Kinematic Component

```javascript
//Removing Kinematic Component from YourObj
YourObj.RemoveKinematicParameters("Sample");//Name of the component to be removed

```



To Be Continued...
