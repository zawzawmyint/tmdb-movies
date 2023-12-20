import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import React from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  removeMovFavs,
  setMovFavs,
} from "../../../features/movieFavoriates/movieFavSlice";

const MovieCard = ({ movie }) => {
  const favMovies = useSelector((state) => state.movFavorites.movieFavoriates);
  const index = favMovies?.findIndex((item) => item.id === movie.id);
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        borderRadius: 3,
        minHeight: 400,
        maxHeight: 400,
        ":hover": {
          boxShadow: 7,
          opacity: 0.7,
        },
      }}
    >
      <CardContent sx={{ mt: 1 }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{
            width: "100%",
            objectFit: "cover",
            maxHeight: 290,
            minHeight: 290,
            borderRadius: 10,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography fontWeight={"bold"}>{movie.title}</Typography>

          {index !== -1 ? (
            <IconButton onClick={() => dispatch(removeMovFavs(movie.id))}>
              <IoHeart color="red" />
            </IconButton>
          ) : (
            <IconButton onClick={() => dispatch(setMovFavs(movie))}>
              <IoHeartOutline />
            </IconButton>
          )}
        </Box>
        <Box>
          <Typography>{movie.release_date}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
