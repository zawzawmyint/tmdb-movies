import { Box } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box textAlign={"center"}>
      <img src="./spinner.svg" alt="spinner" width={70} />
    </Box>
  );
};

export default Loading;
