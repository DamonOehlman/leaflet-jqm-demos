(function() {
    
    /* internals */

    function createMarkers() {
        // create the markers
        for (ii = 0 ; ii < data.length; ii++) {
            // create a marker in the given location and add it to the map
            var marker = new L.Marker(new L.LatLng(data[ii][0], data[ii][1]));
            map.addLayer(marker);
        } // for
    } // loadData

    /* exports */
    
    
    // create a CloudMade tile layer
    var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/b71253fafc18418faf668440af0d4667/997/256/{z}/{x}/{y}.png',
        cloudmadeAttribution = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
        cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18, attribution: cloudmadeAttribution});

    // initialize the map on the "map" div
    map = new L.Map('mapContainer');

    // set the map view to a given center and zoom and add the CloudMade layer
    map.setView(new L.LatLng(20.760000598852155, -46.23046875), 3).addLayer(cloudmade);    

    // create the markers
    createMarkers();
})();
