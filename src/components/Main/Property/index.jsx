import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { properties } from '../../../data/PropertyTypes';
import SingleProperty from './SingleProperty';

const PropertyType = () => {
  return (
    <Grid sx={{marginTop:"4%", width:"100%"}}>
       <Grid>
        <Typography variant='h3' sx={{fontWeight:"700"}}>
            Browse by property type
        </Typography>
        </Grid> 
        <Grid 
        sx={{
            marginTop: "2%",
            overflowX: "scroll",
            "&::-webkit-scrollbar":{
                display:"none",
            }
        }}
        >
            <Box sx={{ display: "flex", gap: "2%", padding:"1%" }}>
                {properties.map((card, i) => (
                    <SingleProperty key={i} card={card}/>
                ))}
            </Box>
        </Grid>
    </Grid>
  )
}

export default PropertyType