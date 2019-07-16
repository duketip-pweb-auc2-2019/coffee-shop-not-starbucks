window.onload = function()
{
    map = new OpenLayers.Map("googleMap");
    map.addLayer(new OpenLayers.Layer.OSM());
    
    var lonLat = new OpenLayers.LonLat(-87.641043, 41.884179)
        .transform(
            new OpenLayers.Projection("EPSG:4326"),
            map.getProjectionObject()
        );
    
    var zoom = 16;
    
    var markers = new OpenLayers.Layer.Markers("Markers");
    map.addLayer(markers);
    
    markers.addMarker(new OpenLayers.Marker(lonLat));
    
    map.setCenter (lonLat, zoom);
}
