import { Container, Paper, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieAll from "../components/Movies/MovieAll";
import MovieFavoriates from "../components/Movies/MovieFavoriates";
import Tabs from "../components/Tabs/Tabs";
import AlertBox from "../components/generic/AlertBox";
import Header from "../components/generic/Header";
import LoadMore from "../components/generic/LoadMore";
import Loading from "../components/generic/Loading";
import {
  getMoviesList,
  searchMoviesList,
} from "../endpoints/movielistendpoints";

const MoviesList = () => {
  const [isAlert, setIsAlert] = React.useState(false);
  const [viewedTab, setViewedTab] = useState(0);
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const fetchMoviesList = () => {
    setIsLoading(true);

    const params = {
      page: 1,
      value: search,
    };
    const response = !isSearch ? getMoviesList() : searchMoviesList(params);
    response
      .then((response) => {
        setMoviesList(response.results);
      })
      .catch((error) => {
        console.log(error);
        setIsAlert(true);
      })
      .finally((done) => {
        setIsLoading(false);
        setIsSearch(false);
      });
  };

  const handleChange = (value) => {
    if (value === "") {
      setSearch(value);
      setIsSearch(false);
    } else {
      setSearch(value);
      setIsSearch(true);
    }
  };
  useEffect(() => {
    fetchMoviesList();
    return () => {};
  }, [search]);
  return (
    <Container maxWidth={"lg"}>
      <Paper sx={{ p: 3, backgroundColor: "#e6f9ff", borderRadius: 3 }}>
        <Stack spacing={3}>
          <Header handleChange={handleChange} />
          <Tabs viewedTab={viewedTab} setViewedTab={setViewedTab} />
          {isLoading && <Loading />}
          <AlertBox
            isAlert={isAlert}
            setIsAlert={setIsAlert}
            severity={"error"}
            title={"Error"}
            message={"Somethine went worng!"}
          />
          {viewedTab === 0 && !isLoading && <MovieAll movies={moviesList} />}
          {viewedTab === 0 && !isLoading && <LoadMore search={search} />}
          {viewedTab === 1 && <MovieFavoriates search={search} />}
        </Stack>
      </Paper>
    </Container>
  );
};

export default MoviesList;
