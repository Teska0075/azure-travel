import { Box, Typography } from "@mui/material";
import React from "react";

const SingleCategory = ({ card }) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <img
        src={`${card.imageURL}`}
        style={{ width: "420px", height: "310px", borderRadius: "20px" }}
      ></img>
      <Typography
        sx={{
          color: "#fff",
          position: "absolute",
          left: "24px",
          bottom: "24px",
          fontSize: "24px",
          fontWeight: "500",
        }}
      >
        {card.title}
      </Typography>
    </Box>
  );
};

export default SingleCategory;
