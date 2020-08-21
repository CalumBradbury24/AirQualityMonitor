import React, { Component } from "react";
import './LocationMap.styles.scss';

class LocationMap extends Component {
   
  googleMapRef = React.createRef();

  componentDidMount() {
    const googleMapScript = document.createElement("script");
    window.initMap = this.initMap;
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDTfyW8ZL-8ho3Fsw0EAYaMEDzJwo8qGmE&callback=initMap`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      this.googleMap = this.createGoogleMap();
      this.marker = this.createMarker();
/*
      window.google.maps.event.addListener(this.marker, 'mouseover', () => {
       this.setState({mouseOverMarker: true});
       console.log(this.state.mouseOverMarker);
    })*/
    
    });
  }

  initMap = () => {
    this.createGoogleMap();
  };

  //Creates a new map 
  createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 8,
      center: { //Center of starting map
        lat: 51.785630,
        lng: -1.367650,
      },
    });

  createMarker = () =>
    new window.google.maps.Marker({
      position: { lat: 51.785630, lng:-1.367650 }, //Position of marker
      map: this.googleMap,
      animation:  window.google.maps.Animation.DROP,
      
    });

  render() {
    return (
      <div id="map">
        <div className='map-title'><strong>Geographical location of sensor module with ID: 1 </strong></div>
        <div className = 'height'
          id="google-map"
          ref={this.googleMapRef}
        //  style={{  height: "" }}
        />
          
      </div>
    );
  }
}

export default LocationMap;
