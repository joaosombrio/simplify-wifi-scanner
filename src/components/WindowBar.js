import React, { Component } from 'react'
import styled from 'styled-components'
import simplifiLogo from '../assets/simplifiLogo.svg'
import minimize from '../assets/minimize.svg'
import maximize from '../assets/maximize.svg'
import close from '../assets/close.svg'

class WindowBar extends Component {
  render = () => (
    <Container>
      <Logo><img src={simplifiLogo} style={{fill: '#32c864'}}/></Logo>
      <div>
        <Button className="Svg"><img src={minimize}/></Button>
        <Button className="Svg"><img src={maximize}/></Button>
        <Button className="Svg Close"><img src={close}/></Button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 30px;
  background-color: #EDEDED;
  display: flex;
  justify-content: space-between;
  align-content: center;
  text-align: end;
  align-content: center;
  border: 1px solid #ababab;
  -webkit-app-region: drag;
  #f8e1309c-ebbb-47da-9623-db24d09c0ba0 {
    fill: none;
    stroke: #429a5b;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-width: 2px;
  }
  .Svg {
    img {
      height: 18px;
      width: 18px;
    }
    &.Close {
      :hover {
        background-color: #ed4343;
        color: white;
        img {
          > * {
            fill: none;
            stroke: #429a5b;
            stroke-linecap: round;
            stroke-miterlimit: 10;
            stroke-width: 2px;
          }

        }
      }
    }
  }
`

const Logo = styled.div`
display: flex;
padding-left: 16px;
align-self:center;
fill: red;
img {
  fill: red;
  color: red;
  height: 25px;
}
`

const Button = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 30px;
  height: 30px;
  font-size: 24px;
  text-align: center;
  color: #32c864;
  border: 1px solid #ababab;
  border-bottom: 0;
  border-top: 0;
  :hover {
    opacity: 0.7;
    background-color: #ededed
  }
`

export default WindowBar