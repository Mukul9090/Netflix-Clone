import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailer, settrailer] = useState("");

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  useEffect(() => {
    async function datafetched() {
      const request = await axios.get(props.Url);
      setMovies(shuffleArray(request.data.results));
    }
    datafetched();
  }, [props.Url]);
  const BASE_P = "http://image.tmdb.org/t/p/original";

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailer) {
      settrailer("");
    } else {
      movieTrailer(movie?.name || movie?.title ||"")
        .then((url) => {
          const urlParam = new URLSearchParams(new URL(url).search);
          settrailer(urlParam.get("v"));
        })
        .catch((error) =>settrailer(""));
    }
  };

  return (
    <div className="row">
      <h1>{props.title}</h1>

      <div className="row_poster">
        {movies.map((movie) => (
          <img
            className="poster"
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={BASE_P + movie.poster_path}
            alt={movie.name}
          />
        ))}
      </div>
      {trailer!="" && <YouTube videoId={trailer} opts={opts} />}
    </div>
  );
}

export default Row;
