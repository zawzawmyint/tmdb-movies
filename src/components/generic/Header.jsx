import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ handleChange }) => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Stack
      direction={isNonMobileScreens ? "row" : "column"}
      width={"100%"}
      spacing={1}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 500,
        backgroundColor: "#e6f9ff",
        py: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight={"bold"}>
        TMDB Movies
      </Typography>
      <Box width={isNonMobileScreens ? "80%" : "100%"}>
        <SearchBar handleChange={handleChange} />
      </Box>
    </Stack>
  );
};

export default Header;
