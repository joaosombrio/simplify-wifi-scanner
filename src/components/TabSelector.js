import React, {Component} from 'react'
import styled from 'styled-components'

class TabSelector extends Component {
  state = {
    selectedTab: 0
  }

  getActive = key => key == this.state.selectedTab ? { backgroundColor: '#59e372', color: 'white' } : {}

  tabs = [
    {
      name: "WIFI NETWORKS"
    },
    {
      name: "CHANNELS"
    },
    {
      name: "OTHERS"
    }
  ]

  render = () => (
    <Container>
      {this.tabs.map((tab, index) => (
        <div 
          className="Tab" 
          key={index} 
          style={this.getActive(index)} 
          onClick={() => this.setState({selectedTab: index})}>
        {tab.name}
      </div>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 1px solid #ccc;
  .Tab {
    width: 100%;
    font-size: 24px;
    padding: 2px 24px;
    text-align: center;
    :hover {
      color: #59e372;
      cursor: pointer;
    }
  }
  `

export default TabSelector