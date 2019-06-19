import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_start } from "../store/actions/fetchActions";

class BackGround extends Component {
  componentDidMount() {
    this.props.getPicture();
    this.interval = setInterval(() => this.props.getPicture(), 3600000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const backgroundStyle = {
      backgroundImage: `url(${this.props.pictureUrl})`,
      backgroundRpeat: "no repeat",
      backgroundSize: "cover",
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    console.log(this.props.pictureUrl);
    return (
      <div style={backgroundStyle}>
        <h1>Hello World</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pictureUrl: state.background.image
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPicture: () => dispatch(fetch_start())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackGround);
