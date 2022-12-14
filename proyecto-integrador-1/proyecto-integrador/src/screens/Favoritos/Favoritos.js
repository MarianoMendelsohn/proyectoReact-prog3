import React, { Component } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import SeriesCard from "../../components/SeriesCard/SeriesCard";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            series: [],
        }
    }

    componentDidMount() {
        let favoritos = [];
        let recuperoStorage = localStorage.getItem("favoritos")
        
        if (recuperoStorage !== null) {

            favoritos = JSON.parse(recuperoStorage) 

            favoritos.forEach(unIdFavorito => {
                let api_key = "dbc2844dc7f234cc66f323810714162c";

                fetch(`https://api.themoviedb.org/3/movie/${unIdFavorito}?api_key=${api_key}&language=en-US&page=1`)
                    .then(res => res.json())
                    .then(data => this.addPeliculaAFavoritos(data) )
                    .catch(e => console.log(e))
            })                
        }

    }

    addPeliculaAFavoritos = (x) => {
        let _peliculas = this.state.peliculas;
        _peliculas.push(x);
        this.setState({ peliculas: _peliculas })        
    }

  


    render() {
        return (
            <>
                <h2> Películas favoritas</h2>
                <section className='cardContainer'>
                    {
                        this.state.peliculas.map((unaPelicula, idx) => <MovieCard key={unaPelicula.title + idx} datosPelicula={unaPelicula} />)
                    }
                    

                </section>
                <h2>Mis series favoritas</h2>
                <section className='cardContainer'>
                    {
                        this.state.series.map((unaSerie, idx) => <SeriesCard key={unaSerie.title + idx} datosSerie={unaSerie} />)
                    }
                </section>

            </>
        )


    }
}

export default Favoritos;