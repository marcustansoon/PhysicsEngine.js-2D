document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  cordova.InAppBrowser.open('https://google.com', '_blank', 'location=no,hideurlbar=yes,toolbar=no,zoom=no,allowInlineMediaPlayback=yes')
}
