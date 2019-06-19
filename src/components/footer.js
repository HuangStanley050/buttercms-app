import React from "react";
import { Navbar } from "reactstrap";
import Img from "../images/butter-y.png";
const Footer = props => (
  <div style={{ marginTop: "auto" }}>
    <Navbar color="dark" light>
      <div style={{ display: "block", width: "200px" }} className="mx-auto">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://buttercms.com"
        >
          <img style={{ width: "200px" }} src={Img} alt="logo pic" />
        </a>
      </div>
    </Navbar>
  </div>
);

export default Footer;
