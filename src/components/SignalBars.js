import React, { Component } from 'react';
import styled from 'styled-components'

class SignalBars extends Component {

  render = () => {
    return (
      <Container className="Relative">
        {arr(this.props.bars).map(bar => <span className={`Bar${bar} Absolute BarTemplate`} style={{ transform: `transformX(calc(100% * ${bar}))`, height: `calc(10px + 10 * ${bar})` }} />)}
      </Container>
    )
  }
}

const arr = length => Array.from({ length: length }, (x, i) => 1 + i)

const Container = styled.div`
  transition: all 0.2s ease;
  width: 25px;
  height: 25px;
  padding-right: 12px;
  .BarTemplate {
    background-color: #32c864;
    width: 7px;
    bottom: 0;
  }
  .Bar1 {
    height: 7px;
    bottom: 0;
  }
  .Bar2 {
    height: 14px;
    left: 10px;
  }
  .Bar3 {
    height: 21px;
    left: 20px;
  }
  .Bar4 {
    height: 28px;
    left: 30px;
  }
`

export default SignalBars;