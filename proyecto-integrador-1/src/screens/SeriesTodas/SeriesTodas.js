import React from "react";
import { useEffect, useState } from "react";
import '../DelMomento/style.css'

const SeriesTodas = () => {
  const [seriesDelMomento, setSeriesDelMomento] = useState();
  useEffect(() => {
    fetch(
      `"https://api.themoviedb.org/3/tv/top_rated?api_key=ab1dad43417703bd59209ba154fb4880"`
    )
      .then((response) => response.json())
      .then((actualData) => setSeriesDelMomento(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  
  console.log(seriesDelMomento);
  return (
    <div className="delMomento">
        
      {seriesDelMomento?.results?.map((m, idx) => (
        <div key={idx}>
          <img alt={m.title} src={`https://image.tmdb.org/t/p/w342/${m.poster_path}`} />
          <h1>{m.title}</h1>
          <p>{m.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default SeriesTodas;