let ref;
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    alert(/*cordova.file*/1);
    setTimeout(()=>{
    ref = cordova.InAppBrowser.open("https://www.joinnow.my/", '_blank', 'location=no,hideurlbar=yes,toolbar=no,zoom=no');
    }, 2000);
}
