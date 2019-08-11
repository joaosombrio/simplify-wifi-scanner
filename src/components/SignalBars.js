import React, { Component } from 'react';
import styled from 'styled-components'

class SignalBars extends Component {
  render = () => {
    return (
      <Container>
        {this.props.bars}
      </Container>
    )
  }
}

const Container = styled.div``


export default SignalBars;