import { Box, TextField, useMediaQuery } from "@mui/material";
import React from "react";

const SearchBar = ({ handleChange }) => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <TextField
        id="filled-search"
        label="Search..."
        type="search"
        size="small"
        sx={{ width: isNonMobileScreens ? "50%" : "100%" }}
        InputProps={{ sx: { borderRadius: 10 } }}
        onChange={(e) => handleChange(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
