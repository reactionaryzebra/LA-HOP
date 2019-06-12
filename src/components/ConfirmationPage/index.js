import React from "react";
import FollowupForm from "../FollowupForm";
import Confirmation from "../../styles/Confirmation";

const ConfirmationPage = () => (
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
    </div>
    <FollowupForm />
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

export default ConfirmationPage;
