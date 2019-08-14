import React, { Component } from "react";
import ScanButton from "./ScanButton";
import styled from "styled-components";
import WifiList from "./WifiList";
import TabSelector from "./TabSelector"

class MainPage extends Component {
  render() {
    return (
      <Container className="Relative">
        <TabSelector />
        <WifiList list={this.props.list} />
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
