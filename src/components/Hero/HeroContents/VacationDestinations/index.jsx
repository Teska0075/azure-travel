import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import SingleCategory from "./SingleCategory";
import { vacationDestination as Data } from "../../../../data/VacationDestination";

const VacationDestinations = () => {
  return (
    <Grid sx={{ marginTop: "80px", zIndex: "1", width: "94.5vw" }}>
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
          marginTop: "60px",
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box sx={{ display: "flex", gap: "24px" }}>
          {Data.map((card, i) => (
            <SingleCategory key={i} card={card} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default VacationDestinations;
