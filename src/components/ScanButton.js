import React, { Component } from "react";
import styled from "styled-components";
import scan from "../wifi-service/scanner";

class ScanButton extends Component {
  render() {
    return <Container className="Absolute" onClick={console.log(process.platform)}>SCAN</Container>;
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
  /* background-color: #32c864; */
  background-image: linear-gradient(to bottom right, #32c864, #32c896);
  transform: translate(calc(50vw - 50%));
  bottom: 32px;
`;

export default ScanButton;
