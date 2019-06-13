import React from "react";
import { Steps } from "antd";
import ProgressBarContainer from "../../styles/ProgressBarContainer";

const ProgressBar = ({ currentStep }) => (
  <ProgressBarContainer>
    <Steps progressDot current={currentStep}>
      <Steps.Step />
      <Steps.Step />
      <Steps.Step />
    </Steps>
  </ProgressBarContainer>
);

export default ProgressBar;
