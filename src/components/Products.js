import React from 'react'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import axios from 'axios';
import Product from './Product'

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

    let data1 = [],data2 = [];

    useEffect(() => {
        axios
          .get(api_url + "products")
          .then((res) => {
                setData(res.data)
                

            }
          )
    })


    for(let i=0;i<data.length;i++){

        if((i+1)%2==0){
            data2.push(data[i])
        }else{
            data1.push(data[i])
        }
    }

    


    let dataIsLoaded = data.length > 0 ? true : false;


    if(dataIsLoaded) {

        return (

            <Grid container spacing={2}>
                
                <Grid item xs={6}>

                    <Stack spacing={2} >
                        {
                            data1.map((item) => 
                            
                                <Item sx={{maxHeight: 175, minHeight: 175}}>
                                    <Product {...item}></Product>
                                </Item>

                            )

                        }
                    </Stack>

                </Grid>

                <Grid item xs={6}>

                    <Stack spacing={2}>
                            {
                                data2.map((item) => 
                                
                                    <Item sx={{maxHeight: 175, minHeight: 175}}>
                                        <Product {...item}></Product>
                                    </Item>

                                )

                            }
                    </Stack>


                </Grid>
            
            </Grid>


        )
                
    }
    else {
        return <h3>Loading..</h3>
    }
    
}

export default Products