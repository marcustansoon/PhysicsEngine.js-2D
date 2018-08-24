For Local system operation of testing HTML file:
CORS can be an issue when it comes to accessing and loading image from local file system via browser.
To bypass it, open cmd.exe
              Manually direct the cmd to your Google Chrome file directory (eg. cd C:\Program Files (x86)\Google\Chrome\Application )
              Then copy and paste the following text into the cmd, chrome.exe --allow-file-access-from-files --enable-precise-memory-info
              
              
Example of AnimatedSpriteManager and AnimatedSpriteTextureManager usage :-
http://jsfiddle.net/rh3eqdfk/193/

10/8/18
https://files.fm/u/jswh3ndu

Backbone script :
//Download stats.js from https://raw.githubusercontent.com/mrdoob/stats.js/master/build/stats.min.js

<!DOCTYPE html>
<html>
<head>
<script src='pixi.min.js'></script>
<script src='PIXI.ObjectPoolingV1.01.js'></script>
<script src='PIXI.KinematicMotionV1.01.js'></script>
<script src='PIXI.MultiAnimatedSprite.js'></script>
<script src='PIXI.AnimatedSpriteTextureManager.js'></script>
<script src='PIXI.AreaManager.js'></script>
<script src='Stats.js'></script>
</head>
<body>

</body>
<script>
    let stats=new Stats();document.body.appendChild(stats.dom);
	stats.dom.style.top = "300px";

	let renderer = new PIXI.autoDetectRenderer(250,250,{backgroundColor:0xffffff}),
    stage = new PIXI.Container(),
    OP = new PIXI.ObjectPooling(),
    KM = new PIXI.KinematicMotion(),
    AM = new PIXI.AreaManager();
    
    document.body.appendChild(renderer.view);
    
    let url="./Spritesheet/gnome.png";
    PIXI.loader
    .add(url)
    .load(setup);
    
    function setup(){   	
        let textures=new PIXI.AnimatedSpriteTextureManager(url,false,{row:7,col:5}).extractTexture();
        for (let x=0;x<1000;x++){
        	let player= OP.getAnimatedSprite(textures);
        	stage.addChild(player);
        	player.play();
        	player.animationSpeed=0.1;
        	player.scale.set(0.1);
            player.x=Math.random()*200;
            player.y=Math.random()*200;
        }        
        loop();
    }
    function loop(){
    	renderer.render(stage);
        requestAnimationFrame(loop);
        
        stats.update();
    }
</script>
</html>






<!DOCTYPE html>
<html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.8.1/pixi.min.js"></script>
<script src="https://rawgit.com/marcustansoon/PhysicsEngine.js-2D/master/LearnPixiJS/ObjectPooling/PIXI.ObjectPoolingV1.01.js"></script>
<script src="https://rawgit.com/marcustansoon/PhysicsEngine.js-2D/master/LearnPixiJS/AreaManager/PIXI.AreaManagerV1.03.js"></script>

<body>
</body>

<script>
	let renderer = new PIXI.autoDetectRenderer(250,250),
    stage = new PIXI.Container(),
    OP = new PIXI.ObjectPooling();
    
    document.body.appendChild(renderer.view);
    
    loop();
    
    function loop(){
    	renderer.render(stage);
        requestAnimationFrame(loop);
    }
    
    
    
</script>

</html>
<!DOCTYPE html>
<html>
<style>
*{
	margin:0;
    padding:0;
}
</style>
<script src="pixi.min.js"></script>
<script src="PIXI.ObjectPoolingV1.02.js"></script>
</script>
<script src="PIXI.MultiAnimatedSprite.js"></script>
<script src="PIXI.AnimatedSpriteTextureManager.js"></script>
<script src="PIXI.AreaManagerV1.03.js"></script>
<body>
</body>
<script>
function sign(x){
	return x?x<0?-1:1:0;
}
function updateMovement(entity){
    	entity.rotationAngle = 8;//reset to default value
    	if (entity.x>entity.target.x){
        	entity.x--;
            entity.rotationAngle>>=1;
        }
        else if (entity.x<entity.target.x){
        	entity.x++;
            entity.rotationAngle<<=1;
        }
    	if (entity.y>entity.target.y){
        	entity.y--;
            entity.rotationAngle>>=3;
        }
        else if (entity.y<entity.target.y){
        	entity.y++;
            entity.rotationAngle<<=3;
        }

        switch(entity.rotationAngle){//update the facing angle and 'attack' area pos
        	case (0)://up & left
            entity.rotation=upLeft;
            entity.area.attack.offsetY=-25;
            entity.area.attack.offsetX=-25;
            entity.area.damage.offsetY=-35;
            entity.area.damage.offsetX=-35;
            break;	
        	case (2)://up & right
            entity.rotation=upRight;
            entity.area.attack.offsetY=-25;
            entity.area.attack.offsetX=0;
            entity.area.damage.offsetY=-35;
            entity.area.damage.offsetX=-10;
            break;
            case (32)://down left
            entity.rotation=downLeft;
            entity.area.attack.offsetY=-5;
            entity.area.attack.offsetX=-25;
            entity.area.damage.offsetY=-15;
            entity.area.damage.offsetX=-35;
            break;
            case (128)://down right
            entity.rotation=downRight;
            entity.area.attack.offsetY=0;
            entity.area.attack.offsetX=0;
            entity.area.damage.offsetY=-10;
            entity.area.damage.offsetX=-10;         
            break;   
            case (64)://down
            entity.area.attack.offsetY=5;
            entity.area.attack.offsetX=-10;
            entity.area.damage.offsetY=-5;
            entity.area.damage.offsetX=-20;
            entity.rotation=down;
            break; 
            case (1)://up
            entity.rotation=up;
            entity.area.attack.offsetY=-25;
            entity.area.attack.offsetX=-10;
            entity.area.damage.offsetY=-35;
            entity.area.damage.offsetX=-20;
            break; 
            case (4)://left
            entity.rotation=left;
            entity.area.attack.offsetY=-10;
            entity.area.attack.offsetX=-25;
            entity.area.damage.offsetY=-20;
            entity.area.damage.offsetX=-35;
            break; 
            case (16)://right
            entity.rotation=right;
            entity.area.attack.offsetY=-10;
            entity.area.attack.offsetX=0;
            entity.area.damage.offsetY=-20;
            entity.area.damage.offsetX=-10;
            break; 
        }
    }
    //handling 'attack' area collision and entity's movement
	function attackHandler(group){
    	for (let loop=0,len=group.length;loop<len;loop++){
        //check if target exists OR entity is attacking
          if (group[loop].currentAnim=='attack'||!group[loop].target){
              continue;//if so, exit the func
          }
          if (AM.checkCollision(group[loop], 'attack', group[loop].target, 'base')){//detect collision between 'attack' area with enemy'base
                group[loop].currentAnim='attack';//if so, play attack anim
                group[loop].playAnimation(0,5);    
          }  
          else {//update movement when collision doesnt occur
              updateMovement(group[loop]);
          }
		}
    }
    //unnecessary to invoke it under loop func (60fps)
    //May be a prob when handling multiple targetable groups
	function detectionHandler(group1,group2){//handling the target detection
    	for (let loop1=0,len=group1.length;loop1<len;loop1++){
    	if (group1[loop1].currentAnim=='attack'){
			continue;
		}
        //getting enemy target
        for (let loop=0,length=group2.length;loop<length;loop++){
            	if (AM.checkCollision(group1[loop1], 'detectionRange', group2[loop], 'base')){
                	group1[loop1].target=group2[loop];
                    console.log('detected');
                  	if (group1[loop1].currentAnim!='walk'){
                      console.log('playing walk');
                      group1[loop1].currentAnim='walk';
                    }
                  return;//if target acquired, exit the func
                }
            }   
        console.log('null');
        group1[loop1].target=null;
          if (group1[loop1].currentAnim!='idle'){
              console.log('playing idle2');
              group1[loop1].currentAnim='idle';
          }
        }
    }
    
    function towerAttackHandler(){//create tower proj and check for enemy target within attackable range
    	if (AM.checkCollision(tower, 'attack', p2, 'base')){
        	let proj = OP.getCustom('arrow');
            //init 
        	proj.target = p2;//target enemy
            
            proj.targetX = p2.x;//destination pos
            proj.targetY = p2.y;
            
            proj.x=tower.x;//init pos/spawn pos
            proj.y=tower.y;
            
            let disX=p2.x-proj.x,
            disY=p2.y-proj.y;
            
            proj.count=0;//reset to default
            proj.rotationIncrement=0.005;
            proj.vX=disX/20>>0;//represent x and y increment speed
            proj.vY=disY/20>>0;//in this case,proj speed will be 20
            
            //make proj face target at the right angle
            if (sign(disY)==-1&&sign(disX)==1){
              proj.rotation=downLeft;
            }
            else if (sign(disY)==-1&&sign(disX)==-1){
            proj.rotation=downRight;proj.rotationIncrement*=-1;
            }
            else if (sign(disY)==1&&sign(disX)==-1){
            proj.rotation=upRight;proj.rotationIncrement*=-1;
            }
            else if (sign(disY)==1&&sign(disX)==1){
            proj.rotation=upLeft;
            }

            singleProjG.push(proj);
            stage.addChild(proj);
        }
    }
    //prob!!
    function updateAreaTargetProjMovement(enemyG){//area damage type proj
    	let temp,len=areaTargetProjG.length-1;
    	for (let loop=len;loop>=0;loop--){    
        	temp=areaTargetProjG[loop];
            temp.x+=temp.vX;
            temp.y+=temp.vY;
            temp.rotation+=temp.rotationIncrement;
            temp.count++;
            if (temp.count>22){
            	for (let index=0,eGLen=enemyG.length;index<eGLen;index++){
                  if (AM.checkCollision(temp, 'damage', enemyG[index], 'base')){
                      console.log('proj area damage');
                  }    
                }
                OP.returnGraphic(temp);
                areaTargetProjG.splice(loop,1);
                stage.removeChild(temp);
           	}
		}
    }
    //control single targeted proj movement and handling damage target
    //note: May miss target when enemy are too far
    function updateSingleTargetProjMovement(pG){//single damage type proj
    	let temp,len=pG.length-1;
    	for (let loop=len;loop>=0;loop--){    
        	temp=pG[loop];
            temp.x+=temp.vX;//update its mvoement
            temp.y+=temp.vY;
            temp.rotation+=temp.rotationIncrement;//make it rotates
            temp.count++;//increment its move count
            if (temp.count>22){//when move count exceed 22, detect damage collision and remove it
            	if (AM.checkCollision(temp, 'damage', temp.target, 'base')){
            		console.log('proj damage');
            	}    
                OP.returnCustom(temp,"arrow");//return proj to OP
                pG.splice(loop,1);//remove it from its projGroup
                stage.removeChild(temp);//remove child from stage
           	}
		}
    }
    function createEntity(){
    	let obj = new PIXI.MultiAnimatedSprite(entityTextures);    
      	obj.anchor.set(0.5,0.5);//required
        obj.playAnimation(5,8);//play walk
      	obj.animationSpeed=0.1;//set anim speed
        
        //add areas and essential properties
        AM.addArea('detectionRange',{w:120,h:120,offsetX:-60,offsetY:-60,active:true},obj,true,0xbaff75,0.2,stage);   
        AM.addArea('base',{w:30,h:30,offsetX:-15,offsetY:-15,active:true},obj,true,0x71a4fc,0.2,stage);
        AM.addArea('attack',{w:10,h:10,offsetX:-15,offsetY:5,active:true},obj,true,0xf46b42,0.2,stage); 
        AM.addArea('damage',{w:40,h:40,offsetX:-15,offsetY:5,active:true},obj,true,0xff6ff2,0.2,stage); 
        obj.currentAnim='idle';//store current animation state
        obj.target=null;//store enemy target
        obj.rotationAngle=0;
        
        console.log('c entity');
        return obj;
    }
    function createProj(){
		let obj = new PIXI.Sprite(arrowTexture);
        obj.anchor.set(0.5);
        AM.addArea('damage',projArea,obj);
        obj.target =null;
        obj.targetX=0;
        obj.targetY=0;
        obj.count=0;
        obj.rotationIncrement=0;
        obj.vX=0;
        obj.vY=0;
        obj.scale.set(1.5);
        console.log('c proj');
        return obj;
	}
    
	let renderer = new PIXI.autoDetectRenderer(250,250,{backgroundColor:0xffffff}),
    stage = new PIXI.Container(),
    OP = new PIXI.ObjectPooling(),
    AM = new PIXI.AreaManager(),
    url2="TcOBlUV.png",url3="arrow.png",
    entityTextures,arrowTexture,
    p1,
    p2,p2_2,tower,singleProjG=[],areaTargetProjG =[],projArea={w:20,h:20,offsetX:-10,offsetY:-10,active:true},
    G1=[],G2=[]; 
    OP.createCustom("entity",{onCreate:createEntity}); 
    OP.createCustom("arrow",{onCreate:createProj}); 
    stage.alpha=.1;
    const upLeft=2,downLeft=1,down=0,upRight=4,downRight=5.6,up=3.14,left=1.57,right=4.7;
	document.body.appendChild(renderer.view);

PIXI.loader
.add(url2)
.add(url3)
.load(start);
	  
	function start(){    
      arrowTexture = PIXI.loader.resources[url3].texture;
      entityTextures = new PIXI.AnimatedSpriteTextureManager(url2,false,{row:1,col:8}).extractTexture();
      p1 = OP.getCustom('entity');//get entity
      stage.addChild(p1);
      p1.x=0;//init loc
      p1.y=0;
      G1.push(p1);
      p1.onLoop=function(){		
          if (p1.currentAnim=='attack'){
          console.log('playing idle');
          p1.currentAnim='idle';
          p1.playAnimation(5,8);//play walk      
              if (AM.checkCollision(p1, 'damage', p1.target, 'base')){
                  console.log('atk damage');           
              }
          }
      }      
      p2 = OP.getCustom('entity');
      G2.push(p2);
      p2.x=125;
      p2.y=125;
      p2_2=OP.getCustom('entity');
      p2_2.x=150;p2_2.y=130;stage.addChild(p2_2);
      G2.push(p2_2);
      stage.addChild(p2); 
      
      //create tower
      tower = OP.getGraphic('rect',0x000f0f,true,30,30);
      AM.addArea('attack',{w:150,h:150,offsetX:-75,offsetY:-75,active:true},tower,false,0xbaff75,0.5,stage);   
      AM.addArea('base',{w:20,h:20,offsetX:-10,offsetY:-10,active:true},tower,false,0xbaff75,0.5,stage);
      
      stage.addChild(tower);
      tower.pivot.set(15);
      //let grey=new PIXI.Sprite.fromImage('gray.png');
      //stage.addChild(grey);
     	loop();  
    }   
    document.onkeydown=function(e){
    	console.log(e.keyCode);        
        if (e.keyCode==65){
        	p2.x-=3;          
        }
        if (e.keyCode==68){
        	p2.x+=3;
        }
        if (e.keyCode==83){
        	p2.y+=3;           
        }
        if (e.keyCode==87){
        	p2.y-=3;
        }
        if (e.keyCode==77){
        	console.log(p1.animSet);
        }
        if (e.keyCode==76){
        	clearInterval(detectionInterval);
        }
        if (e.keyCode==66){
        	console.log('building');
            //let area = OP.getGraphic('rect',0x000000,true,50,50);
            //stage.addChild(area);
            getBuilding();
        }
    }
    let isBuilding=false,previewBuilding=null,tower1=[0,0,0,1],
    worldOccupiedLoc=new Set();
    function getBuilding(){//create type of tower1
    	let area = OP.getGraphic('rect',0x000000,true,25,50);
        area.space=tower1;
        stage.addChild(area);
        previewBuilding=area;
        area=null;
        
        
    }
    function updatePreviewBuildingPos(){

    }
    document.onmousemove=function(e){
		//p1.x=e.clientX;
        //p1.y=e.clientY;
        if (previewBuilding){
        	previewBuilding.x=(e.clientX/25>>0)*25;
            previewBuilding.y=(e.clientY/25>>0)*25;
        }
	}
    document.onmousedown=function(e){
		//p1.x=e.clientX;
        //p1.y=e.clientY;
        if (previewBuilding){  	
        	for (let index=0,x,y,text,len=previewBuilding.space.length;index<len;index+=2){
            	
            	x=previewBuilding.x+previewBuilding.space[index];
                y=previewBuilding.y+previewBuilding.space[index+1];
                text=x+','+y;
                if (worldOccupiedLoc.has(text)){
                	console.log('Space Occupied');
                    return;
                }
            	worldOccupiedLoc.add(text);
            }
            
            console.log(worldOccupiedLoc);
            previewBuilding=null;
        }
	}
    document.onkeyup=function(e){  
    
    }
    function loop(){
    	renderer.render(stage);
        requestAnimationFrame(loop);
        AM.updateVisibleAreaPosition();
        //let t1=performance.now();       
        attackHandler(G1);
        updateSingleTargetProjMovement(singleProjG);
        updateAreaTargetProjMovement(G2);
        //console.log(performance.now()-t1);
    }
    function assembled(){
    	detectionHandler(G1,G2);
        towerAttackHandler();
    }
    let detectionInterval=setInterval(assembled,1000);   
    
    
   
</script>

</html>

