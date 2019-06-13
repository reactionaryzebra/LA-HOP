import React from "react";
import { Steps } from "antd";

const ProgressBar = ({ currentStep }) => (
  <Steps progressDot current={currentStep}>
    <Steps.Step />
    <Steps.Step />
    <Steps.Step />
  </Steps>
);

export default ProgressBar;
