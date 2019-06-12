import React, { Component } from "react";
import FollowupForm from "../FollowupForm";
import Confirmation from "../../styles/Confirmation";

class ConfirmationPage extends Component {
  state = {
    submitted: false
  };

  setSubmitted = bool => {
    this.setState({ submitted: bool });
  };
  componentDidMount=()=>{
    console.log(this.props,'<----this.props confoirmation page')
  }

  render() {
    console.log(this.props,'<----this.props confoirmation page!!!!!!!!!!!!!!!!!')
    return (
      <Confirmation>
        <div>
          <h2>CONFIRMATION</h2>
          <p>Thank you for submitting your request.</p>
        </div>
        <div>
          <h2>KEEP ME POSTED</h2>
          <p>
            If you would like to be notified about the outcome of this request
            please provide us with some contact information. You will receive a
            notification shortly.
          </p>
          <h4>Or you can type this code into the portal on the main page {this.props.requestNumber}</h4>
        </div>
        <FollowupForm setSubmitted={this.setSubmitted} />
        {this.state.submitted && <p>We'll be in touch!</p>}
        <div>
          <h2>ADDITIONAL RESOURCES</h2>
          <div>
            <div />
            <div />
            <div />
          </div>
        </div>
      </Confirmation>
    );
  }
}

export default ConfirmationPage;
