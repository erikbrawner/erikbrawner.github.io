// Import the necessary modules
import esriConfig from '@arcgis/core/config';
import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import './style.css'

esriConfig.apiKey = import.meta.env.VITE_ESRIAPI;

// Create a new Map instance
const map = new Map({
  //basemap: 'arcgis-hillshade-dark',
  basemap: 'topo-3d',
  ground: 'world-elevation'
});

// Create a new SceneView instance
const view = new SceneView({
  container: 'view-div', // Reference to the container element
  map: map,
  camera: {
    position: {
      x: -93.6250,
      y: 41.5868,
      z: 20000000 //meters
    }
  }
});

view.ui.remove(['zoom', 'navigation-toggle', 'compass']);
//view.ui.remove('toggle');

document.getElementById('about-div')!.addEventListener('scroll', (event) => {
  view.goTo(
    {
      position: {
        x: -93.6250,
        y: 41.5868,
        z: 50000 //meters
      }
    }
  )
})


/*view.on('scroll', (event) => {
  event.stopPopagation();

  const delta = event.native.deltaY;
  const wheelDirection = delta < 0 ? 'up' : 'down';

  if (wheelDirection === 'up') {
    view.;
  } else if (wheelDirection === 'down') {
    view.goBack();
  }
})*/

/*document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div id="viewDiv"></div>
  </div>
`*/

// Add the view to the container element
/*view.container = document.getElementById('viewDiv');setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)*/