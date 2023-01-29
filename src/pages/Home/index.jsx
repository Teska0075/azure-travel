import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Boxshadow from "../../components/Hero/HeroContents/BoxShadow/BoxShadow";
import HeroContents from "../../components/Hero/HeroContents/HeroContents";
import NavBar from "../../components/Hero/Navigation/NavBar";
import MainContents from "../../components/Main";

const Home = () => {
  // const newLogged = localStorage.getItem("isLogged");

  // const [isLogged, setIsLogged] = useState(newLogged);

  // const logOut = () => {
  //   localStorage.setItem("isLogged", false);
  //   setIsLogged(false);
  // };

  // if (isLogged === "true") {
    
  // } else {
  //   return <Navigate replace to="/" />;
  // }

  return (
    <Grid sx={{width:"100vw"}}>
      <NavBar />
      <Grid sx={{ background: "url(images/hero.png) no-repeat  ",
        backgroundSize: "cover",
        boxShadow: "inset 0px -200px 90px -90px rgb(255,255,255)",
        width: "100%",
        height: "1500px",
    }}>
        <HeroContents />
      </Grid>
      <MainContents />
      <Footer/>
    </Grid>
  );
};

export default Home;
