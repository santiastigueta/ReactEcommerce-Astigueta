
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import ItemCount from '../../components/UserCard/ItemCount/ItemCount';
import { CartContext } from "../../CartContext";

import './ItemDetail.css';

const ButtonTerminar = () => <Button component={Link} to="/cart" variant="contained" color="primary">Ir al Carrito</Button>;

const ItemCartActions = ({ itemInCart, onAdd, stock }) => {
    return (
        !itemInCart
            ? <>
                <ItemCount stock={stock} onAdd={onAdd} initial="1"></ItemCount>
            </>
            : <ButtonTerminar />
    );
}

const ItemDetail = ({ item }) => {

    const [itemInCart, setItemInCart] = useState(false);
    const { addItem } = useContext(CartContext);

    const onAddToCart = (cantidad) => {

        addItem(item, cantidad);
        setItemInCart(true);
    }

    return (
        <Card sx={{ maxWidth: 345 }} classname='detailCard'>
            <CardMedia
            component="img"
            height="140"
            image={item.img}
            alt="green iguana"
            classname='imgDetail'
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {item.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                ${item.price}
            </Typography>
            </CardContent>
            <CardActions>
                <ItemCartActions itemInCart={itemInCart} onAdd={onAddToCart} stock={item.stock} />
            </CardActions>
        </Card>
      
    );
}

export default ItemDetail;
