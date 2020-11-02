import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
const IMAGEURL = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      console.log(request);
      return request;
    }
    fetchData();
    return () => {};
  }, [fetchURL]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log(movie?.name);
      movieTrailer(movie?.name || "")
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search());
          console.log(urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      <div className="row__posters">
        {/* Container -> poster */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${IMAGEURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}></Youtube>}
    </div>
  );
}

export default Row;
