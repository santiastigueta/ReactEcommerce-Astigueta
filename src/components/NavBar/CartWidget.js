import React from 'react'
import { useEffect, useState, useContext } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const CartWidget = () => {
    const { items } = useContext(CartContext);
    const [itemsCount, setItemsCount] = useState(0);

    useEffect(() => {

        let cantidad = items.reduce((acc, item) => acc + item.cantidad, 0);
        setItemsCount(cantidad);
    }, [items])

    return (
        

        <IconButton aria-label="cart" name='cart' component={Link} to='/cart'>
            <StyledBadge badgeContent={itemsCount} color="primary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>

    );
}

export default CartWidget;
