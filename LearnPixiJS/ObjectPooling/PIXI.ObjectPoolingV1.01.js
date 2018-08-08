class ObjectPooling
    {
    	constructor(){
            this.Sprites=[];//0
            this.animatedSprites=[];//1
            this.Graphics=[];//2
        	this.onCreate=null;//triggered on creating new sprite
            this.onReturn=null;//triggered on returning sprite to objpool arr
            this.onGet=null;//triggered once sprite is obtained either from objpool arr or newly created 
        }
        //create new sprite (automatically triggered on demand)
        createGraphic(w,h,color){
        	let graphic = new PIXI.Graphics();
            graphic.beginFill(color);
            graphic.drawRect(0,0,w,h);
            graphic.endFill();
            console.log('Created a new Graphics');
            if (this.onCreate)//invoke callback func whenever a new sprite is created
            	this.onCreate(graphics,2);        
            return graphics;
        }
        createSprite(texture){
        	
        	let sprite = new PIXI.Sprite(texture);
            console.log('Created a new Sprite');
            if (this.onCreate)//invoke callback func whenever a new sprite is created
            	this.onCreate(sprite,0);        
            return sprite;
        }
        createAnimatedSprite(textures){
        	
        	let sprite = new PIXI.extras.AnimatedSprite(textures);
            console.log('Created a new Animated Sprite');
            if (this.onCreate)//invoke callback func whenever a new sprite is created
            	this.onCreate(sprite,1);        
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
            	this.onReturn(sprite); 
        }
        returnAnimatedSprite(sprite){
            console.log('Animated Sprite removed');
        	this.animatedSprites.push(sprite);
            if (this.onReturn)
            	this.onReturn(sprite); 
        }
        //get a sprite from 'PoolObjects' arr, if its empty, then create a new sprite (trigger createSprite method)
    	getGraphic(w,h,color){
        	let obj_temp;
        	if (this.Graphics.length==0)//check if 'PoolObjects' arr is empty
            {	
            	obj_temp = this.createGraphic(w,h,color);//if so, create a new sprite
            }
            else
            {
           	 	let index = this.Graphics.length-1;
            	obj_temp = this.Graphics[index];
            }       
            this.Graphics.pop();
            if (this.onGet)//invoke onGet callback func
            	this.onGet(obj_temp);  
                
            return obj_temp;
        }
        getSprite(texture){
        	let obj_temp;
        	if (this.Sprites.length==0)//check if 'PoolObjects' arr is empty
            {	
            	obj_temp = this.createSprite(texture);//if so, create a new sprite
            }
            else
            {
           	 	let index = this.Sprites.length-1;
            	obj_temp = this.Sprites[index];
            }       
            this.Sprites.pop();
            if (this.onGet)//invoke onGet callback func
            	this.onGet(obj_temp);  
                
            return obj_temp;
        }
    	getAnimatedSprite(textures){
        	let obj_temp;
        	if (this.animatedSprites.length==0)//check if 'PoolObjects' arr is empty
            {	
            	obj_temp = this.createAnimatedSprite(textures);//if so, create a new sprite
            }
            else
            {
           	 	let index = this.animatedSprites.length-1;
            	obj_temp = this.animatedSprites[index];
            }       
            this.animatedSprites.pop();
            if (this.onGet)//invoke onGet callback func
            	this.onGet(obj_temp);  
                
            return obj_temp;
        }
    
    }
PIXI.ObjectPooling=ObjectPooling;
