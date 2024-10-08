
Cesium.Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_API_KEY;

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer('cesium-div', {
    terrain: Cesium.Terrain.fromWorldTerrain(),
    //baseLayer: ,
    baseLayerPicker: false,
    animation: false,
    geocoder: false,
    timeline: false,
    homeButton: false,
    navigationHelpButton: false,
    sceneModePicker: false,
    fullscreenButton: false,
}); 

// Add Cesium OSM Buildings, a global 3D buildings layer.
const buildingTileset = await Cesium.createOsmBuildingsAsync();
viewer.scene.primitives.add(buildingTileset);

