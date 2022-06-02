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
                        
                        
                        <Product {...item}></Product>

    
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

