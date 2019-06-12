import React from "react";
import "./App.css";
import Map from "./components/Map";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withFirebase } from "./components/Firebase";
import * as ROUTES from "./constants/routes";
import Camera from "./components/Camera";
import Form from "./components/Form";

import ConfirmationPage from "./components/ConfirmationPage";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";

class AppBase extends React.Component {
  state={
    img:null,
    coordinates:null
  }
  pushImgUp=(image)=>{
    this.setState({
      img:image
    })
    console.log(image)
  }

  pushLatLongUp=(coordinates)=>{
    console.log(coordinates,'<----coordinates in push LatLongUp')
    this.setState({
      coordinates
    })

  }
  render(){
  return (
    <Router>
      <NavBar />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.REPORT} component={Map} />
      <Route exact path={ROUTES.CONFIRMATION} component={ConfirmationPage} />
      <Route
        exact
        path={ROUTES.REPORT_TRACKER}
        render={() => <div>Route Tracker</div>}
      />
      <Route exact path={ROUTES.CAMERA} render={() => <Camera />} />
      <Route exact path={ROUTES.FORM} render={() => <Form coordinates={this.state.coordinates} pushLatLongUp={this.pushLatLongUp} img={this.state.img} pushImgUp={this.pushImgUp}/>} />

    </Router>
  );
}}

const App = withFirebase(AppBase);

export default App;
