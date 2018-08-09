////https://rawgit.com/marcustansoon/PhysicsEngine.js-2D/master/LearnPixiJS/ObjectPooling/PIXI.ObjectPoolingV1.01.js
//Class Function : Enable PIXI object to be reuseable

//method :    createSprite(TEXTURE)                 -> create new sprite (automatically triggered on demand),TEXTURE is type of PIXI texture
//              createAnimatedSprite(TEXTURES)      -> NOTE: TEXTURES are of array data type,consisting only PIXI textures (NOT texture URL)
//              createGraphic(w,h,COLOR)
//            getSprite(TEXTURES)      -> get a sprite from 'PoolObjects' arr, if its empty, then create a new sprite (trigger createSprite method)
//            getAnimatedSprite(TEXTURES)  
//            getGraphic(TEXTURES)  
//            returnSprite(SPRITE)        -> return a SPRITE to 'PoolObjects' arr, to be reused again later
//            returnAnimatedSprite(SPRITE) 
//            returnGraphic(SPRITE)

//properties added/accesible
//Note : the following properties are added to the main instantiation obj
//this.Sprites=[];      //for storing the reusable objects
//this.animatedSprites=[];
//this.Graphics=[];

//editable//attachable callback func
//this.onCreate(SPRITE/GRAPHICS/ANIM, NUM)=null;           //triggered on creating new sprite
//this.onReturn(SPRITE/GRAPHICS/ANIM, NUM)=null;           //triggered on returning sprite to objpool arr
//this.onGet(SPRITE/GRAPHICS/ANIM, NUM)=null;              //triggered once sprite is obtained either from objpool arr or newly created 
//this.onRetrive(SPRITE/GRAPHICS/ANIM, NUM)=null;  
//where NUM used as an indicator (0 -> Sprite, 1 -> animatedSprite, 2 -> Graphic Rect)

class ObjectPooling
    {
    	constructor(){
            this.Sprites=[];//indicated by 0
            this.animatedSprites=[];//indicated by 1
            this.Graphics=[];//indicated by 2
        	this.onCreate=null;//triggered on creating new sprite
            this.onRetrieve=null;//triggered on creating new sprite
            this.onReturn=null;//triggered on returning sprite to objpool arr
            this.onGet=null;//triggered once sprite is obtained either from objpool arr or newly created 
        }
        //create new sprite (automatically triggered on demand)
        createGraphic(w,h,color){
        	let graphic = new PIXI.Graphics();
            graphic.beginFill(color);
            graphic.drawRect(0,0,w,h);
            graphic.endFill();
            console.log('Created a new Graphic Rect');       
            return graphic;
        }
        createSprite(texture){       	
        	let sprite = new PIXI.Sprite(texture);
            console.log('Created a new Sprite');       
            return sprite;
        }
        createAnimatedSprite(textures){        	
        	let sprite = new PIXI.extras.AnimatedSprite(textures);
            console.log('Created a new Animated Sprite');       
            return sprite;
        }
        //return a sprite to 'PoolObjects' arr, to be reused again
        returnGraphic(graphic){
            console.log('Graphic removed');
        	this.Graphics.push(graphic);
            if (this.onReturn)
            	this.onReturn(graphic,2); 
        }
        returnSprite(sprite){
            console.log('Sprite removed');
        	this.Sprites.push(sprite);
            if (this.onReturn)
            	this.onReturn(sprite,0); 
        }
        returnAnimatedSprite(sprite){
            console.log('Animated Sprite removed');
        	this.animatedSprites.push(sprite);
            if (this.onReturn)
            	this.onReturn(sprite,1); 
        }
        //get a sprite from 'PoolObjects' arr, if its empty, then create a new sprite (trigger createSprite method)
    	getGraphic(w,h,color){
        	let obj_temp;
        	if (this.Graphics.length==0)//check if 'PoolObjects' arr is empty
            {	
            	obj_temp = this.createGraphic(w,h,color);//if so, create a new sprite
                if (this.onCreate)//invoke callback func whenever a new sprite is created
            	    this.onCreate(obj_temp,2);                 
            }
            else
            {
           	 	let index = this.Graphics.length-1;
            	obj_temp = this.Graphics[index];
                if (this.onRetrieve)
                    this.onRetrieve(obj_temp,2);    
            }       
            this.Graphics.pop();
            if (this.onGet)//invoke onGet callback func
            	this.onGet(obj_temp,2);
                
            return obj_temp;
        }
        getSprite(texture,boolean){
        	let obj_temp;
        	if (this.Sprites.length==0)//check if 'PoolObjects' arr is empty
            {	
            	obj_temp = this.createSprite(texture);//if so, create a new sprite
                if (this.onCreate)//invoke callback func whenever a new sprite is created
            	    this.onCreate(obj_temp,0); 
            }
            else
            {
           	 	let index = this.Sprites.length-1;
            	obj_temp = this.Sprites[index];
                if (boolean)//check if theres a need to overwrite the texture
                    obj_temp.textures=textures;
                if (this.onRetrieve)
                    this.onRetrieve(obj_temp,0);   
            }       
            this.Sprites.pop();
            if (this.onGet)//invoke onGet callback func
            	this.onGet(obj_temp,0);  
                
            return obj_temp;
        }
    	getAnimatedSprite(textures,boolean){
        	let obj_temp;
        	if (this.animatedSprites.length==0)//check if 'PoolObjects' arr is empty
            {	
            	obj_temp = this.createAnimatedSprite(textures);//if so, create a new sprite
                if (this.onCreate)//invoke callback func whenever a new sprite is created
            	    this.onCreate(obj_temp,1); 
            }
            else
            {
           	 	let index = this.animatedSprites.length-1;
            	obj_temp = this.animatedSprites[index];
                if (boolean)//check if theres a need to overwrite the texture
                    obj_temp.textures=textures;
                if (this.onRetrieve)
                    this.onRetrieve(obj_temp,1);
            }       
            this.animatedSprites.pop();
            if (this.onGet)//invoke onGet callback func
            	this.onGet(obj_temp,1);  
                
            return obj_temp;
        }
    
    }
PIXI.ObjectPooling=ObjectPooling;
