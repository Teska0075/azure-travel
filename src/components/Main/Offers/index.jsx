import { Box, Grid, Typography } from "@mui/material";
import { OfferData as Data } from "../../../data/Offers";
import React from "react";
import SingleOffer from "./SingleOffer";

const Offers = () => {
  return (
    <Grid sx={{ width: "100%", backgroundColor: "#f123" }}>
      <Grid>
        <Typography variant="h3" sx={{ fontWeight: "700", width: "900px" }}>
          Offers
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
        <Box>
          {Data.map((card, i) => (
            <SingleOffer key={i} card={card} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Offers;
