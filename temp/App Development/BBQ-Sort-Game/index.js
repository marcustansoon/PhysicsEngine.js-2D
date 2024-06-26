let ref;
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    alert(cordova.file);
    ref = cordova.InAppBrowser.open("www.joinnow.my", '_blank', 'location=no,hideurlbar=yes,toolbar=no,zoom=no');
}
