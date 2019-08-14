import React, { Component } from 'react'
import styled from 'styled-components'
import simplifiLogo from '../assets/simplifiLogo.svg'
import minimize from '../assets/minimize.svg'
import maximize from '../assets/maximize.svg'
import close from '../assets/close.svg'

class WindowBar extends Component {
  render = () => (
    <Container>
      <Logo><img src={simplifiLogo}/></Logo>
      <div>
        <Button className="Svg"><img src={minimize}/></Button>
        <Button className="Svg"><img src={maximize}/></Button>
        <Button className="Svg"><img src={close}/></Button>
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
  .Svg {
    img {
      height: 18px;
      width: 18px;
    }
  }
`

const Logo = styled.div`
padding-left: 16px;
line-height: 30px;
img {
  stroke: #32c864;
  color: red;
  height: 30px;
}
`

const Button = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 30px;
  height: 30px;
  font-size: 24px;
  text-align: center;
  box-shadow: none;
  background-color: transparent;
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