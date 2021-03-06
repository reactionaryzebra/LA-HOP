import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoIosKeypad } from "react-icons/io";
import * as ROUTES from "../../constants/routes";
import Nav from "../../styles/Nav";

const NavBar = () => (
  <Nav>
    <IoIosKeypad color="white" />
    <div>
      <img src="images/logo.png" />
      <NavLink to={ROUTES.LANDING}>LA-HOP</NavLink>
    </div>
    <FaUser color="white" />
  </Nav>
);

export default NavBar;
