import { Box, Link, Typography } from "@mui/material";
import React from "react";

const SingleCategory = ({ card }) => {
  return (
    <Box sx={{ display: "block", textAlign: "center", width: "100%" }}>
      <img src={`${card.imageUrl}`} width={50}></img>
      <Typography sx={{ color: "white", opacity: 0.5 }}>
        {card.title}
      </Typography>
    </Box>
  );
};

export default SingleCategory;
