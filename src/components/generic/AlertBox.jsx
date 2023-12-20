import { Alert, AlertTitle, Snackbar } from "@mui/material";
import React from "react";

const AlertBox = ({ isAlert, setIsAlert, severity, title, message }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsAlert(false);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={isAlert}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertBox;
