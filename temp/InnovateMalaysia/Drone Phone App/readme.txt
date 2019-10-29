
<script type="text/javascript" src="//maps.googleapis.com/maps/api/js?sensor=false"></script> 
<script>
navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {




	var geocoder  = new google.maps.Geocoder();             // create a geocoder object
var location  = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);    // turn coordinates into an object          

geocoder.geocode({'latLng': location}, function (results, status) {
if(status == google.maps.GeocoderStatus.OK) {           // if geocode success
var add=results[0].formatted_address;         // if address found, pass to processing function
document.write(add);
}

});

}
</script>
