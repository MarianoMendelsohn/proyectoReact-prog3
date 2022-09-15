import React, { Component } from 'react';
import './styles.css'


class MoviesPopulares extends Component {
    constructor(props){
        super(props)
            this.state={
                descripcion: 'oculta',
                textoVerMas: 'Ver descripción',
        }
    
    }

    verDescripcion(){
        if(this.state.descripcion === 'oculta'){
            this.setState({
                descripcion: 'presente',
                textoVerMas: 'Ocultar descripción'
            })
        } else {
            this.setState({
                descripcion: 'oculta', 
                textoVerMas: 'Ver descripción'
            })
        }
    }

    render() {
        return(
            <>
            <article className='card'>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.props.popularesData.poster_path}`} alt="Cartel de película" />
                <h2 >{this.props.popularesData.title}</h2>
                <div className='presente'>
                <div className='descripcion'>
                    <button onClick={() => this.verDescripcion()} className='overview'> {this.state.textoVerMas} </button>
                    <p className={this.state.descripcion}>{this.props.popularesData.overview}</p>
                    
                </div>
                </div>
                <div>
                    
                        <button>Ir a detalle</button>
    
                    {/* <button onClick={() => this.adminFavoritos(this.props.datosPeliculasPop.id)}>{this.state.favsLegend}</button> */}
                </div>

            </article>
            </>
        )
    }

}
export default MoviesPopulares;