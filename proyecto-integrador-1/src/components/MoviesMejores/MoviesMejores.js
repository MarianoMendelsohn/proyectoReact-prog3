import React, { Component } from 'react';
import './styles.css'


class MoviesMejores extends Component {
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
                textoVerMas: 'Ocultar Descripción'
            })
        } else {
            this.setState({
                descripcion: 'oculta', 
                textoVerMas: 'Ver Descripción'
            })
        }
    }

    agregarFav(){
        this.props.setFavs(current => [...current , this.props.lasMejoresData.id])
    }
           
    render() {
        
        return(
            <>
            <article className='card'>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.props.lasMejoresData.poster_path}`} alt="Cartel de película" />
                <h2 >{this.props.lasMejoresData.title}</h2>
                <div className='presente'>
                <div className='descripcion'>
                     <button onClick={() => this.verDescripcion()} className='overview'> {this.state.textoVerMas} </button>
                     <p className={this.state.descripcion}>{this.props.lasMejoresData.overview}</p>
                </div>
                </div> 
                <div>
                    
                        <button>Ir a detalle</button>
                        <button onClick={() => this.agregarFav()} >Agregar a Favoritos</button>
                        {/* <button onClick={() => this.props.setFavs((prev) => {  return [...prev, this.props.lasMejoresData.title]})  } >  Argregar a favoritos </button>
     */}
                    {/* <button onClick={() => this.adminFavoritos(this.props.datosPeliculasPop.id)}>{this.state.favsLegend}</button> */}
                </div>

            </article>
            </>
        )
    }

}
export default MoviesMejores;