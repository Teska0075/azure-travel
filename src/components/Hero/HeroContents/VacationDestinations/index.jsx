import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import SingleCategory from "./SingleCategory";
import { vacationDestination as Data } from "../../../../data/VacationDestination";

const VacationDestinations = () => {
  return (
    <Grid sx={{ marginTop: "4%", zIndex: "1", width: "100%" }}>
      <Grid>
        <Typography
          variant="h3"
          sx={{ color: "white", fontWeight: "700", width: "900px" }}
        >
          Top Vacation Destinations
        </Typography>
      </Grid>
      <Grid
        sx={{
          marginTop: "2%",
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box sx={{ display: "flex", gap: "2%", padding:"1%" }}>
          {Data.map((card, i) => (
            <SingleCategory key={i} card={card} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default VacationDestinations;
