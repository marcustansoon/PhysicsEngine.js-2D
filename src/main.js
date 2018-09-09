
var mainTests;
var service;
var productIds = [
    "io.cocoon.yourproduct1",
    "io.cocoon.yourproduct2",
    "io.cocoon.yourproduct3"

];

function main() {
    
    service = Cocoon.InApp;
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
            alert("Error: " + error);
        }
    });

}

document.addEventListener('deviceready', main, false);





