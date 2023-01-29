import { Grid } from '@mui/material'
import React from 'react'

const TopContentRight = () => {
  return (
    <Grid sx={{display:"flex",flexDirection:"column", justifyContent:"space-between", margin:1}}>
        <img src="images/footer/gulugulu.png" alt="google" style={{scale:"1.2"}}/>
        <img src="images/footer/banana.png" alt="apple" style={{scale:"1.2"}}/>
    </Grid>
  )
}

export default TopContentRight