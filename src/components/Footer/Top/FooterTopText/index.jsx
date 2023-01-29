import { Grid, Typography } from '@mui/material'
import React from 'react'

const FooterTopText = () => {
  return (
    <Grid>
      <Typography variant='h2' sx={{color:"#fff", fontSize:"48px", fontWeight:"700"}} >
        Your all-in-one travel app.
      </Typography>
      <Typography variant='h5' sx={{marginTop:"4%", color:"#fff", fontSize:"24px", fontWeight:"400"}}>
        Book flights, hotels, trains & rental cars anywhere in the world in just seconds. Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins only on the app!
      </Typography>
    </Grid>
  )
}

export default FooterTopText