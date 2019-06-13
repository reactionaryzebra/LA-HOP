import styled from "styled-components";

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: open-sans;
  button {
    width: 376px;
    height: 37px;
    margin-top: 19px;
    margin-bottom: 47px;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 206px;
  }
  img {
    width: 100%;
  }
  h2 {
    font-family: Raleway;
    font-size: 26px;
    margin-bottom: 0;
  }
  h3 {
    font-size: 18px;
  }
  p {
    font-size: 12px;
    width: 233px;
  }
  .messageUs {
    display: flex;
    flex-direction: column;
    label {
      font-size: 10px;
    }
    form {
      display: flex;
      flex-direction: column;
      align-self: flex-start;
      text-align: left;
    }
  }
  .phoneNumbers {
    display: flex;
    flex-direction: column;
    margin: 0;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export default Contact;
