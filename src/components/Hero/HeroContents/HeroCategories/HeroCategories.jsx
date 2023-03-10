import React from "react";

import SingleCategory from "./SingleCategory/SingleCategory";
import { categories } from "../../../../data/HeroCategoriesIcon";
import { Box, Grid, Typography } from "@mui/material";

const HeroCategories = ({ setIsCatDetail }) => {
  return (
    <Grid sx={{ marginTop: "4%", paddingRight: 15 }}>
      <Grid>
        <Typography
          variant="h3"
          sx={{ color: "white", fontWeight: "700", width: "900px" }}
        >
          Top Categories
        </Typography>
      </Grid>
      <Grid sx={{ marginTop: "2%" }}>
        <Box sx={{ display: "flex", gap: "6% " }}>
          {categories.map((card, i) => (
            <SingleCategory
              key={i}
              card={card}
              setIsCatDetail={setIsCatDetail}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeroCategories;
