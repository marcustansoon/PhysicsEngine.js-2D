document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  cordova.InAppBrowser.open('https://google.com', '_system')
}
