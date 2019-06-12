import React from "react";
import { withRouter } from "react-router-dom";
import { inherits } from "util";

const LandingPageBase = props => (
  <div>
    <header>
      <p>
        LA-HOP is designed to assist people experiencing homelessness in Los
        Angeles County with outreach services. We'll use this information to
        dispatch a homeless services outreach team to the area.
      </p>
    </header>
    <div>
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
    <div>
      <div>
        <p>For medical or mental health emergencies, please call 911.</p>
      </div>
      <div>
        <p>
          For Services like bulky item pickup, illegal dumping or graffiti,
          please contact your municipality
        </p>
      </div>
      <div>
        <p>
          For crime or illegal activity, please contact your local law
          enforcement agency
        </p>
      </div>
      <div>
        <p>
          LA-HOP does not replace homeless encampment reporting protocols.
          Please contact your municipality
        </p>
      </div>
    </div>
    <div>
      <button
        onClick={() => {
          props.history.push("/form");
        }}
      >
        MAKE A REQUEST
      </button>
      <button>LEARN MORE</button>
      
      <button onClick={()=>{props.history.push("/status")}}>CHECK STATUS</button>
    </div>
    <input type="file" accept="image/*" capture="camera" />
  </div>
);

const LandingPage = withRouter(LandingPageBase);

export default LandingPage;
