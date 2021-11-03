
import { Link } from 'react-router-dom';
import { Grid } from "@mui/material";
import Item from '../Item/Item'
import './ItemList.css';


const ItemList = ({ productList }) => {

    const itemsGrid = productList?.map((product) =>
        <Grid product xs={4} key={product.id}>
            <Item data={product}></Item>
        </Grid>
    ) || <h1>No hay productos</h1>

    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={0} marginBottom={2} marginLeft={6}>
            {itemsGrid}
        </Grid>
    );
};

export default ItemList;
