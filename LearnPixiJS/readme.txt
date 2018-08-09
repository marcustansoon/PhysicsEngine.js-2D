For Local system operation of testing HTML file:
CORS can be an issue when it comes to accessing and loading image from local file system via browser.
To bypass it, open cmd.exe
              Manually direct the cmd to your Google Chrome file directory (eg. cd C:\Program Files (x86)\Google\Chrome\Application )
              Then copy and paste the following text into the cmd, chrome.exe --allow-file-access-from-files --enable-precise-memory-info
              
              
Example of AnimatedSpriteManager and AnimatedSpriteTextureManager usage :-
http://jsfiddle.net/rh3eqdfk/193/




Backbone script :

<!DOCTYPE html>
<html>
<head>
<script src='pixi.min.js'></script>
<script src='PIXI.ObjectPoolingV1.01.js'></script>
<script src='PIXI.KinematicMotionV1.01.js'></script>
<script src='PIXI.MultiAnimatedSprite.js'></script>
<script src='PIXI.AnimatedSpriteTextureManager.js'></script>
<script src='PIXI.AreaManager.js'></script>
</head>
<body>

</body>
<script>
	let renderer = new PIXI.autoDetectRenderer(250,250,{backgroundColor:0xffffff}),
    stage = new PIXI.Container(),
    OP = new PIXI.ObjectPooling(),
    KM = new PIXI.KinematicMotion(),
    AM = new PIXI.AreaManager();
    
    document.body.appendChild(renderer.view);
    
    let url="image.png";
    PIXI.loader
    .add(url)
    .load(setup);
    
    function setup(){
    	
        let textures=new PIXI.AnimatedSpriteTextureManager(url,false,{row:7,col:5}).extractTexture();
        
        let player= OP.getAnimatedSprite(textures);
        stage.addChild(player);
        player.play();
        player.animationSpeed=0.1;
        loop();
    }
    function loop(){
    	renderer.render(stage);
        requestAnimationFrame(loop);
    }
</script>
</html>
