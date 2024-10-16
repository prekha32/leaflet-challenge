
// URL pointing to USGS earthquake data
var earthquakeURL  = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson?";
// Fetch earthquake data from the provided URL
d3.json(earthquakeURL).then((response) => {
    // Pass the earthquake features data to the processFeatures function
    processFeatures(response.features);
  });
  
  // Function to determine marker color based on depth
function assignColor(depth) {
    return depth < 10 ? "#ADFF2F" : 
           depth < 30 ? "#FFD700" : 
           depth < 50 ? "#FF8C00" : 
           depth < 70 ? "#FF6347" : 
           depth < 90 ? "#FF4500" : "#8B0000";
  }
  
  // Function to process earthquake data and create map features
function processFeatures(earthquakes) {
    // Popup content for each earthquake marker
    function attachPopup(feature, layer) {
      const { place, mag } = feature.properties;
      const depth = feature.geometry.coordinates[2];
      const popupContent = `
        <h3>Location: ${place}</h3>
        <p>Magnitude: ${mag}</p>
        <p>Depth: ${depth} km</p>
      `;
      layer.bindPopup(popupContent);
    }
  
    // Create a GeoJSON layer with customized circle markers
    const earthquakeLayer = L.geoJSON(earthquakes, {
      pointToLayer: (feature, latlng) => {
        return L.circleMarker(latlng, {
          radius: feature.properties.mag * 5,      // Size scaled by magnitude
          fillColor: assignColor(feature.geometry.coordinates[2]),  // Depth-based color
          color: "#000",                           // Black border
          weight: 1,                               // Border thickness
          opacity: 1,                              // Full opacity for border
          fillOpacity: 0.8                         // Slight transparency inside
        });
      },
      onEachFeature: attachPopup
    });
  
    // Call the function to initialize the map with earthquake data
    initializeMap(earthquakeLayer);
  }
  
  // Function to initialize the Leaflet map and configure layers
  function initializeMap(earthquakeLayer) {
    // Define the base map layer using OpenStreetMap tiles
    const baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
  
    // Create the map centered on the continental US
    const map = L.map("map", {
      center: [37.09, -95.71],  
      zoom: 5,                   
      layers: [baseLayer, earthquakeLayer] 
    });
  
    // Define layer controls for toggling visibility
    L.control.layers(
      { "Street Map": baseLayer },         
      { "Earthquakes": earthquakeLayer },  
      { collapsed: false }                 
    ).addTo(map);
  }