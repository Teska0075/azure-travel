import React from "react";
import { Grid } from "@mui/material";
import HeroTitle from "./HeroTitle/HeroTitle";
import SearchInput from "./SearchInput/SearchInput";
import HeroCategories from "./HeroCategories/HeroCategories";
import VacationDestinations from "./VacationDestinations";

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
      <HeroCategories />
      <VacationDestinations />
    </Grid>
  );
};

export default HeroContents;
