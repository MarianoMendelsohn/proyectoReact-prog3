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
      <div className='contenedor1'>
      <img  src={this.props.info.cover} alt='img de la canción'/>
      <h4>{this.props.info.title}</h4>
      <p></p>
      </div>
    )
  }
}
export default Tarjeta