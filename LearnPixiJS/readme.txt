https://www.w3schools.com/code/tryit.asp?filename=FVG427WY84YB
https://www.w3schools.com/code/tryit.asp?filename=FVGVCNYIMKGD
For Local system operation of testing HTML file:
CORS can be an issue when it comes to accessing and loading image from local file system via browser.
To bypass it, open cmd.exe
              Manually direct the cmd to your Google Chrome file directory (eg. cd C:\Program Files (x86)\Google\Chrome\Application )
              Then copy and paste the following text into the cmd, chrome.exe --allow-file-access-from-files --enable-precise-memory-info
              
              
Example of AnimatedSpriteManager and AnimatedSpriteTextureManager usage :-
http://jsfiddle.net/rh3eqdfk/193/
http://jsfiddle.net/oqy7jedL/show
https://www.w3schools.com/code/tryit.asp?filename=G0U2WL54N3RS 12/12/2019
https://www.w3schools.com/code/tryit.asp?filename=G0UDA0SF99PO

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

https://ufile.io/xik2b
