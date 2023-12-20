import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  getMoviesList,
  searchMoviesList,
} from "../../endpoints/movielistendpoints";
import MovieGrid from "../Movies/MovieGrid/MovieGrid";
import AlertBox from "./AlertBox";
import Loading from "./Loading";

const LoadMore = ({ search = "" }) => {
  const [isAlert, setIsAlert] = React.useState(false);
  const { ref, inView } = useInView();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(2);

  const getMovies = (page) => {
    const params = {
      page: page,
      value: search,
    };

    const response = search ? searchMoviesList(params) : getMoviesList(page);
    response
      .then((response) => {
        setMovies([...movies, ...response.results]);
        setPage((prev) => prev + 1);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    if (inView) {
      getMovies(page);
    }

    return () => {};
  }, [inView]);
  return (
    <>
      <AlertBox
        isAlert={isAlert}
        setIsAlert={setIsAlert}
        severity={"error"}
        title={"Error"}
        message={"Somethine went worng!"}
      />
      {movies.length > 0 && <MovieGrid movies={movies} />}
      <section ref={ref}>
        <Loading />
      </section>
    </>
  );
};

export default LoadMore;
