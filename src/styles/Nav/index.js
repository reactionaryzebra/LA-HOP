import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 51px;
  padding: 14px;
  background-image: linear-gradient(rgb(23, 162, 184), rgb(10, 121, 162));
  a {
    display: flex;
    align-items: center;
    color: white;
    font-family: Raleway;
    font-size: 30px;
    letter-spacing: 3px;
    text-decoration: none;
  }
  a:visited {
    color: "white";
  }
`;

export default Nav;
