// create a CloudMade tile layer
var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/b71253fafc18418faf668440af0d4667/997/256/{z}/{x}/{y}.png',
    cloudmadeAttribution = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
    cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18, attribution: cloudmadeAttribution});

// initialize the map on the "map" div
map = new L.Map('mapContainer');

// set the map view to a given center and zoom and add the CloudMade layer
map.setView(DEMO.getHomePosition(), 8).addLayer(cloudmade);

// create a marker in the given location and add it to the map
var marker = new L.Marker(DEMO.getHomePosition());
map.addLayer(marker);

// attach a given HTML content to the marker and immediately open it
marker.bindPopup("A pretty CSS3 popup.<br />Easily customizable.").openPopup();