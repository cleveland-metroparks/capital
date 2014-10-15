var geoJson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "location": "Brecksville",
        "project": "Auckerman Dog Park",
        "department": "PEMD",
        "marker-size": "small",
        "marker-color": "#2c539e"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.75247550010681,
          41.30404603419457
        ]
      }
    }/*,
    {
      "type": "Feature",
      "properties": {
        "location": "Hinckley",
        "project": "Redwing Field Restoration",
        "department": "Natural Resources",
        "marker-size": "small",
        "marker-color": "#E9943F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.72328233718872,
          41.21951771916777
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "location": "North Chagrin",
        "project": "Strawberry Pond Restoration",
        "department": "Natural Resources",
        "marker-size": "small",
        "marker-color": "#E9943F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4311146736145,
          41.579650348492585
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "location": "Rocky River",
        "project": "Rocky River Nature Center Trail Updates",
        "department": "Natural Resources",
        "marker-size": "small",
        "marker-color": "#E9943F"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88857078552246,
          41.41041955746075
        ]
      }
    }*/
  ]
}

map.markerLayer.setGeoJSON(geoJson)

/*		// Add custom popup html to each marker
		var markers = map.markerLayer.on('layeradd', function(e) {
			var marker = e.layer;
			var feature = marker.feature; 
			var images = feature.properties.images

			
			
			
		// Create custom popup content
		// Javascript is writing html in the popup window to populate features dynamically
			var popupContent =  '<div class="popup">' +
									'<p>' + feature.properties.project + '</p>' + '</div>';

		// http://leafletjs.com/reference.html#popup
		// Bind the popups to their corresponding data point
			marker.bindPopup(popupContent,{
				closeButton: false,
				minWidth: 320
			});
		});

		map.markerLayer.setGeoJSON(geoJson)

*/



// Add layers to turn on/off
// Cleveland Metroparks trails app base layer
var parks = L.tileLayer('http://maps1.clemetparks.com/tilestache/tilestache.cgi/basemap/{z}/{x}/{y}.jpg', {
    attribution: 'Map data <a href="http://clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a>, Imagery <a href="http://maps.clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 10,
    maxZoom: 18
}).addTo(map);


// Mapbox satellite base layer
var imagery = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.map-7cfqm6fy/{z}/{x}/{y}.jpg', {
    attribution: 'Map data <a href="http://clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a>, Imagery &copy <a href="http://mapbox.com" target="_blank">MapBox</a>',
	minZoom: 10,	
    maxZoom: 18
});



// Adds the base layers to the layer controller
// format=     "Layer label in the controller" : variable name given above,
var baseMaps = {
	"Cleveland Metroparks":parks,
	"Satellite":imagery
};

// Add the overlay layers to the layer controller
// format=     "Layer label in the controller" : variable name given above,
var overlayMaps = null;

// Adds layer controller
L.control.layers(baseMaps, overlayMaps).addTo(map);




// Sets the starting lat/long and zoom of the map on first page load
map.setView([41.3902, -81.6682], 10);




// Zoom to lat/long on link click
document.getElementById('navigation').onclick = function(e) {
    var pos = e.target.getAttribute('data-position');
	var zoom = e.target.getAttribute('zoom-level')
    if (pos) {
        var loc = pos.split(',');
		}
	if (zoom) {
		var zlvl = zoom.split(',');
		}
    map.setView(loc, zlvl);
}





// makes the stream info boxes appear/hide
function tabSwitch_2(active, number, tab_prefix, content_prefix) {  
      
    for (var i=1; i < number+1; i++) {  
      document.getElementById(content_prefix+i).style.display = 'none';  
      document.getElementById(tab_prefix+i).className = '';  
    }  
    document.getElementById(content_prefix+active).style.display = 'block';  
    document.getElementById(tab_prefix+active).className = 'active';      
      
}