import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext'
import { Button, Card, Image } from 'semantic-ui-react';
import CartItem from '../components/CartItem/CartItem';

const Cart = () => {

    const { items, removeItem } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let newTotal = items.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
        setTotal(newTotal);
    }, [items])

    return (
        <div className='CartContainer'>
            {!items.length ?
                <>
                    <h1>No hay items disponibles</h1>
                    <p>Busque sus items en la página principal</p>
                </>
                :
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>Steve Sanders</Card.Header>
                        <Card.Meta>Friends of Elliot</Card.Meta>
                        <Card.Description>
                            {items.map(item => <CartItem item={item} onDelete={removeItem}></CartItem>)}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Total
                            </Button>
                            <Button basic color='red'>
                                ${total}
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            }
        </div>
    )
}

export default Cart
