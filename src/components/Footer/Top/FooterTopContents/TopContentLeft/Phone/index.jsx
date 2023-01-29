import { Box, Button, Grid, InputBase, Toolbar } from '@mui/material'
import React from 'react'

const PhoneContact = () => {
    // const Search = styled("div")(({ theme }) => ({
    //     position: "relative",
    //     width: "100%",
    //   }));

    //   const StyledInputBase = styled(InputBase)(({ theme }) => ({
    //     "& .MuiInputBase-input": {
    //       color: "white",
    //     },
    //   }));
  return (
    <Grid
                  position="static"
                  sx={{
                    background: "rgba(255, 255, 255, 0.4);",
                    borderRadius: "20px",
                    backdropFilter: "blur(15px)",
                    marginTop: "2%",
                    width: "100%",
                  }}
                >
                  <Toolbar>
                    <Grid sx={{position: "relative",
        width: "100%",}}>
                      <Box
                        sx={{
                          width: "100%",
                          flexDirection: "row",
                          display: "flex",
                          gap: "30%",
                        }}
                      >
                        <InputBase
                          placeholder="+91 Mobile number"
                          inputProps={{ "aria-label": "search" }}
                          sx={{color:"#fff"}}
                        />
                        <Button
                          sx={{
                            borderRadius: "40px",
                            backgroundColor: "white",
                            width: "45%",
                            height: "1%",
                            fontSize: "18px",
                            fontWeight: "400",
                            textTransform: "capitalize",
                          }}
                          color="primary"
                        >
                          Search
                        </Button>
                      </Box>
                    </Grid>
                  </Toolbar>
                </Grid>
  )
}

export default PhoneContact