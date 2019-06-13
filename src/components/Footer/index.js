import React from "react";
import Foot from "../../styles/Foot";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Footer = () => (
  <Foot>
    <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
  </Foot>
);

export default Footer;
