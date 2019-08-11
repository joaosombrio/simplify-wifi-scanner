import React, { Component } from "react";
import WifiEntry from "./WifiEntry";

class WifiList extends Component {
  render = () => {
    return (
      <div>
        {this.props.list &&
          this.props.list.map(wifi => {
            <WifiEntry {...wifi} />;
          })}
      </div>
    );
  };
}

export default WifiList;
