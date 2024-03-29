import React from "react";
import { Navbar } from "reactstrap";
import Img from "../images/butter-w.png";
const Header = props => {
  return (
    <div>
      <Navbar color="dark" light>
        <div style={{ display: "block", width: "200px" }} className="mx-auto">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://buttercms.com"
          >
            <img alt="logo pic" style={{ width: "200px" }} src={Img} />
          </a>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
