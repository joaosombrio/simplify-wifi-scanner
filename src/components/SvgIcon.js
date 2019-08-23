import React, { Component } from "react"

class SvgIcon extends Component {
  state = {
    icon: '',
  }
  componentDidMount = () => {
    this.fetchSvgString(this.getIconUrl(this.props.icon), this.props.style)
  }

  getIconUrl = icon => {
    return process.env.PUBLIC_URL + icon
  }

  fetchSvgString = (iconUrl, style) => (
    fetch(iconUrl)
      .then(icon => icon.text())
      .then(iconString => {
        console.log(this.processIcon(iconString, style))
        this.processIcon(iconString, style)
      })
      .then(icon => {
        console.log(icon)
        this.setState({ icon: icon })
      })
      .catch(error => console.error(error))
  )

  processIcon = (iconString, newStyle) => {
    const newIcon = iconString.replace(/(<style>)((\n.*)*)(<\/style>)/, `$1${newStyle}$4`)
    console.log(newIcon)
    return newIcon
  }

  render = () => <div >{this.state.icon}</div>
}

export default SvgIcon