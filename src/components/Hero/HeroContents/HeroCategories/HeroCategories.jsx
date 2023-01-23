import React from 'react'

import SingleCategory from './SingleCategory/SingleCategory'
import {categories} from '../../../data/HeroCategoriesIcon'
import { Box, Grid, Typography } from '@mui/material'

const HeroCategories = () => {
  return (
    <Grid sx={{marginTop:"40px"}}>
        <Grid>
            <Typography variant="h3"
          sx={{ color: "white", fontWeight: "700", width: "900px" }}>
                Top Categories
            </Typography>
        </Grid>
        <Grid sx={{ marginTop: "2%", marginBottom: "3%" }}>
            <Box sx={{ display: "flex", gap: "6% " }}>
            {categories.map((i, card) => (
                <SingleCategory key={i} card={card} />
              ))}
            </Box>
        </Grid>
    </Grid>
  )
}

export default HeroCategories