import React from "react";
import { Grid } from "@mui/material";

import Footer from "../../components/Footer";
import HeroContents from "../../components/Hero/HeroContents/HeroContents";
import MainContents from "../../components/Main";

const Home = () => {

  return (
    <Grid sx={{ width: "100vw" }}>
      
      <Grid
        sx={{
          background: "url(images/hero.png) no-repeat  ",
          backgroundSize: "cover",
          boxShadow: "inset 0px -200px 90px -90px rgb(255,255,255)",
          width: "100%",
          height: "1500px",
        }}
      >
        <HeroContents />
      </Grid>
      <MainContents />
      <Footer />
    </Grid>
  );
};

export default Home;
