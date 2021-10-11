import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "7px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h5" color="primary">
        Coming Soon
      </Typography>
    </div>
  );
};

export default Footer;
