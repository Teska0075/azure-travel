import React from "react";
import { Grid } from "@mui/material";
import HeroContents from "../../components/Hero/HeroContents/HeroContents";
import MainContents from "../../components/Main";
import FooterTop from "../../components/Footer/Top";
import { useState } from "react";
import CategoriesPage from "../Categories";

const Home = () => {
  const [isCatDetail, setIsCatDetail] = useState("All");
  console.log(isCatDetail);
  if (isCatDetail === "All") {
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
          <HeroContents setIsCatDetail={setIsCatDetail} />
        </Grid>
        <MainContents />
        <FooterTop />
      </Grid>
    );
  } else {
    return <CategoriesPage setIsCatDetail={setIsCatDetail} />;
  }
};

export default Home;
