//



class ObjectPooling
    {
    	constructor(){
            this.PoolObjects=[];
        	this.onCreate=null;//triggered on creating new sprite
            this.onReturn=null;//triggered on returning sprite to objpool arr
              this.onGet=null;//triggered once sprite is obtained either from objpool arr or newly created 
        }
        //create new sprite
        createSprite(){
        	let sprite = createRec(0x00ff00,5,5);
            console.log('Created a new Sprite');
            if (this.onCreate)//invoke callback func whenever a new sprite is created
            	this.onCreate(sprite);        
            return sprite;
        }
        //return a sprite to 'PoolObjects' arr, to be reused again
        returnSprite(sprite){
            console.log('Sprite removed');
        	this.PoolObjects.push(sprite);
            if (this.onReturn)
            	this.onReturn(sprite); 
        }
        //get a sprite from 'PoolObjects' arr, if its empty, then create a new sprite
    	getSprite(){
        	let obj_temp;
        	if (this.PoolObjects.length==0)//check if 'PoolObjects' arr is empty
            {	
            	obj_temp = this.createSprite();//if so, create a new sprite
            }
            else
            {
           	 	let index = this.PoolObjects.length-1;
            	obj_temp = this.PoolObjects[index];
            }       
            this.PoolObjects.pop();
            if (this.onGet)
            	this.onGet(obj_temp);  
                
            return obj_temp;
        }
    
    
    }
PIXI.ObjectPooling=ObjectPooling;
