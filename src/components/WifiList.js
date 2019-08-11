import React, { Component } from 'react'
import styled from 'styled-components'
import WifiEntry from './WifiEntry'

class WifiList extends Component {
  render = () => (
    <Container>
      {this.props.list.map(wifi => (<WifiEntry {...wifi} />))}
    </Container>
  )
}

const Container = styled.div`
  > * {
    :nth-child(even) {
      background-color: #ededed;
    }
  }
`

export default WifiList
