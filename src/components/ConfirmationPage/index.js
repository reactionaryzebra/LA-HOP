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

  render() {
    return (
      <Confirmation>
        <div className="top">
          <div>
            <h2>THANK YOU!</h2>
            <p>
              Your request has been received and will be referred to a homeless
              outreach team for follow-up. We appreciate your support in
              assisting our homeless neighbors.
            </p>
          </div>
          <div>
            <h2>KEEP ME POSTED</h2>
            <p>
              Want to find out what will happen now that you've submitted your
              request? Provide your contact information, and we'll send you a
              link where you can see the status of your request.
            </p>
          </div>
        </div>
        <FollowupForm setSubmitted={this.setSubmitted} />
        {this.state.submitted && <p>We'll be in touch!</p>}
        <div>
          <h2>MORE WAYS TO HELP</h2>
          <div>
            <div>
              <label>Get Involved</label>
            </div>
            <div>
              <label>Volunteer LA</label>
            </div>
            <div>
              <label>Contact Local Representative</label>
            </div>
            <div>
              <label>Volunteer with Homeful LA</label>
            </div>
          </div>
        </div>
      </Confirmation>
    );
  }
}

export default ConfirmationPage;
