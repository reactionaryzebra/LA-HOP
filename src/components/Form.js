import React from "react";
import Camera from "./Camera";
import Map from "./Map";
import uniqid from "uniqid";
import styled from "styled-components";
import FormOne from "../styles/FormOne";
import { withFirebase } from "../components/Firebase";
import { withRouter } from "react-router-dom";
import ProgressBar from "./ProgressBar";
const necessities = ["food", "water", "jacket", "burn", "clothing"];

class FormBase extends React.Component {
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
    currentStep: 0
  };
  fileSelectedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  fileUploadHandler = () => {
    console.log("Now upload it to whereever");
  };
  sendItUp = () => {
    const address = document.getElementById("address").value;
    const date = document.getElementById("date").value;
    const location = document.getElementById("location").value;
    const numberOfPeople = document.getElementById("numberOfPeople").value;

   
    const contactInfo = document.getElementById("phoneOne").value+document.getElementById("phoneTwo").value+document.getElementById("phoneThree").value;
    const descriptionOfSelf = document.getElementById("descriptionOfSelf")
      .value;

    const other = document.getElementById("other").value;
    const img = document.getElementById("image").value;
    let newNecessities = [];
    if (this.state.burn) {
      newNecessities.push("burn");
    }
    if (this.state.water) {
      newNecessities.push("water");
    }
    if (this.state.jacket) {
      newNecessities.push("jacket");
    }
    if (this.state.clothing) {
      newNecessities.push("clothing");
    }
    if (this.state.food) {
      newNecessities.push("food");
    }
    if (this.state.shoes) {
      newNecessities.push("shoes");
    }
    const objectToSend = {
      address,
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
        <div className='gradientDiv'>
          <h1>{this.state.english ? "Location" : "Ubicaccion"}</h1>
          <h5>Tell us where and when you saw the person in need.</h5>
          
          <Map pushLatLongUp={this.props.pushLatLongUp} />
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
          <br />

          <input
          
            id="address"
            style={{ display: this.state.pageOneVis }}
            placeholder={this.state.english ? "Address" : "dirección"}
          />
          <br />
          <br/>
          <input
            type="date"
            id="date"
            style={{ display: this.state.pageOneVis }}
            placeholder="Date"
          />
          <br />
            <br/>
            <textarea
            type="time"
            
            id="time"
            style={{ display: this.state.pageOneVis }}
            placeholder={
              this.state.english
                ? "Time"
                : "Tiempo"
            }
          />

            <br />
            <br/>
          <textarea
            
            id="location"
            style={{ display: this.state.pageOneVis }}
            placeholder={
              this.state.english
                ? "Location Description"
                : "descripción de la ubicación"
            }
          />
          <br/>
          <br/>
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
          <div className='gradientDiv'>
          <h1 className="optionalHomeless">{this.state.english ? "Optional: Homeless Contact" : "Detalles de personas sin hogar"}</h1>
          <h5>Tell us more about the person in need and provide optional contact information for them.</h5>
          <br/>
          
          <input
            id="numberOfPeople"
            type="number"
            style={{ display: this.state.pageTwoVis }}
            placeholder={
              this.state.english ? "Number of people" : "número de personas"
            }
          />
          <br/>
          <br/>
          Optional: contact details for homeless person in need.
          
          
          <div className='lightBackground'>

          
          
          <br/>
          <input className='nameInput' placeholder="name"/>
          <br />
          <br />

          <br/>
          <p style={{marginLeft:'15px'}}>Phone Number</p>
          <div id="phoneNumberDiv">
              <input id="phoneOne" className='phoneNumber'/>  -<input id="phoneTwo" className='phoneNumber'/>  -<input id='phoneThree' className='phoneNumber'/>
          </div>
          <br />
          </div>
          <br/>
        <br/>
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
        <div className='gradientDiv'>
          <h2>{this.state.english ? "Person in Need Description" : "Descripción de personas sin hogar"}</h2>
          <h5>Provide as detailed a description of the person(s) in need physical appearance, and your best assessment of their needs.</h5>
          <br />
          <img className="cameraImg" src='https://cdn1.iconfinder.com/data/icons/iconmart-web-icons-2/64/camera-512.png'/>
          <input type="file" id="image" accept="image/*" capture="camera" />
          <br />
          <h2>Add a Photo</h2>
          <h5>Take or upload a photo (optional).  If the person(s) is exhibiting behavior that is endangering themselves or the public, or need immediate medical, call 911 immediately.</h5>

          <textarea 
          className='descriptionArea'
            id="descriptionOfSelf"
            style={{ display: this.state.pageThreeVis }}
            placeholder={
              this.state.english
                ? "Description of self"
                : "descripción de ti mismo"
            }
          />
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
              {this.state.english ? "clothing" : "la ropa"}
            </div>
            <div
              onClick={() => {
                !this.state.food
                  ? this.setState({
                      food: true
                    })
                  : this.setState({
                      food: false
                    });
              }}
              className={
                this.state.food ? "homelessNeedsClicked" : "homelessNeeds"
              }
            >
              {this.state.english ? "food" : "comida"}
            </div>
            <div
              onClick={() => {
                !this.state.water
                  ? this.setState({
                      water: true
                    })
                  : this.setState({
                      water: false
                    });
              }}
              className={
                this.state.water ? "homelessNeedsClicked" : "homelessNeeds"
              }
            >
              {this.state.english ? "water" : "la agua"}
            </div>
            <div
              onClick={() => {
                !this.state.burn
                  ? this.setState({
                      burn: true
                    })
                  : this.setState({
                      burn: false
                    });
              }}
              className={
                this.state.burn ? "homelessNeedsClicked" : "homelessNeeds"
              }
            >
              {this.state.english ? "burn medication" : "quemar medicación"}
            </div>
            <div
              onClick={() => {
                !this.state.jacket
                  ? this.setState({
                      jacket: true
                    })
                  : this.setState({
                      jacket: false
                    });
              }}
              className={
                this.state.jacket ? "homelessNeedsClicked" : "homelessNeeds"
              }
            >
              {this.state.english ? "jacket" : "chaqueta"}
            </div>
            <div
              onClick={() => {
                !this.state.shoes
                  ? this.setState({
                      shoes: true
                    })
                  : this.setState({
                      shoes: false
                    });
              }}
              className={
                this.state.shoes ? "homelessNeedsClicked" : "homelessNeeds"
              }
            >
              {this.state.english ? "shoes" : "los zapatos"}
            </div>
            
            <input
                className='otherInput'
              id="other"
              placeholder={this.state.english ? "other:" : "otro:"}
            />
            <br/>
            <input type="checkbox"/>I have read and understand the Learn More section.

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
