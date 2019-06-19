import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Img from "../images/butter-y.png";
const Footer = props => (
  <div style={{ marginTop: "auto" }}>
    hello
    <Navbar color="dark" light>
      <NavbarBrand
        style={{ display: "block", width: "200px" }}
        href="#"
        className="mx-auto"
      >
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://buttercms.com"
        >
          <img style={{ width: "200px" }} src={Img} alt="logo pic" />
        </a>
      </NavbarBrand>
    </Navbar>
  </div>
);

export default Footer;
