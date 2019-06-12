import React from "react";
import MapInfo from "./MapInfo";

class Map extends React.Component {
  render(){
    return(
  <div className="mapContainer">
    <MapInfo pushLatLongUp={this.props.pushLatLongUp}/>
  </div>)
}};

export default Map;
