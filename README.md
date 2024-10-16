# Earthquake Data Visualization with Leaflet

## Project structure

    leaflet-challenge 
    │  
    ├── index.html  
    ├── README.md  
    ├── static  
    │   ├── css  
    │   │   └── styles.css  
    │   └── js  
    │       └── logic.js  
    └── README.md 
## Objective
This project uses **Leaflet.js** to create an interactive map that visualizes earthquakes from a dataset. The map plots earthquake locations based on **latitude** and **longitude**, and the markers represent both the **magnitude** and **depth** of each earthquake.

## Instructions

### 1. Create a Map to Plot Earthquakes
- Use **Leaflet** to generate a map that plots all the earthquakes from your dataset.
- Plot each earthquake based on its **longitude** and **latitude** coordinates.

### 2. Marker Customization
- **Size:** The size of each marker should correspond to the **magnitude** of the earthquake (higher magnitude = larger marker).
- **Color:** The **depth** of the earthquake (third coordinate) should determine the marker's color (greater depth = darker color).

### 3. Add Popups for Earthquake Information
- Include **popup windows** that display additional information when a marker is clicked.
- Each popup should contain:
  - **Location:** Name of the place.
  - **Magnitude:** Intensity of the earthquake.
  - **Depth:** How deep the earthquake occurred.

### 4. Implement a Legend
- Create a **legend** to provide context for your data.
- The legend should explain:
  - **Marker size** in relation to magnitude.
  - **Marker color** in relation to depth.

