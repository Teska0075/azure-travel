import { Box, Grid, Typography } from "@mui/material";
import { OfferData as Data } from "../../../data/Offers";
import React from "react";
import SingleOffer from "./SingleOffer";

const Offers = () => {
  return (
    <Grid sx={{ marginTop: "0%", width: "100%"}}>
      <Grid>
        <Typography variant="h3" sx={{color:"dark", fontWeight: "700", width: "900px" }}>
          Offers
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
        <Box sx={{display:"flex", gap:"2%", padding:"1%"}}>
          {Data.map((card, i) => (
            <SingleOffer key={i} card={card} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Offers;
