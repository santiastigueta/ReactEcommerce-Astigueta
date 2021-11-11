import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const CartItem = ({ item, onDelete }) => {
    return (
        <div>
            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        Image={item.img}
                    />
                    <Card.Header>{item.title}</Card.Header>
                    <Card.Meta>{item.price}</Card.Meta>
                    <Card.Description>
                        {item.description}
                    </Card.Description>
                </Card.Content>
                <Card.Meta>${item.price * item.cantidad}</Card.Meta>
                <Card.Meta>{item.cantidad} Unidad{item.cantidad > 1 && 'es'}</Card.Meta>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='red' onClick={() => onDelete(item.id)}>
                            <i class="fas fa-trash-alt"></i>
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
}

export default CartItem
