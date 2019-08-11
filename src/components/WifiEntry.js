import React, { Component } from "react";
import styled from 'styled-components'

class WifiEntry extends Component {
  render = () => (
      <Container>
        <div>{this.props.name}</div>
        <div>{this.props.channel}</div>
        <div>{this.props.signalStrength}</div>
      </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: row;
padding: 8px;
`

export default WifiEntry;
