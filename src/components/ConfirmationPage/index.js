import React, { Component } from "react";
import FollowupForm from "../FollowupForm";
import Confirmation from "../../styles/Confirmation";
import H1 from "../../styles/H1";

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
            <H1>THANK YOU!</H1>
            <p>
              Your request has been received and will be referred to a homeless
              outreach team for follow-up. We appreciate your support in
              assisting our homeless neighbors.
            </p>
          </div>
          <div>
            <H1>KEEP ME POSTED</H1>
            <p>
              Want to find out what will happen now that you've submitted your
              request? Provide your contact information, and we'll send you a
              link where you can see the status of your request.
            </p>
          </div>
        </div>
        <FollowupForm setSubmitted={this.setSubmitted} />
        {this.state.submitted && (
          <div>
            <p className={"confirmationMessage"}>We'll be in touch! </p>
            <p className={"confirmationMessage"}>
              Check on the progress &nbsp;
              <a
                href={`https://la-hop.firebaseapp.com/status/
              ${this.props.requestNumber}`}
              >
                here
              </a>
            </p>
          </div>
        )}
        <div className={"bottom"}>
          <H1>MORE WAYS TO HELP</H1>
          <div className={"waysToHelpContainer"}>
            <div className={"wayToHelp"}>
              <img src="images/high-five.png" />
              <label>GET INVOLVED</label>
            </div>
            <div className={"wayToHelp"}>
              <img src="images/volunteer-la.png" />
              <label>VOLUNTEER LA</label>
            </div>
            <div className={"wayToHelp"}>
              <img src="images/path-la.png" />
              <label>DONATE TO PATH</label>
            </div>
            <div className={"wayToHelp"}>
              <img src="images/family-housing.png" />
              <label>DONATE TO LA FAMILY HOUSING</label>
            </div>
          </div>
        </div>
      </Confirmation>
    );
  }
}

export default ConfirmationPage;
