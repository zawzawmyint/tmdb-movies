import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <Box my={2}>
      {movies?.length > 0 ? (
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={4} md={3} lg={3} key={movie}>
              <MovieCard key={movie} movie={movie} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {"No Movies Available"}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default MovieGrid;
