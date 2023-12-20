import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { IoHeart } from "react-icons/io5";
import { RiMovieFill } from "react-icons/ri";
import { useSelector } from "react-redux";
const Tabs = ({ viewedTab = 0, setViewedTab }) => {
  const theme = useTheme();
  const favMovies = useSelector((state) => state.movFavorites.movieFavoriates);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
      sx={{
        display: "flex",
        position: "sticky",
        top: 70,
        width: "100%",
        backgroundColor: "#e6f9ff",
        zIndex: 400,
        py: 2,
      }}
    >
      <Button
        variant="contained"
        disableElevation
        sx={{
          minWidth: isNonMobileScreens ? "150px" : "50%",
          py: 1.5,
          color: theme.palette.primary.main,
          backgroundColor:
            viewedTab === 1 ? "#e6f9ff" : theme.palette.primary.main,
          borderRadius: 3,
          fontWeight: "bold",
          color: viewedTab === 1 ? "black" : "white",
          "&:hover": {
            color: "white",
          },
        }}
        onClick={() => setViewedTab(0)}
        startIcon={<RiMovieFill />}
      >
        Movies List
      </Button>
      <Button
        disableElevation
        variant="contained"
        sx={{
          minWidth: isNonMobileScreens ? "150px" : "50%",
          py: 1.5,
          fontWeight: "bold",
          color: theme.palette.primary.main,
          backgroundColor:
            viewedTab === 0 ? "#e6f9ff" : theme.palette.primary.main,
          borderRadius: 3,
          color: viewedTab === 0 ? "black" : "white",
          "&:hover": {
            color: "white",
          },
        }}
        onClick={() => setViewedTab(1)}
        startIcon={<IoHeart />}
        endIcon={`${favMovies.length}`}
      >
        Favoriate Movies
      </Button>
    </Box>
  );
};

export default Tabs;
