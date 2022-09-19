import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import SeriesCard from "../SeriesCard/SeriesCard";
import {Link} from 'react-router-dom'


let api_key = "dbc2844dc7f234cc66f323810714162c"

class Movies extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            series: [],
        }
    }

    componentDidMount(){ 
        
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => this.setState(
            {peliculas: data.results}
        ))
        .catch(e => console.log(e))

        
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => this.setState(
            {series: data.results}
        ))
        .catch(e => console.log(e))
    }

    render(){
        

        return(
            <React.Fragment> 

            
            <div>
                <h2>Series Populares</h2>
                <Link to='/series'><h3>Ver todas las series populares</h3></Link>
            </div>
            <section className='cardContainer'>
                {
                    this.state.series.map((unaSerie,idx) => <SeriesCard key={unaSerie.title+idx} datosSerie = {unaSerie}/>)
                }
                
            </section>

            <div>
                <h2>Peliculas Populares</h2>
                <Link to='/peliculas'><h3>Ver todas las películas populares</h3></Link>
            </div>
            <section className='cardContainer'>
                {
                    this.state.peliculas.map((unaPelicula,idx) => <MovieCard key={unaPelicula.title+idx} datosPelicula = {unaPelicula}/>)
                }
                
            </section>

            

            </React.Fragment>
        )
    }
}

export default Movies