import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useContext } from "react";
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

    const { url, price, title, description, stock } = item;
    const [itemInCart, setItemInCart] = useState(false);
    const { addItem } = useContext(CartContext);

    const onAddToCart = (cantidad) => {

        addItem(item, cantidad);
        setItemInCart(true);
    }

    return (
        <>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', alignContent: 'space-between' }}>
                        <ItemCartActions itemInCart={itemInCart} onAdd={onAddToCart} stock={stock} />
                    </CardActions>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151, margin: 'auto' }}
                    image={url}
                    alt="green iguana"
                />
            </Card>
        </>
    );
}

export default ItemDetail;