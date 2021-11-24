import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Item from '../Item/Item'


const ItemList = ({ productList }) => {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {productList.map((item) => (
                <Grid item xs={2} sm={4} md={3} key={item.id}>
                    <Item data= {item}  />
                </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ItemList;
