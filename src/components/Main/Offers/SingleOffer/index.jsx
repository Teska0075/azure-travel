import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const SingleOffer = ({ card }) => {
  return (
    <Grid
      sx={{
        width: "690px",
        height: "260px",
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0px 4px 16px rgba(158, 158, 158, 0.25)",
        padding: "20px",
        display: "flex",
        gap: 3,
      }}
    >
      <Grid
        sx={{
          width: "315px",
          height: "210px",
        }}
      >
        <img
          src={card.imageURL}
          width={"100%"}
          height={"100%"}
          style={{ borderRadius: "20px" }}
        ></img>
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
