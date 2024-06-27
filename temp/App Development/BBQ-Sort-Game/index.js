let ref;
    alert('a');
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    alert(cordova.file);
    ref = cordova.InAppBrowser.open("https://www.joinnow.my/", '_blank', 'location=no,hideurlbar=yes,toolbar=no,zoom=no');
}
