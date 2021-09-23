import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import "./Banner.css";

function Banner(props) {

    const BASE_P = "http://image.tmdb.org/t/p/original";

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function datafetch() {
      const request = await axios.get(props.Url);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * props.Url.data.results.length - 1)
        ]
        
      );
     console.log(movie)
    }
    datafetch();
  });

  console.log(movie);

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(BASE_P + ${movie.poster_path}}
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
      </div>
    </header>
  );
}

export default Banner;
