import React, { Component } from "react";
import Autocomplete from "react-google-autocomplete";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "400px",
  height: "250px"
};

export class MapInfo extends Component {
  state = {
    formattedAddress: null,
    latitude: null,
    longitude: null,
    zoom: 10,
    temp: null
  };

  getGeoLocation = () => {
    console.log("hello");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
      });
    } else {
      console.log("else");
    }
  };

  render() {
    const { latitude, longitude, zoom } = this.state;
    console.log(this.state.temp);
    return (
      <div>
        <button onClick={this.getGeoLocation}>Location</button>
        <Autocomplete
          style={{ width: "90%" }}
          onPlaceSelected={place =>
            this.setState({
              formattedAddress: place.formatted_address,
              latitude: place.geometry.location.lat(),
              longitude: place.geometry.location.lng(),
              zoom: 15
            })
          }
          types={["address"]}
        />
        <Map
          google={this.props.google}
          zoom={zoom}
          style={mapStyles}
          initialCenter={{ lat: 34.052235, lng: -118.243683 }}
          center={{
            lat: latitude,
            lng: longitude
          }}
        >
          <Marker position={{ lat: latitude, lng: longitude }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
})(MapInfo);