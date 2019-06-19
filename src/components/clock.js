import React, { Component } from "react";

const addZero = i => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

const returnDay = i => {
  switch (i) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      break;
  }
};

class Clock extends Component {
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  state = {
    time: new Date()
  };
  tick = () => {
    this.setState({
      time: new Date()
    });
  };
  render() {
    let hour = addZero(this.state.time.getHours());
    let minute = addZero(this.state.time.getMinutes());
    let seconds = addZero(this.state.time.getSeconds());
    return (
      <div>
        <h2 className="display-1 text-white bg-dark">{`${hour}:${minute}:${seconds}`}</h2>
        <h3 className="display-3 text-center bg-light">
          {this.state.time.toLocaleDateString()}
        </h3>
        <h3 className="text-center text-primary bg-light">
          {returnDay(this.state.time.getDay())}
        </h3>
      </div>
    );
  }
}

export default Clock;
