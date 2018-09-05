//https://rawgit.com/marcustansoon/PhysicsEngine.js-2D/master/LearnPixiJS/AreaManager/PIXI.AreaManagerV1.05.js
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
    //store areas shown
    this.visibleAreaG = []; //for testing/display purpose
    if (PIXI.ObjectPooling)
      this.OP = new PIXI.ObjectPooling();
    else
      console.log("ObjectPooling.js not found");
  }
  addArea(aname, properties, sprite, showArea, color, alpha, stage) { //properties->{w:w,h:h,offsetX:offsetX,offsetY:offsetY,active:bool}
    if (!sprite.area)
      sprite.area = {};
    sprite.area[aname] = properties;

    if (showArea) { //for testing/display purpose
      let temp = this.OP.getGraphic('rect', color, true, properties.w, properties.h);
      this.visibleAreaG.push(temp);
      sprite.area[aname].areaShown = temp;
      temp.follow = sprite;
      temp.alpha = alpha;
      temp.areaName = aname;
      stage.addChild(temp);
    }
  }
  removeArea(aname, sprite) { //remove a registered area from a sprite
    delete sprite.area[aname];
  }
  showAllVisibleArea(boolean) { //show all visible areas,boolean->true to show,false to hide visible area
    for (let loop = 0, len = this.visibleAreaG.length; loop < len; loop++) {
      this.visibleAreaG[loop].renderable = boolean;
    }
  }
  showVisibleArea(aname,boolean,sprite){//conf the visibility of a specified area for a sprite
    sprite.area[aname].areaShown.renderable=boolean;
  }
  destroyVisibleArea( aname,sprite, stage) {//destroy a specified visible area
    let temp = sprite.area[aname].areaShown,
      index = this.visibleAreaG.indexOf(temp);
    this.visibleAreaG.splice(index, 1);
    stage.removeChild(temp);
    delete sprite.area[aname].areaShown;
    temp.destroy({
      children: true,
      texture: true,
      baseTexture: true
    });

  }

  //update the pos of the areas shown
  updateVisibleAreaPosition() { //for testing/display purpose
    for (let loop = 0, len = this.visibleAreaG.length; loop < len; loop++) {
      this.visibleAreaG[loop].x = this.visibleAreaG[loop].follow.x + this.visibleAreaG[loop].follow.area[this.visibleAreaG[loop].areaName].offsetX;
      this.visibleAreaG[loop].y = this.visibleAreaG[loop].follow.y + this.visibleAreaG[loop].follow.area[this.visibleAreaG[loop].areaName].offsetY;
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
          if (member2.area[area2].active && this.checkCollision(member1, area1, member2, area2)) //check if area2 of member2 is active
          {
            /*
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
            }*/

            callback(member1, member2);

          }
          //});
        }
      }
      //});
    }
  }
  checkCollision(member1, area1, member2, area2) //Check whether area1 of group1 is colliding with area2 of group2
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
        //callback(member1,member2); //invoke the callback func with the collider as the parameter
        return true;
      }
    }

  }
  checkPointCollision(x,y,entity,aname){
    let temp = entity.area[aname],
    enX = entity.x + temp.offsetX,
    enY = entity.y + temp.offsetY;
    
    return  x >= enX &&
            x <= enX + temp.w &&
            y >= enY &&
            y <= enY + temp.h;
  }
}
PIXI.AreaManager = AreaManager;
