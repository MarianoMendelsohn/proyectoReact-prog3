import React, { Component, useEffect, useState } from "react";
import "./style.css";
import MoviesPopulares from "../../components/MoviesPopulares/MoviesPopulares";
import MoviesMejores from "../../components/MoviesMejores/MoviesMejores";
import { Link } from "react-router-dom";
// import Buscador from '../Buscador/Buscador'

let pelisPopulares =
  "https://api.themoviedb.org/3/movie/popular?api_key=ab1dad43417703bd59209ba154fb4880&language=en-US&page=1";
let mejoresPelis =
  "https://api.themoviedb.org/3/movie/popular?api_key=ab1dad43417703bd59209ba154fb4880";

const Home = ({ setFavs }) => {
  const [masPopulares, setMasPopulares] = useState([]);
  const [lasMejores, setLasMejores] = useState([]);

  useEffect(() => {
    fetch(pelisPopulares)
      .then((response) => response.json())
      .then((data) => {
        setMasPopulares(data.results);
      })
      .catch((error) => console.log(error));

    fetch(mejoresPelis)
      .then((response) => response.json())
      .then((data) => {
        setLasMejores(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home">
      <h1 className="sectionTitles">Peliculas populares</h1>
      <section className="cardContainer">
        {masPopulares.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          masPopulares
            .slice(0, 3)
            .map((Pelicula, idx) => (
              <MoviesPopulares
                key={Pelicula.name + idx}
                popularesData={Pelicula}
                setFavs={setFavs}
              />
            ))
        )}
      </section>
      <Link to={"/populares"}>
        <li className="link">Ver todas</li>
      </Link>

      <h1 className="sectionTitles">Las peliculas del momento</h1>
      <section className="cardContainer">
        {lasMejores.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          lasMejores
            .slice(0, 3)
            .map((pelicula, idx) => (
              <MoviesMejores
                key={pelicula.name + idx}
                lasMejoresData={pelicula}
                setFavs={setFavs}
              />
            ))
        )}
      </section>
    </div>
  );
};

export default Home;