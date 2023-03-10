import React from "react";
import { Grid } from "@mui/material";

const Boxshadow = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        width: "100%",

        bottom: 0,
        zIndex: "0",
        height: "14%",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 89.58%)",
      }}
    ></Grid>
  );
};

export default Boxshadow;
