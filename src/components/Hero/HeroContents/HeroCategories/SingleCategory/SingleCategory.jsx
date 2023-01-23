import { Box, Link, Typography } from '@mui/material'
import React from 'react'

const SingleCategory = ({card}) => {
  return (
    
        <Box sx={{display: "block",
          textAlign: "center",
          width: "100%",}}>
            <img src="images/icons/beaches.svg"  width={50}></img>
            <Typography sx={{ color: "white", opacity: 0.5 }}>{card.title}Beaches</Typography>
        </Box>

  );
};

export default SingleCategory