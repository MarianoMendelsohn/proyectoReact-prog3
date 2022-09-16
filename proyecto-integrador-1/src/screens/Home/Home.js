import React, { Component, useEffect, useState } from "react";
import "./style.css";
import MoviesPopulares from "../../components/MoviesPopulares/MoviesPopulares";
import MoviesMejores from "../../components/MoviesMejores/MoviesMejores";
import { Link } from "react-router-dom";
// import Buscador from '../Buscador/Buscador'

let pelisPopulares =
  "https://api.themoviedb.org/3/movie/popular?api_key=ab1dad43417703bd59209ba154fb4880&language=en-US&page=1";
let seriesPopulares =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=ab1dad43417703bd59209ba154fb4880";

const Home = ({ setPelisFavs, setSeriesFavs }) => {
  const [peliculasPopulares, setPeliculasPopulares] = useState([0, -1]);
  const [seriesRated, setSeriesPopulares] = useState([]);

  useEffect(() => {
    fetch(pelisPopulares)
      .then((response) => response.json())
      .then((data) => {
        setPeliculasPopulares(data.results);
      })
      .catch((error) => console.log(error));

    fetch(seriesPopulares)
      .then((response) => response.json())
      .then((data) => {
        setSeriesPopulares(data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="home">
      <h1 className="sectionTitles">Peliculas populares</h1>
      <section className="cardContainer">
        {peliculasPopulares.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          peliculasPopulares
            .slice(0, 3)
            .map((Pelicula) => (
              <MoviesPopulares
                key={Pelicula.id}
                popularesData={Pelicula}
                setFavs={setPelisFavs}
              />
            ))
        )}
      </section>
      <Link to={"/verTodasPeliculas"}>
        <li className="link">Ver todas</li>
      </Link>
      <Link to={"/favoritosPelis"}>
        <li className="link">Favoritos</li>
      </Link>

      <h1 className="sectionTitles">Las peliculas del momento</h1>
      <section className="cardContainer">
        {seriesRated.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          seriesRated
            .slice(0, 3)
            .map((pelicula) => (
              <MoviesMejores
                key={pelicula.id}
                lasMejoresData={pelicula}
                setFavs={setSeriesFavs}
              />
            ))
        )}
      </section>
      <Link to={"/verTodasSeries"}>
        <li className="link">Ver todas</li>
      </Link>
    </div>
  );
};

export default Home;