import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_start } from "../store/actions/fetchActions";

class BackGround extends Component {
  componentDidMount() {
    //this.interval = setInterval(() => this.props.getPicture(), 1115000);
    this.props.getPicture();
  }
  componentWillUnmount() {
    //clearInterval(this.interval);
  }
  render() {
    //console.log(this.props.pictureUrl);
    const backgroundStyle = {
      backgroundImage: `url(${this.props.pictureUrl})`,
      backgroundRpeat: "no repeat",
      backgroundSize: "cover",
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    console.log(backgroundStyle);
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
