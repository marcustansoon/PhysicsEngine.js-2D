# PhysicsEngine
Demo:-
https://www.w3schools.com/code/tryit.asp?filename=FOANUWF1ZX5L

Brief Descriptions :-
This engine allows you to apply kinematic motion component (velocity, acceleration) to an canvas object.

Before using this engine, you must first register the object.
Because this physics engine attaches motion to an object, it is necessary for that particular object to have both x and y properties.
Example of registering an object:-

```javascript
var MyObj = new Obj(20,10);

function Obj(x,y){
  this.x=x;
  this.y=y;
  RegisterPhysicsObject.call(this);//Register the object so that kinematic motion can be attached to that object
}
```

You are also required to inherit the prototype properties of that engine:-

```javascript
YourObj.prototype = Object.create(RegisterPhysicsObject.prototype);//Inherit the Prototype properties of Physics Engine
YourObj.prototype.constructor = YourObj;
```


To Be Continued...
