
/*
(function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();*/
let div = document.createElement('div');
    div.id='test';
    document.body.appendChild(div);
    div.style.left = "0px";
    div.style.top = "0px";
    div.style.position = "absolute";


	alert(XMLHttpRequest); 






let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {//Call a function when the state changes.
    if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        //console.log(JSON.parse(this.responseText));
        //document.getElementById('res').innerHTML+=this.responseText+'<br>';
        div.innerHTML+=this.responseText;
    }    
}
xhr.open('post', 'https://fast-gold.glitch.me/', true);
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          xhr.send(JSON.stringify(data));


var productIds = [
    "io.cocoon.yourproduct1",
    "io.cocoon.yourproduct2"
];

function main() {
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
          /*
            xhr.open('post', 'https://fast-gold.glitch.me/', true);
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          xhr.send(JSON.stringify(data));
            */
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
    
    
    
    /*
    
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
    } 
    */
}

document.addEventListener('deviceready', main, false);





