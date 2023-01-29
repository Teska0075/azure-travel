import { Grid } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import TravelCommunity from "./Community";
import Offers from "./Offers";
import PropertyType from "./Property";

const MainContents = () => {
  return (
    <Grid
      sx={{
        width: "100%",
        paddingLeft: 15,
      }}
    >
      <Offers />
      <PropertyType/>
      <Banner/>
      <TravelCommunity/>
    </Grid>
  );
};

export default MainContents;
