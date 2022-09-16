import React from "react";
import { useState, useEffect } from "react";

const Card = ({ id }) => {
  const [pelicula, setPelicula] = useState();
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPelicula(data.results);
      })
      .catch((error) => console.log(error))
  });
  console.log(pelicula);
  return (
    <div>
      <img />
      <h1>Holas</h1>
      <p></p>
    </div>
  );
};

export default Card;
