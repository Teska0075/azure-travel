import React from 'react'
import { Button, Grid, Typography,} from '@mui/material'

import PhoneContact from './Phone';

const TopContentLeft = () => {
    

  return (
    <Grid sx={{display:"flex", flexDirection:"column", gap:2}}>
        <Grid sx={{display:"flex", gap:2}}>
            <Button sx={{
                    paddingX:3,
                    paddingY:1,
                    borderRadius: "20px",
                    backgroundColor: "#ffffff50",
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}>Mobile</Button>
            <Button sx={{
                    paddingX:3,
                    paddingY:1,
                    borderRadius: "20px",
                    // backgroundColor: "#ffffff50",
                    color:"#fff",
                    fontSize: "20px",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}>Email</Button>
        </Grid>
        <Typography>
            Enter your phone number to receive a text with a link to download the app.
        </Typography>
        <PhoneContact/>
    </Grid>
  )
}

export default TopContentLeft