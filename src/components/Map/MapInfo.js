import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Autocomplete from "react-google-autocomplete";

const mapStyles = {
  width: "400px",
  height: "250px"
  //height:'41%'
};

export class MapInfo extends Component {
  state = {
    latitude: null,
    longitude: null,
    zoom: 10,
    temp: null,
    locationError: null
  };
  componentWillUnmount() {
    this.props.pushLatLongUp([this.state.latitude, this.state.longitude]);
  }

  render() {
    const { latitude, longitude, zoom } = this.state;
    return (
      <div>
        <Autocomplete
          style={{ width: "100%", marginBottom: "20px", marginTop: "10px" }}
          onPlaceSelected={place =>
            this.setState({
              latitude: place.geometry.location.lat(),
              longitude: place.geometry.location.lng(),
              zoom: 15
            })
          }
          types={["address"]}
        />
        <Map
          google={this.props.google}
          zoom={this.props.zoom || zoom}
          style={mapStyles}
          initialCenter={{ lat: 34.052235, lng: -118.243683 }}
          center={{
            lat: latitude || this.props.lat,
            lng: longitude || this.props.lng
          }}
        >
          <Marker
            position={{
              lat: latitude || this.props.lat,
              lng: longitude || this.props.lng
            }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
})(MapInfo);
