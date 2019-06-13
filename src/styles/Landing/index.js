import styled from "styled-components";

const Landing = styled.div`
  font-family: open-sans;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    font-family: Raleway;
    font-size: 18px;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 65px;
    background-image: url("images/landing-header-background.jpg");
    background-size: cover;
    height: 25%;
  }
  label {
    font-family: open-sans;
    font-size: 12px;
  }
  .middle {
    height: 25%;
    text-align: center;
    padding-left: 22px;
    padding-right: 17px;
    h2 {
      font-family: Raleway;
    }
  }
  .flow-container {
    display: flex;
    justify-content: center;
    margin-bottom: 44px;
    img {
      height: 54px;
      width: 54px;
      margin-bottom: 32px;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    div:first-child > img {
      width: 38px;
    }
    div:last-child > img {
      height: 36px;
      margin-bottom: 50px;
    }
  }
  .disclaimer-container {
    display: flex;
    flex-flow: row wrap;
    padding-left: 18px;
    padding-right: 13px;
    margin-bottom: 51px;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      width: 50%;
      img {
        width: 46px;
        height: 39px;
        padding-right: 5px;
      }
      p {
        font-size: 12px;
        width: 135px;
        height: 40%;
      }
    }
  }
`;

export default Landing;
