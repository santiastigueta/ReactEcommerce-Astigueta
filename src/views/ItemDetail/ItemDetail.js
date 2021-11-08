
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import ItemCount from '../../components/UserCard/ItemCount/ItemCount';
import { CartContext } from "../../CartContext";


const ButtonTerminar = () => <Button component={Link} to="/cart" variant="contained" color="primary">Terminar compra</Button>;

const ItemCartActions = ({ itemInCart, onAdd, stock }) => {
    return (
        !itemInCart
            ? <>
                <ItemCount stock={stock} onAdd={onAdd} initial="1"></ItemCount>
                <Typography variant="body2" color="text.secondary" sx={{ marginLeft: 1 }}>
                    ({stock} disponibles)
                </Typography>
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
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={item.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.price}
          </Typography>
        </CardContent>
        <CardActions>
            <ItemCartActions itemInCart={itemInCart} onAdd={onAddToCart} stock={item.stock} />
        </CardActions>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      
    );
}

export default ItemDetail;