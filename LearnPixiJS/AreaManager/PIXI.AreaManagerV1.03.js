//https://rawgit.com/marcustansoon/PhysicsEngine.js-2D/master/LearnPixiJS/AreaManager/PIXI.AreaManagerV1.03.js
//class for handling the creating,and handling area properties including checking for area collision between two parties

//Methods added :    createArea(AREA_NAME,PROPERTIES)           -> create a new area
                                                         //PROPERTIES -> offsetX,offsetY,w,h
//            destroyArea(AREA_NAME)                     -> destroy a created area (note: properties attached to sprite (related to this area) are not deleted automatically. Need to delete it manually,by invoking removeAreaFromChild method)
//            addAreaToChild(AREA_NAME,SPRITE)           -> attach an area to a sprite
//            removeAreaFromChild(AREA_NAME,SPRITE)      -> //remove an attached area from a sprite,by deleting that area-related properties
//            clearAreasFromChild(Area_NAME,sprite)       -> remove all attached areas from a sprite
//            checkCollision(group1,area1,group2,area2,callback)   -> Check whether area1 of group1 is colliding with area2 of group2,if so ,invoke callback parameter (callback has to be function)    

//Properties added/accesible
//**The following properties area EDITABLE
//        sprite.area.[AREA_NAME].active=true;    ->for determining whether a particular area is collideable
//        sprite.area.[AREA_NAME].offsetX,offsetY,w,h    ->for storing properties of an area 

  class AreaManager {
    constructor() {
      this.visibleAreaG=[];
    }   
    addArea(aname,properties,sprite,boolean,stage){//properties->{w:w,h:h,offsetX:offsetX,offsetY:offsetY,active:bool}
      if (!sprite.area)
        sprite.area = {};
      sprite.area[aname]=properties;
      
      if (boolean){
        let temp = OP.getGraphic('rect',0x0f0f0f,true,properties.w,properties.h);
        this.visibleAreaG.push(temp); 
        temp.follow=sprite;
        stage.addChild(temp);
      }
    }   
    removeArea(aname, sprite) { //remove a specified area from a sprite
      delete sprite.area[aname];
    }
    updateVisibleAreaPosition(){
      let len = this.visibleAreaG.length;
      for (let loop=0;loop<len;loop++){
        this.visibleAreaG[loop].x=this.visibleAreaG[loop].follow.x+this.visibleAreaG[loop].follow.offsetX;
        this.visibleAreaG[loop].y=this.visibleAreaG[loop].follow.y+this.visibleAreaG[loop].follow.offsetY;
      }
    }
    checkGroupCollision(group1, area1, group2, area2, callback) //Check whether area1 of group1 is colliding with area2 of group2
    {
      let member1, member2, len1 = group1.length,
        len2 = group2.length;
      for (let loop = 0; loop < len1; loop++) {
        member1 = group1[loop];
        //group1.forEach((member1)=>{//pick every member of group1
        if (member1.area[area1].active) //check if area1 for member1 is active
        {
          for (let loop2 = 0; loop2 < len2; loop2++) {
            member2 = group2[loop2];
            //group2.forEach((member2)=>{
            if (member2.area[area2].active) //check if area2 of member2 is active
            {
              let x1 = member1.x + member1.area[area1].offsetX,
                y1 = member1.y + member1.area[area1].offsetY,
                x2 = member2.x + member2.area[area2].offsetX,
                y2 = member2.y + member2.area[area2].offsetY;

              //check for collision between two areas
              if (x1 + member1.area[area1].w >= x2 && // r1 right edge past r2 left
                x1 <= x2 + member2.area[area2].w && // r1 left edge past r2 right
                y1 + member1.area[area1].h >= y2 && // r1 top edge past r2 bottom
                y1 <= y2 + member2.area[area2].h) {
                callback(member1, member2); //invoke the callback func with the collider as the parameter
              }
            }
            //});
          }
        }
        //});
      }
    }
    checkCollision(member1, area1, member2, area2, callback) //Check whether area1 of group1 is colliding with area2 of group2
    {

      if (member1.area[area1].active && member2.area[area2].active) //check if both areas for both members are active
      {
        let x1 = member1.x + member1.area[area1].offsetX,
          y1 = member1.y + member1.area[area1].offsetY,
          x2 = member2.x + member2.area[area2].offsetX,
          y2 = member2.y + member2.area[area2].offsetY;

        //check for collision between two areas
        if (x1 + member1.area[area1].w >= x2 && // r1 right edge past r2 left
          x1 <= x2 + member2.area[area2].w && // r1 left edge past r2 right
          y1 + member1.area[area1].h >= y2 && // r1 top edge past r2 bottom
          y1 <= y2 + member2.area[area2].h) {
          callback(member1,member2); //invoke the callback func with the collider as the parameter
        }
      }

    }
  }
  PIXI.AreaManager = AreaManager;
