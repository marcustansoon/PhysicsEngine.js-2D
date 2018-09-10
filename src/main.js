
var productIds = [
    "io.cocoon.yourproduct1",
    "io.cocoon.yourproduct2"
];

function main() {
   inAppPurchase
  .getProducts(productIds)
  .then(function (products) {
    alert(products);
    /*
       [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', currency: '...', price: '...', priceAsDecimal: '...' }, ...]
    */
  })
  .catch(function (err) {
   alert('err', JSON.stringify(err) );
  });
}

document.addEventListener('deviceready', main, false);





