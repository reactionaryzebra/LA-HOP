import styled from "styled-components";

const Foot = styled.footer`
  background-color: rgb(22 162 184);
  color: white;
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans";
  font-size: 12px;
  letter-spacing: 3px;
  position: absolute;
  bottom: 0;
  a {
    color: white;
    text-decoration: none;
  }
  a:active {
    color: white;
  }
  a:visited {
    color: white;
  }
`;

export default Foot;
