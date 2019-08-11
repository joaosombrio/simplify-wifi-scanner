import React, { Component } from "react";
import styled from 'styled-components'
import SignalBars from "./SignalBars";

class WifiEntry extends Component {
  render = () => (
    <Container>
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.channel}</div>
      </div>
      <div className="PR8"><SignalBars bars={getSignalBarsCount(this.props.signalStrength)} /></div>
    </Container>
  )
}

const getSignalBarsCount = strength => Math.ceil(strength / 25)

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 8px;
`

export default WifiEntry;
