import React, { Component } from 'react';
import './styles.css'


class MoviesPopulares extends Component {
    constructor(props){
        super(props)
            this.state={

        }
    
    }


    render() {
        return(
            <>
            <article>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.props.popularesData.poster_path}`} alt="Cartel de película" />
                <h2 >{this.props.popularesData.title}</h2>
                <div>
                    {/* <p onClick={() => this.mostrarDescripcion()} className='OverViewCard'> {this.state.textoMostrarDescripcion} </p> */}
                    <p>{this.props.popularesData.overview}</p>
                    
    
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
export default MoviesPopulares