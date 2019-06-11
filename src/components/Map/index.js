import React, { Component } from "react";
import MapInfo from "./MapInfo";

class Map extends Component {
  state = {
    earthquakes: []
  };

  componentDidMount() {
    console.log("here");
  }

  render() {
    return (
      <div className="mapContainer">
        <MapInfo />
      </div>
    );
  }
}

export default Map;
