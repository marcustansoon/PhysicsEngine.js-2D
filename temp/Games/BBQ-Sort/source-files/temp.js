<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PixiJS Playground</title>
    <meta charset="UTF-8" />
    <!-- Load PixiJS library -->
    <script src="https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/source-files/pixi.min.js"></script>
    <script src="https://unpkg.com/@pixi/sound/dist/pixi-sound.js"></script>
    <script src="https://pixijs.io/gif/dist/pixi-gif.js"></script>
    <style>
      body,
      html {
        margin: 0;
        padding: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body></body>
  <script>
  (async () => {
  // Create a new application
  const app = new PIXI.Application();

  // Initialize the application
  await app.init({
    background: "#000",
    resizeTo: window
  });

  // Append the application canvas to the document body
  document.body.appendChild(app.canvas);

 
  let urlPath =
    "https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/firework-2.gif";
  let gifs = {};
  fetch(urlPath)
    .then((res) => res.arrayBuffer())
    .then(PIXI.gif.AnimatedGIF.fromBuffer)
    .then((image) => {
      console.log(image);
      app.stage.addChild(image);
      gifs.custom = image;
      setTimeout(() => {
        gifs.custom.stop();
      }, 5000);
    });

  
  
  fetch("https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/analog-appliance-button-7.mp3").then(res => res.arrayBuffer()).then(buffer => {
    
    
  PIXI.sound.add('my-sound', {source:buffer});
   PIXI.sound.play('my-sound', {loop:true})
    setTimeout(()=>PIXI.sound.stop('my-sound'), 6000)
  })
  
  fetch("https://cdn.jsdelivr.net/gh/marcustansoon/PhysicsEngine.js-2D@master/temp/Games/BBQ-Sort/temp/banner-4.png").then(res => res.blob()).then(blob => {
   var reader = new FileReader();
      reader.onload =  async function test(){
      
        console.log(this.result) 
        let resourcesToBeLoad = [{
          alias: "firework",
          src: this.result
        },{
          alias: "firework2",
          src: this.result
        }];


  		function progress(x){console.log(x);}
        
        await PIXI.Assets.load(
          resourcesToBeLoad,
          progress
        );
        console.log('done load')
        let s = new PIXI.Sprite(PIXI.Assets.get('firework2'))
      	app.stage.addChild(s)
      }
      reader.readAsDataURL(blob);
  })
  

  // Listen for animate update

  app.ticker.add((time) => {});
})();

  
  </script>
</html>
