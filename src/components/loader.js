import React from "react";
import {Spinner} from "reactstrap";

export default class Example extends React.Component {
  render() {
    const loaderStyle = {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "400px",
      margin: "auto",
      width: "3rem",
      height: "3rem"
    };
    return (
      <div style={loaderStyle}>
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="danger" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="info" />

        <Spinner type="grow" color="dark" />
      </div>
    );
  }
}
