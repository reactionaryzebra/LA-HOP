import React from "react";
import { withRouter } from "react-router-dom";
import { inherits } from "util";
import Landing from "../../styles/Landing";
import H1 from "../../styles/H1";
import Button from "../../styles/Button";

const LandingPageBase = props => (
  <Landing>
    <header>
      <p>
        <strong>
          LA-Homeless Outreach Portal is designed to assist people experiencing
          homelessness in Los Angeles County with outreach services.
        </strong>
        <br />
        <br />
        We'll use this information to dispatch a homeless services outreach team
        to the area.
      </p>
    </header>
    <div className="middle">
      <H1>How You Can Help</H1>
      <div className="flow-container">
        <div>
          <img src="images/location-icon.png" />
          <label>Tell us the location of the person(s) in need.</label>
        </div>
        <div>
          <img src="images/arrow-right.png" />
        </div>
        <div>
          <img src="images/person-icon.png" />
          <label>
            Provide their description, needs and optional contact info for them.
          </label>
        </div>
        <div>
          <img src="images/arrow-right.png" />
        </div>
        <div>
          <img src="images/contact-icon.png" />
          <label>
            Leave us your contact information and we'll keep you posted.
          </label>
        </div>
      </div>
    </div>
    <div className="disclaimer-container">
      <div>
        <img src="images/ambulance-icon.png" />
        <p>For medical or mental health emergencies, please call 911.</p>
      </div>
      <div>
        <img src="images/mattress-icon.png" />
        <p>
          For Services like bulky item pickup, illegal dumping or graffiti,
          please contact your municipality
        </p>
      </div>
      <div>
        <img src="images/police-icon.png" />
        <p>
          For crime or illegal activity, please contact your local law
          enforcement agency
        </p>
      </div>
      <div>
        <img src="images/courthouse-icon.png" />
        <p>
          LA-HOP does not replace homeless encampment reporting protocols.
          Please contact your municipality
        </p>
      </div>
    </div>
    <Button
      onClick={() => {
        props.history.push("/form");
      }}
    >
      MAKE A REQUEST
    </Button>
    <Button
      onClick={() => {
        props.history.push("/learn-more");
      }}
    >
      LEARN MORE
    </Button>
  </Landing>
);

const LandingPage = withRouter(LandingPageBase);

export default LandingPage;
