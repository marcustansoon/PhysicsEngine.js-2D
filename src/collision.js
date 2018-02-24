let Game={};

(function()
{
  "use strict";
  function Collision(){}

  Collision.prototype.PointRect(Point,Rect){
  //function PointRectCollision(Point,Rect){
    return Point.desx>Rect.left() && Point.desx<Rect.right() && Point.desy>Rect.top() && Point.desy<Rect.bottom();
  }

  Collision.prototype.CircleCircle(Circle1,Circle2,CanMoveThrough)//left as movable obj, right as static obj
  //function CircleCircleCollision(Circle1,Circle2,CanMoveThrough)//left as movable obj, right as static obj
  {
    let totalradius=Circle1.radius()+Circle2.radius(),
    dx=Circle1.centerx()-Circle2.centerx(),
    dy = Circle1.centery()-Circle2.centery(),
    distancebetweenCircle=Math.sqrt(dx*dx + dy*dy);





    if (distancebetweenCircle<totalradius && !CanMoveThrough)
      {
        let overlap = totalradius-distancebetweenCircle;

        Circle1.desx+=overlap/distancebetweenCircle * dx;
        Circle1.desy+=overlap/distancebetweenCircle * dy;
      }

    return distancebetweenCircle<totalradius;
  }

  Collision.prototype.RectRect(Rect1,Rect2,CanMoveThrough)//left as movable obj, right as static obj
  //function RectRectCollision(Rect1,Rect2,CanMoveThrough)//left as movable obj, right as static obj
  {
    let totalHalfWidth = Rect1.deswidth/2 + Rect2.deswidth/2 ;
    let totalHalfHeight = Rect1.desheight/2 + Rect2.desheight/2 ;
    let dx=Rect1.centerx()-Rect2.centerx();
    let dy=Rect1.centery()-Rect2.centery();

    if (!CanMoveThrough)
    {
    if (totalHalfWidth>Math.abs(dx)&&totalHalfHeight>Math.abs(dy))
      {
        let overlapx=totalHalfWidth-Math.abs(dx);
        let overlapy=totalHalfHeight-Math.abs(dy);



        if (overlapy>overlapx)
          {
            if (dx<0)
              {
                Rect1.desx-=overlapx;
                //context.fillText('Right',25,45);//Collision on right side
              }
            else
              {
                Rect1.desx+=overlapx;
                //context.fillText('Left',25,45);//Collision on left side
              }
          }
        else 
          {
             if (dy<0)
              {
                Rect1.desy-=overlapy;
                //context.fillText('Bottom',25,45);//Collision on bottom side
              }
            else
              {
                Rect1.desy+=overlapy;
                //context.fillText('Top',25,45);//Collision on top side
              }
          }

      }
    }
    return totalHalfWidth>Math.abs(dx)&&totalHalfHeight>Math.abs(dy);


  }


  Game.Collision=Collision;
})();
