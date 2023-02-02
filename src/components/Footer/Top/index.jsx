import React from 'react'
import { Grid } from '@mui/material'
import FooterTopText from './FooterTopText'
import FooterTopContents from './FooterTopContents'

const FooterTop = () => {
  return (
    <Grid sx={{
        width:"100%",
        height: 589,
        background:"url(images/footer/footertop.png) no-repeat center",
        backgroundSize:"cover",
        padding:15,
        display:"flex",
        gap:5
    }}>
        <Grid>
            <img src='images/footer/mockup.png' alt=''></img>
        </Grid>
        <Grid>
            <FooterTopText/>
            <FooterTopContents/>
        </Grid>
    </Grid>
  )
}

export default FooterTop