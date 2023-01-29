import { Grid, Typography } from '@mui/material'
import React from 'react'

const Banner = () => {
  return (
    <Grid sx={{
      height:"50vh",
      marginTop:"4%",
      marginRight:15,
      background:" url(images/banner/banner.png) no-repeat",
      backgroundSize: "cover",
      borderRadius:"24px",
      padding:15,
    }}>
      <Typography sx={{
        width: 600,
        color:"#fff",
        fontSize:"50px",
        fontWeight:"700",
      }}>
        Plan your trip with travel expert
      </Typography>
      <Typography sx={{
        color:"#fff",
        marginTop:"1%",
        fontSize:"32px",
        fontWeight:"400",
        lineHeight:"41px"
      }}>
        Our professional advisors can craft your perfect itinerary
      </Typography>
    </Grid>
  )
}

export default Banner