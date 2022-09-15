import React from "react";
import { useEffect, useState } from "react";
import './style.css'

const DelMomento = () => {
  const [peliculasDelMomento, setPeliculasDelMomento] = useState();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=ab1dad43417703bd59209ba154fb4880&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((actualData) => setPeliculasDelMomento(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  
  console.log(peliculasDelMomento);
  return (
    <div className="delMomento">
        
      {peliculasDelMomento?.results?.map((m, idx) => (
        <div key={idx}>
          <img alt={m.title} src={`https://image.tmdb.org/t/p/w342/${m.poster_path}`} />
          <h1>{m.title}</h1>
          <p>{m.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default DelMomento;