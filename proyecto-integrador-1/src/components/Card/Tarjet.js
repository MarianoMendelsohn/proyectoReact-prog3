import React, { Component } from 'react'
import './styles.css'

class Tarjeta extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
  render() {
    return (
      <h4>{this.props.info.title}</h4>
    )
  }
}
export default Tarjeta