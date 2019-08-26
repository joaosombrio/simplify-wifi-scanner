import React, { Component } from 'react'
import styled from 'styled-components'
import ScanButton from './ScanButton'
import WifiList from './WifiList'
import TabSelector from './TabSelector'
import WindowBar from './WindowBar'

class MainPage extends Component {
  render() {
    return (
      <Container className="Relative">
        <WindowBar />
        <TabSelector />
        <WifiList list={this.props.list} />
        <ScanButton />
      </Container>
    )
  }
}

const Container = styled.body`
  height: 100vh;
  width: 100vw;
  background-color: white;
`

export default MainPage
