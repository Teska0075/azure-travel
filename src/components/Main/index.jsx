import { Grid } from "@mui/material";
import React from "react";
import VacationDestinations from "../Hero/HeroContents/VacationDestinations";
import Offers from "./Offers";

const MainContents = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "#ffdd00",
        width: "100%",
        marginTop: "160px",
        paddingLeft: 15,
      }}
    >
      <Offers />
    </Grid>
  );
};

export default MainContents;
