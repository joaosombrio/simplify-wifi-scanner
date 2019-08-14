import React, {Component} from 'react'
import styled from 'styled-components'

class TabSelector extends Component {
  state = {
    selectedTab: 0
  }

  getActive = key => key == this.state.selectedTab ? { backgroundImage: 'linear-gradient(to bottom right, #32c864, #32c896)', color: 'white' } : {}

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
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 1px solid #ccc;
  .Tab {
    width: 100%;
    min-width: max-content;
    height: 100%;
    font-size: 20px;
    padding: 2px 24px;
    text-align: center;
    align-self: center;
    vertical-align: middle;
    :hover {
      color: #32c864;
      cursor: pointer;
    }
  }
  `

export default TabSelector