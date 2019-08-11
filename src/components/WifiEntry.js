import React, { Component } from "react";
import styled from 'styled-components'
import SignalBars from "./SignalBars";

class WifiEntry extends Component {
  render = () => (
    <Container>
      <div>{this.props.name}</div>
      <div>{this.props.channel}</div>
      <div><SignalBars bars={getSignalBarsCount(this.props.signalStrength)} /></div>
    </Container>
  )
}

const getSignalBarsCount = strength => Math.ceil(strength / 20)

const Container = styled.div`
display: flex;
flex-direction: row;
padding: 8px;
`

export default WifiEntry;
