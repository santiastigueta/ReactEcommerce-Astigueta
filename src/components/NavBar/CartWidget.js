import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon, Label } from 'semantic-ui-react'
import { CartContext } from '../../CartContext';

const widgetStyles = {
    cartWidget: {
        fontSize: 15
    }
}

const CartWidget = () => {
    const { items } = useContext(CartContext);
    const [itemsCount, setItemsCount] = useState(0);

    useEffect(() => {

        let cantidad = items.reduce((acc, item) => acc + item.cantidad, 0);
        setItemsCount(cantidad);
    }, [items])

    return (
        <Label color='red' style={widgetStyles.cartWidget}>
            <Icon name='cart' component={Link} to='/cart'>
                <Badge badgeContent={itemsCount}></Badge>
            </Icon>
        </Label>

    );
}

export default CartWidget;
