import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const SingleOffer = (card) => {
  console.log(card.imageURL);
  return (
    <Grid>
      <Grid>
        <img src={card.imageURL} alt=""></img>
      </Grid>
      <Grid>
        <Typography variant="h6">{card.type}</Typography>
        <Typography>{card.title}</Typography>
        <Typography>{card.text}</Typography>
        <Button>Book now</Button>
      </Grid>
    </Grid>
  );
};

export default SingleOffer;
