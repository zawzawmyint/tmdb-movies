import React from "react";
import { useSelector } from "react-redux";
import MovieGrid from "./MovieGrid/MovieGrid";

const MovieFavoriates = ({ search }) => {
  const movieFavs = useSelector((state) => state.movFavorites.movieFavoriates);
  const searchItem = search.toLowerCase();
  const movies = search
    ? movieFavs.filter(
        (mov) =>
          mov.title.toLowerCase().includes(searchItem) ||
          mov.release_date.toLowerCase().includes(searchItem)
      )
    : movieFavs;
  return <MovieGrid movies={movies} />;
};

export default MovieFavoriates;
