import { Grid } from "@mui/material";
import React from "react";
import HeroContents from "../../components/Hero/HeroContents/HeroContents";
import NavBar from "../../components/Hero/Navigation/NavBar";
const Home = () => {
  return (
    <Grid>
      <NavBar />
      <img src="/images/hero.png" width={"100%"}></img>
      <HeroContents />
    </Grid>
  );
};

export default Home;
