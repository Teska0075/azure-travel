import { Grid } from "@mui/material";
import React from "react";
import CategoriesComp from "../../components/Categories";
import HeroCategories from "../../components/Hero/HeroContents/HeroCategories/HeroCategories";
import HeroTitle from "../../components/Hero/HeroContents/HeroTitle/HeroTitle";
import SearchInput from "../../components/Hero/HeroContents/SearchInput/SearchInput";

const CategoriesPage = ({ setIsCatDetail, isCatDetail }) => {
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
        <Grid
          sx={{
            paddingTop: 15,
            paddingLeft: 15,
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <HeroTitle />
          <SearchInput />
          <HeroCategories setIsCatDetail={setIsCatDetail} />
        </Grid>
      </Grid>
      <CategoriesComp isCatDetail={isCatDetail} />
    </Grid>
  );
};

export default CategoriesPage;
