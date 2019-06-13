import React from "react";
import Camera from "./Camera";
import Map from "./Map";
import styled from "styled-components";
import FormOne from "../styles/FormOne";
import { withFirebase } from "../components/Firebase";
import { withRouter } from "react-router-dom";
const necessities = ["food", "water", "jacket", "burn", "clothing"];

class StatusBase extends React.Component {
  state = {
    english: true,
    spanish: false,
    pageOneVis: "inline",
    pageTwoVis: "none",
    pageThreeVis: "none",
    clothing: false,
    food: false,
    water: false,
    jacket: false,
    burn: false,
    shoes: false,
    selectedFile: null,
    showCamera: false,
    personStatus: null
  };
  seeStatus = num => {
    const { firebase, history, match } = this.props;
    const here = this;
    firebase.db
      .collection("requests")
      .doc(match.params.id)
      .get()
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.data().status);
        here.setState({ personStatus: docRef.data().status });
      });
  };

  componentDidMount(){
      this.seeStatus(10)
  }

  render() {
    return (
      <div>
        <h1>Status:</h1>

        {this.state.personStatus ? (
          <h5>{this.state.personStatus}</h5>
        ) : (
          undefined
        )}
      </div>
    );
  }
}
const Status = withRouter(withFirebase(StatusBase));
export default Status;
