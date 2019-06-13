import React from "react";
import Camera from "./Camera";
import MapInfo from "./Map/MapInfo";
import uniqid from "uniqid";
import styled from "styled-components";
import FormOne from "../styles/FormOne";
import { withFirebase } from "../components/Firebase";
import { withRouter } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const necessities = [
  "mentalHealth",
  "substanceAbuse",
  "nonUrgentMedical",
  "hygiene",
  "clothing",
  "childCare"
];

class FormBase extends React.Component {
  state = {
    english: true,
    spanish: false,
    pageOneVis: "inline",
    pageTwoVis: "none",
    pageThreeVis: "none",
    clothing: false,
    mentalHealth: false,
    substanceAbuse: false,
    nonUrgentMedical: false,
    hygiene: false,
    childCare: false,
    selectedFile: null,
    showCamera: false,
    currentStep: 0,
    latitude: null,
    longitude: null,
    zoom: 10
  };
  fileSelectedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  fileUploadHandler = () => {
    console.log("Now upload it to whereever");
  };
  sendItUp = () => {
    const date = document.getElementById("date").value;
    const location = document.getElementById("location").value;
    const numberOfPeople = document.getElementById("numberOfPeople").value;

    const contactInfo =
      document.getElementById("phoneOne").value +
      document.getElementById("phoneTwo").value +
      document.getElementById("phoneThree").value;
    const descriptionOfSelf = document.getElementById("descriptionOfSelf")
      .value;

    const other = document.getElementById("other").value;
    const img = document.getElementById("image").value;
    let newNecessities = [];
    if (this.state.hygiene) {
      newNecessities.push("hygiene");
    }
    if (this.state.substanceAbuse) {
      newNecessities.push("substanceAbuse");
    }
    if (this.state.nonUrgentMedical) {
      newNecessities.push("nonUrgentMedical");
    }
    if (this.state.clothing) {
      newNecessities.push("clothing");
    }
    if (this.state.mentalHealth) {
      newNecessities.push("mentalHealth");
    }
    if (this.state.childCare) {
      newNecessities.push("childCare");
    }
    const objectToSend = {
      date,
      location,
      numberOfPeople,
      contactInfo,
      descriptionOfSelf,

      newNecessities,
      status: "pending",
      other,
      coordinates: this.props.coordinates
    };
    const here = this;
    const { firebase, history } = this.props;
    const imgFile = new File([img], "picture.jpg", { type: "image/jpeg" });
    firebase.storage
      .ref()
      .child(uniqid())
      .put(imgFile)
      .then(snapshot =>
        snapshot.ref
          .getDownloadURL()
          .then(string => (objectToSend.imageURL = string))
          .then(() => firebase.db.collection("requests").add(objectToSend))
          .then(function(docRef) {
            here.props.pushRequestNumberUp(docRef.id);
            console.log("Document written with ID: ", docRef.id);
          })
      );
    history.push("/confirmation");
  };

  componentDidMount() {
    Date.prototype.toDateInputValue = function() {
      var local = new Date(this);
      local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
      return local.toJSON().slice(0, 10);
    };
    document.getElementById("date").value = new Date().toDateInputValue();
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
    return (
      <div>
        {!this.state.english ? (
          <img
            className="flagIcon"
            style={{
              display: this.state.english ? "inlineBlock" : "inlineBlock"
            }}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
            onClick={() => {
              this.setState({
                english: true
              });
            }}
          />
        ) : (
          undefined
        )}
        {this.state.english ? (
          <img
            className="flagIcon"
            style={{
              display: !this.state.english ? "inlineBlock" : "inlineBlock"
            }}
            src="https://images-na.ssl-images-amazon.com/images/I/61sIDOD1ajL._SL1500_.jpg"
            onClick={() => {
              this.setState({
                english: false
              });
            }}
          />
        ) : (
          undefined
        )}

        <ProgressBar currentStep={this.state.currentStep} />

        <FormOne style={{ display: this.state.pageOneVis }}>
          <div className="gradientDiv">
            <h1>{this.state.english ? "Location" : "Ubicaccion"}</h1>
            <h5>Tell us where and when you saw the person in need.</h5>

            <MapInfo
              pushLatLongUp={this.props.pushLatLongUp}
              lat={this.state.latitude}
              lng={this.state.longitude}
              zoom={this.state.zoom}
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <button id="mapLocation" onClick={this.getGeoLocation}>
              <img src="images/current-location-icon.png" />
              Use current location
            </button>
            <br />
            <br />
            <br />
            <label>DATE*</label>
            <input
              type="date"
              id="date"
              style={{ display: this.state.pageOneVis }}
              placeholder="Date"
            />
            <br />
            <br />
            <label>TIME*</label>
            <input
              type="time"
              id="time"
              style={{ display: this.state.pageOneVis }}
              placeholder={this.state.english ? "Time" : "Tiempo"}
            />
            <br />
            <br />
            <label>DESCRIPTION OF LOCATION*</label>
            <textarea
              id="location"
              style={{ display: this.state.pageOneVis }}
              placeholder={
                this.state.english
                  ? "Location Description"
                  : "descripción de la ubicación"
              }
            />
            <br />
            <br />
            <button
              className="nextButton"
              style={{ display: this.state.pageOneVis }}
              onClick={() => {
                this.setState({
                  pageOneVis: "none",
                  pageTwoVis: "inline",
                  pageThreeVis: "none",
                  currentStep: 1
                });
              }}
            >
              {this.state.english ? "NEXT" : "Siguiente"}
            </button>
          </div>
        </FormOne>

        <FormOne style={{ display: this.state.pageTwoVis }}>
          <div className="gradientDiv">
            <h1 className="optionalHomeless">
              {this.state.english
                ? "Optional: Homeless Contact"
                : "Detalles de personas sin hogar"}
            </h1>
            <h5>
              {this.state.english
                ? "Tell us more about the person in need and provide optional contact information for them."
                : "Díganos más acerca de la persona que lo necesita y bríndeles información de contacto opcional."}
            </h5>
            <br />

            <input
              id="numberOfPeople"
              type="number"
              style={{ display: this.state.pageTwoVis }}
              placeholder={
                this.state.english ? "Number of people" : "número de personas"
              }
            />
            <br />
            <br />
            {this.state.english
              ? "Optional: contact details for homeless person in need."
              : "Opcional: datos de contacto para personas sin hogar en necesidad"}

            <div className="lightBackground">
              <br />
              <input className="nameInput" placeholder="Name" />
              <br />
              <br />

              <br />
              <p style={{ marginLeft: "15px" }}>
                {this.state.english ? "Phone Number" : "Número de teléfono"}
              </p>
              <div id="phoneNumberDiv">
                <input id="phoneOne" className="phoneNumber" /> -
                <input id="phoneTwo" className="phoneNumber" /> -
                <input id="phoneThree" className="phoneNumber" />
              </div>
              <br />
            </div>
            <br />
            <br />
            <button
              className="nextButton"
              style={{ display: this.state.pageTwoVis }}
              onClick={() => {
                this.setState({
                  pageOneVis: "none",
                  pageTwoVis: "none",
                  pageThreeVis: "inline",
                  currentStep: 2
                });
              }}
            >
              {this.state.english ? "NEXT" : "Siguiente"}
            </button>
          </div>
        </FormOne>

        <FormOne style={{ display: this.state.pageThreeVis }}>
          <div className="gradientDiv">
            <h2>
              {this.state.english
                ? "Homeless Description"
                : "Descripción de personas sin hogar"}
            </h2>
            <h5>
              {this.state.english
                ? "Provide as detailed a description of the person(s) in need physical appearance, and your best assessment of their needs."
                : "Proporcione una descripción detallada de la (s) persona (s) que necesita la apariencia física y su mejor evaluación de sus necesidades."}
            </h5>
            <br />
            <img
              className="cameraImg"
              src="https://cdn1.iconfinder.com/data/icons/iconmart-web-icons-2/64/camera-512.png"
            />
            <input type="file" id="image" accept="image/*" capture="camera" />
            <br />
            <h2>{this.state.english ? "ADD A PHOTO" : "Agregar una foto"}</h2>
            <h5>
              {this.state.english
                ? "Take or upload a photo (optional), and please be respectful. If the person(s) is exhibiting behavior that is endangering themselves or the public, or need immediate medical attention, call 911 immediately."
                : "Toma o sube una foto (opcional). Si la (s) persona (s) muestra un comportamiento que pone en peligro a sí mismo o al público, o necesita atención médica inmediata, llame al 911 inmediatamente."}
            </h5>
            <label>DESCRIPTION</label>
            <textarea
              className="descriptionArea"
              id="descriptionOfSelf"
              style={{ display: this.state.pageThreeVis }}
              placeholder={
                this.state.english
                  ? "Has a limp, appears to be speaking to someone who is not there, also has swollen legs.  Has mentioned needing help. Potentially interested in shelter."
                  : "descripción de ti mismo"
              }
            />
            <br />
            <br />
            <br />
            <h5>Their needs:</h5>

            <div className="needList">
              <div
                onClick={() => {
                  !this.state.clothing
                    ? this.setState({
                        clothing: true
                      })
                    : this.setState({
                        clothing: false
                      });
                }}
                className={
                  this.state.clothing ? "homelessNeedsClicked" : "homelessNeeds"
                }
              >
                {this.state.english ? "Clothing" : "la ropa"}
              </div>
              <div
                onClick={() => {
                  !this.state.mentalHealth
                    ? this.setState({
                        mentalHealth: true
                      })
                    : this.setState({
                        mentalHealth: false
                      });
                }}
                className={
                  this.state.mentalHealth
                    ? "homelessNeedsClicked"
                    : "homelessNeeds"
                }
              >
                {this.state.english ? "Mental Health" : "salud mental"}
              </div>
              <div
                onClick={() => {
                  !this.state.substanceAbuse
                    ? this.setState({
                        substanceAbuse: true
                      })
                    : this.setState({
                        substanceAbuse: false
                      });
                }}
                className={
                  this.state.substanceAbuse
                    ? "homelessNeedsClicked"
                    : "homelessNeeds"
                }
              >
                {this.state.english
                  ? "Non-Urgent Medical"
                  : "médico no urgente"}
              </div>
              <div
                onClick={() => {
                  !this.state.hygiene
                    ? this.setState({
                        hygiene: true
                      })
                    : this.setState({
                        hygiene: false
                      });
                }}
                className={
                  this.state.hygiene ? "homelessNeedsClicked" : "homelessNeeds"
                }
              >
                {this.state.english ? "Substance Abuse" : "abuso de sustancias"}
              </div>
              <div
                onClick={() => {
                  !this.state.nonUrgentMedical
                    ? this.setState({
                        nonUrgentMedical: true
                      })
                    : this.setState({
                        nonUrgentMedical: false
                      });
                }}
                className={
                  this.state.nonUrgentMedical
                    ? "homelessNeedsClicked"
                    : "homelessNeeds"
                }
              >
                {this.state.english ? "Hygiene" : "higiene"}
              </div>
              <div
                onClick={() => {
                  !this.state.childCare
                    ? this.setState({
                        childCare: true
                      })
                    : this.setState({
                        childCare: false
                      });
                }}
                className={
                  this.state.childCare
                    ? "homelessNeedsClicked"
                    : "homelessNeeds"
                }
              >
                {this.state.english
                  ? "Child or Baby Care"
                  : "cuidado de niños o bebés"}
              </div>
              <input
                className="otherInput"
                id="other"
                placeholder={this.state.english ? "other:" : "otro:"}
              />
              <br />
              <input type="checkbox" />I have read and understand the Learn More
              section.
              <button
                className="nextButton"
                style={{ display: this.state.pageThreeVis, zIndex: "3000" }}
                onClick={this.sendItUp}
              >
                {this.state.english ? "Submit" : "Enviar"}
              </button>
            </div>
          </div>
        </FormOne>
        <br />
        <br />
      </div>
    );
  }
}
const Form = withRouter(withFirebase(FormBase));
export default Form;
