import React, { Component } from "react";
import Autocomplete from "react-google-autocomplete";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "400px",
  height: "250px"
  //height:'41%'
};

export class MapInfo extends Component {
  state = {
    formattedAddress: null,
    latitude: null,
    longitude: null,
    zoom: 10,
    temp: null,
    locationError: null
  };
  componentWillUnmount() {
    this.props.pushLatLongUp([this.state.latitude, this.state.longitude]);
  }

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        location =>
          this.setState(
            {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              zoom: 15
            },
            this.props.pushLatLongUp([
              /*this.state.latitude*/ location.coords.latitude,
              /*this.state.longitude*/ location.coords.longitude
            ])
          ),
        error => this.setState({ locationError: error }),
        { timeout: 5000 }
      );
    } else {
      this.setState({
        locationError: "Your browser does not support location services"
      });
    }
  };

  render() {
    const { latitude, longitude, zoom } = this.state;
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
