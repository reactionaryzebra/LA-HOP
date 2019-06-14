import styled from "styled-components";

const Confirmation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans";
  .top {
    margin-top: 43px;
    margin-left: 66px;
    margin-right: 66px;
    margin-bottom: 32px;
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-family: Raleway;
    font-size: 18px;
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 12px;
  }
`;

export default Confirmation;
