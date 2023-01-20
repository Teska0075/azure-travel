import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import HeroTitle from "./HeroTitle/HeroTitle";
import SearchInput from "./SearchInput/SearchInput";
const HeroContents = () => {
  return (
    <Grid
      sx={{
        top: 0,
        position: "absolute",
        padding: 15,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeroTitle />
      <SearchInput />
    </Grid>
  );
};

export default HeroContents;
