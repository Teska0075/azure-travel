import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { community } from '../../../data/Community'
import SingleCommunity from './SingleCommunity'

const TravelCommunity = () => {
  return (
    <Grid sx={{marginTop:"4%"}}>
        <Typography variant='h3' sx={{fontWeight:"700"}}>
            Connect with other travelers in our community
        </Typography>
        <Grid sx={{marginTop:"2%",
        overflowX:"scroll",
        "&::-webkit-scrollbar":{
            display:"none",
        }
        }}>
            <Box sx={{display: "flex", gap: "2%", padding:"1%"}}>
                {community.map((card, i) => (
                    <SingleCommunity key={i} card={card}/>
                ))}
            </Box>
        </Grid>
    </Grid>
  )
}

export default TravelCommunity