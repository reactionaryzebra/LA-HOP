import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 51px;
  padding: 14px;
  background-image: linear-gradient(
    rgba(125, 125, 125, 0.5),
    rgba(70, 70, 70, 0.5)
  );
  a {
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
