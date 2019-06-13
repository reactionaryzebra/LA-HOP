import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Map from "./components/Map";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withFirebase } from "./components/Firebase";
import { withRouter } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Camera from "./components/Camera";
import Form from "./components/Form";

import ConfirmationPage from "./components/ConfirmationPage";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Status from "./components/Status";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import LearnPage from "./components/LearnPage";
import ProgressBar from "./components/ProgressBar";

class AppBase extends React.Component {
  state = {
    img: null,
    coordinates: null,
    requestNumber: 9
  };

  pushRequestNumberUp = number => {
    this.setState(
      { requestNumber: number },
      console.log(this.state.requestNumber)
    );
  };
  pushImgUp = image => {
    this.setState({
      img: image
    });
    console.log(image);
  };

  pushLatLongUp = coordinates => {
    this.setState({
      coordinates
    });
  };
  render() {
    return (
      <div id="main-content">
        <NavBar />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route exact path={ROUTES.REPORT} component={Map} />
        <Route
          exact
          path={ROUTES.CONFIRMATION}
          requestNumber={this.state.requestNumber}
          render={() => (
            <ConfirmationPage requestNumber={this.state.requestNumber} />
          )}
        />
        <Route
          exact
          path={ROUTES.REPORT_TRACKER}
          render={() => <div>Route Tracker</div>}
        />
        <Route exact path={ROUTES.CAMERA} render={() => <Camera />} />
        <Route
          exact
          path={ROUTES.FORM}
          render={() => (
            <Form
              pushRequestNumberUp={this.pushRequestNumberUp}
              coordinates={this.state.coordinates}
              pushLatLongUp={this.pushLatLongUp}
              img={this.state.img}
              pushImgUp={this.pushImgUp}
            />
          )}
        />
        <Route
          exact
          path={ROUTES.STATUS}
          render={() => (
            <Status
              pushRequestNumberUp={this.pushRequestNumberUp}
              coordinates={this.state.coordinates}
              pushLatLongUp={this.pushLatLongUp}
              img={this.state.img}
              pushImgUp={this.pushImgUp}
            />
          )}
        />
        <Route exact path={ROUTES.ADMIN} render={() => <Admin />} />
        <Route exact path={ROUTES.CONTACT} component={ContactPage} />
        <Route exact path={ROUTES.LEARN} component={LearnPage} />
      </div>
    );
  }
}

const App = withRouter(withFirebase(AppBase));

export default App;
