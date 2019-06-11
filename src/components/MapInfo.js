import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '400px',
  height: '250px'
};

export class MapInfo extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={1}
        style={mapStyles}
        initialCenter={{
         lat: 0,
         lng: 0
        }}
      ></Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(MapInfo);