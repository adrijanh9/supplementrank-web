import React from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import { Button } from '@mui/material'

function Product({name, price, image, link, discount}){

    return (

        <Grid container>

            <Grid item xs={4} sx={{display: "flex", justifyContent: "center"}}>
                
                <Box 
                    component="img" 
                    sx={{ width: 0.8, height: "auto"}}
                    alt="N/A"
                    src={image}
                />

            </Grid>

            <Grid item xs={8}>

                <h2>{name}</h2>

                {discount != 0 ?

                    <h3>{price} <span style={{color: "red"}}> -{discount}</span></h3>:
                    <h3>{price}</h3>

                }
                <Button target="_blank" component="a" href={link} variant="contained">Buy</Button>
            </Grid>
    
    
        </Grid>
    )
}

export default Product