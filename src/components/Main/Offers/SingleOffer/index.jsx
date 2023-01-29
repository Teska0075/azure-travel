import { Button, Grid, Typography, Box } from "@mui/material";
import React from "react";

const SingleOffer = ({ card }) => {
  return (
    <Grid
      sx={{
        width: 900,
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "4px 4px 16px rgba(158, 158, 158, 0.25), -4px -4px 16px rgba(158, 158, 158, 0.25)",
        padding: "1%",
        display: "flex",
        gap: 3,
      }}
    >
      <Grid
        sx={{
          
        }}
      >
        <img
          src={card.imageURL}
          width={"100%"}
          style={{ width: 400,
            height: 225,borderRadius: "20px" }}
        ></img>
      </Grid>
      <Grid 
      sx={{
        width: 400,
        height: 225,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between"
      }}>
        <Box sx={{display:"flex",
        flexDirection:"column", gap:1}}>
          <Typography sx={{color:"#00000095"}}>{card.type}</Typography>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>{card.title}</Typography>
          <Typography sx={{color:"#00000095"}}>{card.text}</Typography>
        </Box>
        <Button  
          sx={{
            borderRadius: "32px",
            backgroundColor: "#2659C3",
            width: "40%",
            height: "25%",
            padding: "5%",
            marginTop: 2,
            fontSize: "15px",
            fontWeight: "400",
            color:"#fff"
        }}
        >
            Book now
        </Button>
      </Grid>
    </Grid>
  );
};

export default SingleOffer;
