
  "use strict";
  var Game2DEngine={};


  (function () {

  let RegisteredRigidbodyGroupName=[];//array type -> stores every registered rigidbody group names
  let RigidbodyGroup={};//object type -> Define properties (Member,CollidableWith ,EnhancedCollidableGroup) for each registered rigidbody group


  //RigidbodyGroup['Player].Member -> stores group members (rigidbody object)
  //RigidbodyGroup['Player].CollidableWith ->stores collidable group names 
  //RigidbodyGroup['Player].EnhancedCollidableGroup -> stores improved collidable group names 


  let RigidbodyGroupToBeRemoved=[];//array-> stores Rigidbody Group to be removed


  ///Rigidbody_Group_Name -> string, Rigidbody_Collidable_With_Group_Name->array of string
  function RigidBody(){};  


  //Check if a particular Rigidbody group exists
  //Param:  string (RigidbodyGroupName)
  RigidBody.prototype.CheckIfRigidbodyGroupExist = function(RigidbodyGroupName)  
  {
      return RegisteredRigidbodyGroupName.includes(RigidbodyGroupName);//check if RegisteredRigidbodyGroupName (Array of strings) contains a specified group name
  };

  //Check if an Object has a rigidbody
  //Param: Object
  RigidBody.prototype.CheckIfObjectHasRigidbody = function(IsObjectHasRigidbody)  
  {

      return (typeof IsObjectHasRigidbody.RigidbodyType==="string");//check if object has the Rigidbody Type properties
  }; 

  //Check if Object is a member of a particular Rigidbody Group
  //Param: Object, String (RigidbodyGroupName)
  RigidBody.prototype.CheckIfObjectIsInRigidbodyGroup = function(ObjectToBeChecked,RigidbodyGroupName)  
  {
      if (this.CheckIfRigidbodyGroupExist(RigidbodyGroupName))//check if the given group name exists
      return RigidbodyGroup[RigidbodyGroupName].Member.includes(ObjectToBeChecked);//if so, determine whether an object is a member of that group
  };   

  //Obtain Rigidbody type of an object
  //Param: Object
  RigidBody.prototype.GetObjectRigidbodyType = function(ObjectRigidbody)  
  {
      if (this.CheckIfObjectHasRigidbody(ObjectRigidbody))//ensure that the given object has rigidbody
      return ObjectRigidbody.RigidbodyType;//return the rigidbody type (string) of that object
  };   

  //Obtain all the collidable group names of a particular Rigidbody Group 
  //Param: String (RigidbodyGroupName)
  RigidBody.prototype.GetRigidbodyGroupCollidableNames = function(RigidbodyGroupName)  
  {
      if (this.CheckIfRigidbodyGroupExist(RigidbodyGroupName))//determine whether the given group name exists
      return RigidbodyGroup[RigidbodyGroupName].CollidableWith;//return all the group names (in String Array) that are collidable with that group
  };

  //Check if a rigidbody group is collidable with another rigidbody group
  //Param : String (RigidbodyGroupName), String (RigidbodyGroupName)
  RigidBody.prototype.CheckIfRigidbodyGroupCollidableWithOtherRigidbodyGroup = function(RigidbodyGroupName1,RigidbodyGroupName2)  
  {
    if (this.CheckIfRigidbodyGroupExist(RigidbodyGroupName1)&&this.CheckIfRigidbodyGroupExist(RigidbodyGroupName2))//check if the given group names exist
      return RigidbodyGroup[RigidbodyGroupName1].CollidableWith.includes(RigidbodyGroupName2);//verify whether both groups are collidable
  };


  //for debug purpose
  RigidBody.prototype.Announce = function()
  {
    RegisteredRigidbodyGroupName.forEach(element=>{
      console.log(element);//output each registered group name with their respective collidable group names
      console.log('CollidableWith '+RigidbodyGroup[element].CollidableWith);//output arrays of collidable group names
      console.log('EnhancedCollidableGroup ' +RigidbodyGroup[element].EnhancedCollidableGroup);//output arrays of EnhancedCollidable group names

    });

  };


  //Remove a registered Rigidbody Group
  //Param : RigidBody Group Name(string), boolean -> determine whether to remove all the members of that particular group
  RigidBody.prototype.RemoveRigidbodyGroup = function (GroupName,boolean)
  {
      if (RegisteredRigidbodyGroupName.includes(GroupName))
        {
          RigidbodyGroupToBeRemoved.push(GroupName);
        }
    else
      {
        console.log('Rigidbody Group Name to be deleted does not exist');
      }

    if (boolean)
    {
      RigidbodyGroup[GroupName].Member.forEach(element=>{
          element.RigidbodyToBeRemoved = true;


      });
    }

  };

  //Register Rigidbody Group
  //Param : String (RigidbodyGroupName to be registered) , Array of string (consisting collidable group names)
  RigidBody.prototype.RegisterRigidbodyGroup = function (Rigidbody_Group_Name,Rigidbody_Collidable_With_Group_Name)
  {
    if (!RigidbodyGroup.hasOwnProperty(Rigidbody_Group_Name))//Check if the rigidbody group name given is unique
    {
      RegisteredRigidbodyGroupName.push(Rigidbody_Group_Name);//initialization
      RigidbodyGroup[Rigidbody_Group_Name]={};
      RigidbodyGroup[Rigidbody_Group_Name].CollidableWith=[];
      RigidbodyGroup[Rigidbody_Group_Name].Member=[];
      RigidbodyGroup[Rigidbody_Group_Name].EnhancedCollidableGroup=[];

      Rigidbody_Collidable_With_Group_Name.forEach(function(element)//element -> collidable group names
      {
        if (!RigidbodyGroup[Rigidbody_Group_Name].CollidableWith.includes(element))
        {

            RigidbodyGroup[Rigidbody_Group_Name].CollidableWith.push(element);
            //store the element into the colliadable group
            console.log(Rigidbody_Group_Name +' is collidable with ' +element);


            if (!RigidbodyGroup[Rigidbody_Group_Name].EnhancedCollidableGroup.includes(element))
              {
                  if (RegisteredRigidbodyGroupName.includes(element))
                  {
                      //managing the members of EnhancedCollidableGroup, ensuring the element (collidable group name) is only pushed once 
                    if (!RigidbodyGroup[element].EnhancedCollidableGroup.includes(Rigidbody_Group_Name))
                    {
                      RigidbodyGroup[Rigidbody_Group_Name].EnhancedCollidableGroup.push(element);
                      //add the group name if it hasnt being added
                    }

                  }
                  else
                  {
                      RigidbodyGroup[Rigidbody_Group_Name].EnhancedCollidableGroup.push(element);
                      //add the group name if it hasnt being added 
                  }
              }
        }
        else
        {
           throw Error (element+' is alrdy included'); 
        }
      });



    }
    else
    {
      throw Error (Rigidbody_Group_Name+' already exists');
    }

  };

  //instantly remove rigidbody group (invoked on the end of checkcollision function)
  //no param
  function RemoveRigidbodyGroupNow()
  {
      //pick every group names to be removed
      RigidbodyGroupToBeRemoved.forEach(function(groupnametoberemoved,index)
      {

        RegisteredRigidbodyGroupName.forEach(function(mainelement){
          //check if the CollidableWith members of every registered group contains that group-name-to-be-removed name
          let temp2 = RigidbodyGroup[mainelement].CollidableWith.findIndex(element=>{
            return element === groupnametoberemoved;//if so, exclude it

          });
          if (temp2>=0)
          {
            RigidbodyGroup[mainelement].CollidableWith.splice(temp2, 1);//pop out the arr
          }




          //check if the EnhancedCollidableGroup members of every registered group contains that group-name-to-be-removed name
          let temp3 = RigidbodyGroup[mainelement].EnhancedCollidableGroup.findIndex(element=>{
            return element === groupnametoberemoved;//if so, exclude it

          });
          if (temp3>=0)
          {
            RigidbodyGroup[mainelement].EnhancedCollidableGroup.splice(temp3, 1);//pop out the arr
          }

        });


        //check if the RegisteredRigidbodyGroupName  contains that group-name-to-be-removed name
        let temp = RegisteredRigidbodyGroupName.findIndex(function(element){
        return element === groupnametoberemoved;
        });

        if (temp>=0)
        {
            console.log(RegisteredRigidbodyGroupName[temp]+groupnametoberemoved+' deleted');
            RegisteredRigidbodyGroupName.splice(temp, 1);//pop out the arr of RegisteredRigidbodyGroupName
            delete RigidbodyGroup[groupnametoberemoved];//delete the group name property

        }



      });





    console.log(RegisteredRigidbodyGroupName);

      RigidbodyGroupToBeRemoved=[];
  }

  //instantly Remove rigidbody (invoked on the end of checkcollision func)
  //Param :  Object
  function RemoveRigidbodyNow (ObjectToBeRemoved)
    {

      if (typeof ObjectToBeRemoved.RigidbodyGroup === "string")//check if the obj has the rigidbody properties
      {
          //delete all the properties pertaining to the rigidbody
          delete ObjectToBeRemoved.RigidbodyRadius;
          delete ObjectToBeRemoved.RigidbodyID;
          delete ObjectToBeRemoved.RigidbodyCallBackFunc;
          delete ObjectToBeRemoved.RigidbodyWidth;
          delete ObjectToBeRemoved.RigidbodyHeight;
          delete ObjectToBeRemoved.RigidbodyType;
          delete ObjectToBeRemoved.RigidbodyIsDeactivated;
          delete ObjectToBeRemoved.RigidbodyColliderID;
          delete ObjectToBeRemoved.RigidbodyGroup;
          delete ObjectToBeRemoved.RigidbodyToBeRemoved;
          delete ObjectToBeRemoved.RigidbodyColliderGroupName;
          console.log('Deleted' );
      }

    }


  // Mark the rigidbody to be removed (only trigger the remove on the end of checkcollision func)
  // Param : Object
  RigidBody.prototype.RemoveRigidbody = function (ObjectToBeRemoved)
  {
    if (/*typeof ObjectToBeRemoved.RigidbodyGroup === "string"*/this.CheckIfObjectHasRigidbody(ObjectToBeRemoved)){//check if the obj has the rigidbody properties
        ObjectToBeRemoved.RigidbodyToBeRemoved = true;
      console.log(ObjectToBeRemoved.RigidbodyToBeRemoved);
    }

  };

  //Deactivate a rigidbody
  //Param : Object
  RigidBody.prototype.DeactivateRigidbody = function (ObjectToBeDeactivated)
  {
      if (this.CheckIfObjectHasRigidbody(ObjectToBeDeactivated))
      {
          ObjectToBeDeactivated.RigidbodyIsDeactivated = true;
      }
  };

  //activate a rigidbody
  RigidBody.prototype.ActivateRigidbody = function (ObjectToBeActivated)
  {
      if (this.CheckIfObjectHasRigidbody(ObjectToBeActivated))
      {
          ObjectToBeActivated.RigidbodyIsDeactivated = false;
      }
  };


  //Add rigidbody to an object
  //Param : Rigidbody Type (String), Rigidbody Group Name (String), ID OPTIONAL (Number), (Width Height / Radius)(Number), Func callback Optional(Function), Object
  //'Rectangular','Player',1/*id*/,15,15,PlayerCallback, Object
  RigidBody.prototype.AddRigidbody = function(Rigidbody_Type,Rigidbody_Group_Name,ID)
  {

    let Total_Parameters = arguments.length;
      let _this=arguments[Total_Parameters-1];

  switch(Rigidbody_Type)
  {
     case 'Circle':

        if (Total_Parameters===6 && typeof(arguments[3])==="number")
        {
            _this.RigidbodyRadius = arguments[3];

            if (typeof (ID) !=="undefined")
            {
              _this.RigidbodyID = ID; 
                console.log('with id');
            }

            if (typeof (arguments[4]) ==="function")
            {
              _this.RigidbodyCallBackFunc = arguments[5];
                console.log('with callback');
            }

        }
        else
        {
          throw Error ("Invalid 'AddRigidbody' Circle function parameters");  
        }
       break;

    case 'Rectangular':  

        //Full Param
        //Param : Rigidbody Type , Rigidbody Group Name ,ID,  Width ,Height ,callback
        if (Total_Parameters===7 && typeof(arguments[3])==="number" && typeof(arguments[4])==="number")
        {
            _this.RigidbodyWidth = arguments[3];
            _this.RigidbodyHeight = arguments[4];
            if (typeof (ID) !=="undefined")
            {
              _this.RigidbodyID = ID; 
                console.log('with id');
            }

            if (typeof (arguments[5]) ==="function")
            {
              _this.RigidbodyCallBackFunc = arguments[5];
                console.log('with callback');
            }

        }
        else
        {
          throw Error ("Invalid 'AddRigidbody' Rectangular function parameters");  
        }

      break;   

    default:
      throw Error('Invalid Rigidbody Type, Failed to add');


  }

    if (RigidbodyGroup.hasOwnProperty(Rigidbody_Group_Name))
    {
        RigidbodyGroup[Rigidbody_Group_Name].Member.push(_this);
          _this.RigidbodyGroup  = Rigidbody_Group_Name;
    }
    else
    {
         throw Error('Rigidbody Group Name undefined');
    }

    _this.RigidbodyType = Rigidbody_Type;


    _this.RigidbodyIsDeactivated = false;
    _this.RigidbodyToBeRemoved = false;

    _this.RigidbodyColliderID=0;
    _this.RigidbodyColliderGroupName="";

  };

  //Check for collision among the members of registered rigidbody groups
  //no Param
  RigidBody.prototype.CheckRigidbodyCollision = function()
  {
    //element-> every registered collidable group name 
    RegisteredRigidbodyGroupName.forEach(function(element)
    //Pick every Registered rigidbody group names
    { 
      //subelement - > collidable group of element
      RigidbodyGroup[element].EnhancedCollidableGroup.forEach(function(subelement)
      //Pick EnhancedCollidableGroup names of each Registered rigidbody group
      {
        for (let x=0;x<RigidbodyGroup[element].Member.length;x++)
        //RigidbodyGroup[element].Member -> collided object (if collision happens)
        //pick every member of the registered group
        {

          for (let y=0;y<RigidbodyGroup[subelement].Member.length;y++)
          //RigidbodyGroup[subelement].Member -> collider object (if collision happens)
          //pick every member of EnhancedCollidableGroup of that registered group
          {

              if ( RigidbodyGroup[subelement].Member[y].RigidbodyIsDeactivated)//check if the rigidbody of an object is deactivated
              {
                  continue;//if so, move to the next iteration, else proceed to collision detection
              }

              let temp=false;//default (used to store the boolean result on whether a collision happens)


              if (RigidbodyGroup[element].Member[x].RigidbodyType==='Rectangular' && RigidbodyGroup[subelement].Member[y].RigidbodyType==='Rectangular')
              //verify if the rigidbody type of both objects are rectangular
              {
                temp = P5_JS_Collision_Detection.collideRectRect(RigidbodyGroup[element].Member[x].x, RigidbodyGroup[element].Member[x].y, RigidbodyGroup[element].Member[x].RigidbodyWidth, RigidbodyGroup[element].Member[x].RigidbodyHeight, RigidbodyGroup[subelement].Member[y].x, RigidbodyGroup[subelement].Member[y].y, RigidbodyGroup[subelement].Member[y].RigidbodyWidth, RigidbodyGroup[subelement].Member[y].RigidbodyHeight);
                //if so, invoke rect to rect collision func
              }
              else if (RigidbodyGroup[element].Member[x].RigidbodyType==='Circle' && RigidbodyGroup[subelement].Member[y].RigidbodyType==='Circle')
              //verify if the rigidbody type of both object is circle
              {
                temp = P5_JS_Collision_Detection.collideCircleCircle(RigidbodyGroup[element].Member[x].x, RigidbodyGroup[element].Member[x].y, RigidbodyGroup[element].Member[x].RigidbodyWidth, RigidbodyGroup[element].Member[x].RigidbodyHeight, RigidbodyGroup[subelement].Member[y].x, RigidbodyGroup[subelement].Member[y].y, RigidbodyGroup[subelement].Member[y].RigidbodyWidth, RigidbodyGroup[subelement].Member[y].RigidbodyHeight);
                  //if so, invoke circle to circle collision func
              }


              if (temp)//if collision happens
              {


                    RigidbodyGroup[element].Member[x].RigidbodyColliderID = RigidbodyGroup[subelement].Member[y].RigidbodyID; //store the ID of collider object into the 'RigidbodyColliderID' property of the corresponding collided object


                    RigidbodyGroup[subelement].Member[y].RigidbodyColliderID = RigidbodyGroup[element].Member[x].RigidbodyID; 


                RigidbodyGroup[element].Member[x].RigidbodyColliderGroupName=subelement;//store the rigidbody group name of the collider into the collided object property
                RigidbodyGroup[subelement].Member[y].RigidbodyColliderGroupName=element;


                //check if the collider/collided object has existing call back func, if so, invoke it
                if (RigidbodyGroup[element].Member[x].RigidbodyCallBackFunc !== undefined)//1st party
                {
                    RigidbodyGroup[element].Member[x].RigidbodyCallBackFunc();
                }
                if (RigidbodyGroup[subelement].Member[y].RigidbodyCallBackFunc !== undefined)//2nd party -> collider
                {
                    RigidbodyGroup[subelement].Member[y].RigidbodyCallBackFunc();
                }

              }

              //console.log(temp);
          }
        }
      });
    });

    RegisteredRigidbodyGroupName.forEach(function(element){//pick every member of each registered group
      for (let x=0;x<RigidbodyGroup[element].Member.length;x++)
      {
          if (RigidbodyGroup[element].Member[x].RigidbodyToBeRemoved)//determine if rigidbody of each member needs to be removed
          {

              RemoveRigidbodyNow(RigidbodyGroup[element].Member[x]);RemoveRigidbodyGroupNow();
              //invoke the rigidbody removal  func

          }  
      }


    });

    if (RigidbodyGroupToBeRemoved.length !== 0)//see whether any registered rigidbody group needs to be removed
    {
       RemoveRigidbodyGroupNow();
       //invoke the rigidbody group removal  func
    }



  };

  const P5_JS_Collision_Detection = new p5();//using p5 collision detection





  Game2DEngine.Rigidbody = RigidBody;

  })();
