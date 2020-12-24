import React from 'react';
import L from "leaflet";
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';

// https://cherniavskii.com/using-leaflet-in-react-apps/

const mapStyle = {
  width: "100%",
  height: "90vh"
};

class App extends React.Component {
  map
  fourd
  groups
  project
  plottable
  leafletHelper

  constructor(props){
    super(props);

  }


  getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    // open the request with the verb and the url
    xhr.open('GET', 'https://rest.busradar.conterra.de/prod/haltestellen')
    // send the request
    xhr.send()
  }


  /**
   * Initialise the Leaflet map
   */
  componentDidMount() {
    this.getData();


    // Create map
    this.map = L.map("map", {
      center: [51.9606649, 7.6261347],
      zoom: 15,
      layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
          attribution: 'Someone'
        })
      ]
    });
  }

  /**
   * Add or remove tile layer
   * Note you will have to move camera on callback manually (if you want), as shown in this example
   */

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossorigin=""/>
        <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
          integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
          crossorigin=""></script>
        <div id="map" style={mapStyle} />

      </div>);
  }
}

render(<App />, document.getElementById('root'));

reportWebVitals();
