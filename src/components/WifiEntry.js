import React, { Component } from "react";

class WifiEntry extends Component {
  render = () => {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.channel}</div>
        <div>{this.props.signalStrength}</div>
      </div>
    );
  };
}

export default WifiEntry;
