import { Grid } from "@mui/material";
import React from "react";
import Boxshadow from "../../components/Hero/HeroContents/BoxShadow/BoxShadow";
import HeroContents from "../../components/Hero/HeroContents/HeroContents";
import NavBar from "../../components/Hero/Navigation/NavBar";
import MainContents from "../../components/Main";

const Home = () => {
  return (
    <Grid>
      <NavBar />
      <Grid sx={{ position: "relative" }}>
        <img
          src="/images/hero.png"
          style={{
            width: "100%",
          }}
        ></img>
        <HeroContents />
        <Boxshadow />
      </Grid>
      <MainContents />
    </Grid>
  );
};

export default Home;
