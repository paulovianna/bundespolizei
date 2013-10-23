/**
* Google Maps Scripts
**/
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDovfbxl46_QY-fY4VUrCSeD1HgfjaFZc4&sensor=false&callback=initialize";
  document.body.appendChild(script);
}

function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(-34.397, 150.644),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}

window.onload = loadScript;