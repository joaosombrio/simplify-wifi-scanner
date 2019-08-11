import React, { Component } from "react";
import styled from "styled-components";
import scan from "../wifi-service/scanner";

class ScanButton extends Component {
  render() {
    return <Container className="Absolute" onClick={scan}>SCAN</Container>;
  }
}

const Container = styled.button`
  width: min-content;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  border: 0;
  color: white;
  background-color: #59e372;
  transform: translate(calc(50vw - 50%));
  bottom: 32px;
`;

export default ScanButton;