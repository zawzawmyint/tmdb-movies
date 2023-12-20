import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ handleChange }) => {
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      spacing={1}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 500,
        backgroundColor: "#e6f9ff",
        py: 3,
      }}
    >
      <Typography variant="h4" fontWeight={"bold"}>
        TMDB Movies
      </Typography>
      <Box width={"80%"}>
        <SearchBar handleChange={handleChange} />
      </Box>
    </Stack>
  );
};

export default Header;
