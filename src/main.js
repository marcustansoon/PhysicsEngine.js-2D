
var mainTests;
var service;
var productIds = [
    "io.cocoon.yourproduct1",
    "io.cocoon.yourproduct2"
];

function main() {
    
    service = Cocoon.InApp;
    alert(service.initialize);
    service.on("purchase", {

        start: function(productId) {
            alert("purchase started " + productId);
        },
        error: function(productId, error) {
            alert("purchase failed " + productId + " error: " + JSON.stringify(error));
        },
        complete: function(purchase) {
            alert("purchase completed " + JSON.stringify(purchase));
        }
    });
    service.initialize({
    autofinish: true
    }, 
    function(error){
        if(error){
            alert("IError: " + error);
        }
    });

    
    // Fetching products from server 
    service.fetchProducts(productIds, function(products, error){
       if(error){
           alert("FError: " + error);
       }
       else {
           var next = [];
           for (var i = 0; i < products.length; ++i) {
               var product = products[i];
               alert(product);
           }
       } 
    });  
    Cocoon.InApp.purchase("io.cocoon.yourproduct2", 1, function(error) {
    if(error){
         alert("PError: " + error);
    }
    else {
         alert("Successfully purchased);    
    }
    });
    
}

document.addEventListener('deviceready', main, false);





