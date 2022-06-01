import React from 'react'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import axios from 'axios';

import SortSelect from './SortSelect';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function Products() {

    const api_url = "http://127.0.0.1:5000/"

    const [data, setData] = React.useState([])

    useEffect(() => {
        axios
          .get(api_url + "products")
          .then((res) => {
            setData(res.data)
          })
    })



    if(data.length > 0) {

        return (

            <Stack sx={{marginLeft: 2, marginRight: 2}} spacing={1}> 
    
                {data.map((item) =>
    
                    <Item >
                        
                        <Grid container>
                            <Grid item xs={3}>
                                <Box
                                    component="img"
                                    sx={{
                                        width: 0.5
                                        
                                    }}
                                    alt="N/A"
                                    src={item.image}
                                />

                            </Grid>
    
                            <Grid item xs={9}>
                                <h2>{item.name}</h2>

                                {item.discount != 0 ?    
                                    <h3>{item.price} <span style={{color: "red"}}> -{item.discount}</span></h3>:
                                    <h3>{item.price}</h3>

                                }
                                <Button target="_blank" component="a" href={item.link} variant="contained">Buy</Button>
                            </Grid>
    
    
                        </Grid>
    
    
                    </Item>
                            
                )}
    
            </Stack>
                
    
                
    
        )
    }
    else {
        return <h3>Loading..</h3>
    }
    
}

export default Products
