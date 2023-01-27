import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Boxshadow from "../../components/Hero/HeroContents/BoxShadow/BoxShadow";
import HeroContents from "../../components/Hero/HeroContents/HeroContents";
import NavBar from "../../components/Hero/Navigation/NavBar";
import MainContents from "../../components/Main";

const Home = () => {
  const newLogged = localStorage.getItem("isLogged");

  const [isLogged, setIsLogged] = useState(newLogged);

  const logOut = () => {
    localStorage.setItem("isLogged", false);
    setIsLogged(false);
  };

  if (isLogged === "true") {
    return (
      <Grid>
        <Button onClick={logOut}>LOG OUT</Button>
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
  } else {
    return <Navigate replace to="/" />;
  }
};

export default Home;
