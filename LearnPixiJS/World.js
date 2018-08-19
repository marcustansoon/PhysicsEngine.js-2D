class World{
    	constructor(){
        	this.worldMatrix = null;//storing world matrix (virtual array)
            this.worldMatrixDivision=1;//indicate numb of pixel data represented in each of the virual array data
            
            //testing purpose
            this.worldGridG=[];
            this.worldContentG=null;
        }
        //create world matrix arr
        createWorld(matrix,division){
        	this.worldMatrix=matrix;
            this.worldMatrixDivision=division;
            
            console.log("Matrix Dimension X COL",this.worldMatrix[0].length);
            console.log("Matrix Dimension Y ROW",this.worldMatrix.length);
        }
        //draw world matrix grid (called once)
        drawWorldGrid(stage){
        	let temp=null,height=this.worldMatrix.length*this.worldMatrixDivision,
            width=this.worldMatrix[0].length*this.worldMatrixDivision;
            
			for (let x=0;x<this.worldMatrix[0].length;x++){
            	temp = OP.getGraphic('rect',0xfff000,2,height);        
                temp.x = (x+1)*this.worldMatrixDivision;
                console.log(temp.x);
                stage.addChild(temp);
                this.worldGridG.push(temp);
            }
            
            for (let y=0;y<this.worldMatrix.length;y++){
            	temp = OP.getGraphic('rect',0xfff000,width,2);
                stage.addChild(temp);
                temp.y = (y+1)*this.worldMatrixDivision;
                this.worldGridG.push(temp);
            }
            
            
        }
        //draw world matrix internal content (called once)
        drawWorldGridContent(stage){
        	let temp=null,color=null;
            this.worldContentG=[];

            //duplicate dummy array with  its size same as the world matrix size
            for (let y=0;y<this.worldMatrix.length;y++)
            {
              this.worldContentG[y]=[];
              for (let x=0;x<this.worldMatrix[y].length;x++){
                this.worldContentG[y].push(null);
              }
            }  
            
            //draw world matrix grid 
        	for (let y=0;y<this.worldMatrix.length;y++){
              for (let x=0;x<this.worldMatrix[0].length;x++){  
              	  color=this.worldMatrix[y][x]==1?0xf72e4d:0x47ff6c;
                  temp = OP.getGraphic('rect',color,this.worldMatrixDivision-2,this.worldMatrixDivision-2);
                  temp.x=x*this.worldMatrixDivision+1;
                  temp.y=y*this.worldMatrixDivision+1;
                  this.worldContentG[y][x]=temp;
                  stage.addChild(temp);
              }
           	}
                     
        }
        //update world matrix content representation
        updateWorldGridContent(){
            let color=null;   
        	for (let y=0;y<this.worldMatrix.length;y++){
              for (let x=0;x<this.worldMatrix[0].length;x++){  
              	  color=this.worldMatrix[y][x]==1?0xf72e4d:0x47ff6c;//get world matrix content
                  this.worldContentG[y][x].graphicsData[0].fillColor=color;//change graphic color      
              }
           	}
        }
    }
