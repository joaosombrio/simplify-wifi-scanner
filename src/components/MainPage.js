import React, { Component } from "react";
import ScanButton from "./ScanButton";
import styled from "styled-components";
import WifiConnections from "data/placeholders/data-connections.json";
import WifiList from "./WifiList";

class MainPage extends Component {
  render() {
    return (
      <Container className="Relative">
        <WifiList list={WifiConnections} />
        <ScanButton />
      </Container>
    );
  }
}

const Container = styled.body`
  height: 100vh;
  width: 100vw;
  background-color: white;
`;

export default MainPage;
