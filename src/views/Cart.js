import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext'
import { Button, Card, Image } from 'semantic-ui-react';
import CartItem from '../components/CartItem/CartItem';
import { Alert, Form } from 'react-bootstrap';

//firebase database:
import {db} from '../firebase';
import { collection, addDoc, query, doc, getDoc } from 'firebase/firestore';

const Cart = () => {

    const [orderId, setOrderId] = useState();
    const { items, removeItem } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        phone: ''
    })

    useEffect(() => {
        let newTotal = items.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
        setTotal(newTotal);
    }, [items])

    const setInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setFormValue({...formValue, [name]: value});
    }

    const finalizarCompra = async() => {
        const cartItems = items.map((product)=> ({
            id: product.id, 
            title: product.title, 
            cantidad: product.cantidad,
            price: product.price
        }));
        const docSnap = await addDoc(collection(db, 'compras'),{
            buyer: formValue,
            items: cartItems,
            total: total
        });
        setOrderId(docSnap.id)
    };

    return (
        <div className='CartContainer'>
            {
                orderId ?
                    <Alert variant='primary'>
                        La orden ha sido realizada con éxito
                    </Alert>
                    :
                    <>
                        {! items.length ?
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
                                <Card.Header>Productos:</Card.Header>
                                <Card.Description>
                                    {items.map(item => <CartItem item={item} onDelete={removeItem}></CartItem>)}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Card.Header>Total: ${total}</Card.Header>
                            </Card.Content>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control name='name' placeholder="Ingrese su nombre" onChange={setInputChange}/>
                                    <Form.Text className="text-muted">
                                    Por favor, ingrese su nombre completo.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name='email' placeholder=" ingrese su mail..."  onChange={setInputChange}/>
                                    
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Celular</Form.Label>
                                    <Form.Control type="phone" name='phone' placeholder="numero de celular..."  onChange={setInputChange}/>
                                </Form.Group>

                                <Button basic color = 'blue' onClick={finalizarCompra} variant="primary" type="submit">
                                    comprar
                                </Button>
                                </Form>
                        </Card>}
                    </>
            }   
            
    
        </div>
        
    )
}

export default Cart
