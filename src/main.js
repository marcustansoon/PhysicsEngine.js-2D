
let div = document.createElement('div');
    div.id='test';
    document.body.appendChild(div);
    div.style.left = "0px";
    div.style.top = "0px";
    div.style.position = "absolute";





var productIds = [
    "io.cocoon.yourproduct1",
    "io.cocoon.yourproduct2"
];

function main() {
   cpixi();
	
	return;
   inAppPurchase
  .getProducts(productIds)
  .then(function (products) {
    alert(JSON.stringify(products));
    /*
       [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', currency: '...', price: '...', priceAsDecimal: '...' }, ...]
    */
       
        inAppPurchase
      .buy(productIds[0])
      .then(function (data) {
        //alert(JSON.stringify(data));
            //when purphase is complete
        /*
          {
            transactionId: ...
            receipt: ...
            signature: ...
          }
        */    
            
            
          
            inAppPurchase.consume(data.productType, data.receipt, data.signature);//consume the purchased product, allow re-purchase of the same product
         
      }) 
      .then(function () {
        alert('product was successfully consumed!');
      })
      .catch(function (err) {
        alert('err',JSON.stringify(err));
      });   
  })
  .catch(function (err) {
   alert('err', JSON.stringify(err) );
  });
    

    
    

    
}

document.addEventListener('deviceready', main, false);
function cpixi(){
	let script = document.createElement('script');
    script.src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.8.2/pixi.min.js";
    document.body.appendChild(script);
    script.onload=function(){
        alert('loaded');
    	let renderer = new PIXI.autoDetectRenderer(250,250);
        document.body.appendChild(renderer.view);
        renderer.view.style.left = "0px";
        renderer.view.style.top = "0px";
        renderer.view.style.position = "absolute";
	    let stage= new PIXI.Container();
        
        
	let tex = new PIXI.Sprite.fromImage('https://i.imgur.com/uDuqK20.jpg');   
    	stage.addChild(tex);
        tex.scale.set(.5);
        loop();
        function loop(){
        	renderer.render(stage);
            requestAnimationFrame(loop);
        }
    } 	
}




