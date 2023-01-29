import { Grid, Typography } from '@mui/material'
import React from 'react'

const SingleCommunity = ({card}) => {
  return (
    <Grid sx={{backgroundColor:"#fff", padding:"1%", display:"flex", flexDirection:"column", gap:2, borderRadius:"16px", boxShadow:"0px 0px 18px 0px rgba(0,0,0, 0.5) "}}>
        <Grid>
            <img src={card.imageURL} width={400} height={275} style={{borderRadius:"8px"}}></img>
        </Grid>
        <Grid sx={{display:"flex", flexDirection:"column", gap:1,}}>
            <Typography sx={{fontSize:"24px", fontWeight:"400"}}>
                {card.name}
            </Typography>
            <Typography sx={{fontSize:"16px", opacity:"0.5"}}>
                {card.type}
            </Typography>
            <Typography sx={{fontSize:"16px", opacity:"0.5"}}>
                {card.travelers} travelers
            </Typography>
        </Grid>
    </Grid>
  )
}

export default SingleCommunity