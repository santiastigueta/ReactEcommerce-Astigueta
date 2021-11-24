
import {Stack, Button, Typography, CardMedia, CardContent, Card, Box} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';

import './cartItem.css';

const CartItem = ({ item, onDelete}) => {
    const history = useHistory();

    const backToMenu = () => {
        history.push('/')
    }

    return (
        <Card sx={{ display: 'flex' }} className='main-card'>
             <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={item.img}
                alt="product Image"
                className='cartImage'/>
            <Box sx={{ display: 'flex', flexDirection: 'column' }} className='secondary-card'>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {item.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div" className='itemDescription'>
                        {item.description}
                    </Typography>
                </CardContent>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" color='primary'  onClick={backToMenu}>Seguir comprando</Button>
                    <Button edge="end" aria-label="delete"  variant="outlined"  color='error' onClick={() => onDelete(item.id)}  startIcon={<DeleteIcon />}>
                        Borrar
                    </Button>
                </Stack>
                
            </Box>
            <Box className='cartPrice'>
                precio cada unidad: ${item.price}
                <Typography>
                    precio subtotal: ${item.price * item.cantidad}
                </Typography>
                <Typography>
                    {item.cantidad} Unidad{item.cantidad > 1 && 'es'}
                </Typography>
            </Box>
       
        </Card>
    );
}

export default CartItem
