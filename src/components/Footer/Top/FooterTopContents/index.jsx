import { Divider, Grid } from '@mui/material'
import React from 'react'
import TopContentLeft from './TopContentLeft';
import TopContentRight from './TopContentRight';

const FooterTopContents = () => {
  return (
    <Grid sx={{marginTop:"2%", display:"flex",gap:6, color:"#fff"}}>
      <TopContentLeft/>
      <Divider orientation='vertical' sx={{
    "&::before, &::after": {
      borderColor: "#ffffff20"
    },
  }} flexItem>or</Divider>
      <TopContentRight/>
    </Grid>
  )
}

export default FooterTopContents;