import React, {Component} from "react";
import {connect} from "react-redux";
import {fetch_start} from "../store/actions/fetchActions";
import Loader from "./loader";
import Clock from "./clock";

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
    let content = this.props.loading ? (
      <Loader />
    ) : (
      <div style={backgroundStyle}>
        <Clock />
      </div>
    );
    return content;
  }
}

const mapStateToProps = state => {
  return {
    pictureUrl: state.background.image,
    loading: state.background.loading
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
