
var productIds = [
    "io.cocoon.yourproduct1",
    "io.cocoon.yourproduct2"
];

function main() {
   inAppPurchase
  .getProducts(productIds)
  .then(function (products) {
    alert(JSON.stringify(products));
    /*
       [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', currency: '...', price: '...', priceAsDecimal: '...' }, ...]
    */
       
        inAppPurchase
      .buy(productIds[1])
      .then(function (data) {
        alert(JSON.stringify(data));
        /*
          {
            transactionId: ...
            receipt: ...
            signature: ...
          }
        */
          return inAppPurchase.consume(data.productType, data.receipt, data.signature);
      })
      .then(function () {
        alert('product was successfully consumed!');
      })
      .catch(function (err) {
        alert(JSON.stringify(err));
      });   
  })
  .catch(function (err) {
   alert('err', JSON.stringify(err) );
  });
    
    
    
}

document.addEventListener('deviceready', main, false);





