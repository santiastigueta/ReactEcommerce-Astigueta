import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext'
import { Button, Header, Icon } from 'semantic-ui-react';
import CartItem from '../components/CartItem/CartItem';
import { Alert, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { AlertTitle } from '@mui/material';
//firebase database:
import {db} from '../firebase';
import { collection, addDoc, query, doc, getDoc } from 'firebase/firestore';

const styles = {
    FormHeader: {
        display: 'flex',
        flexDirection: 'column'
    },
    Form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: '25%',
        width: 500
    }
}
const Cart = () => {
    const history = useHistory();

    const backToMenu = () => {
        history.push('/')
    }

    const [orderId, setOrderId] = useState();
    const { items, removeItem, clear } = useContext(CartContext);
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

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setFormValue({
            ...formValue,
            [name]: value
        });
        console.log(`${name}: ${value}`);
    }

    const finalizarCompra = async () => {

        const cartItems = items.map((item) => ({ id: item.id, title: item.title, price: item.price, cantidad: item.cantidad }));

        const docSnap = await addDoc(collection(db, "compras"), {
            buyer: formValue,
            items: cartItems,
            total: total,
            date: new Date(Date.now())
        });

        setOrderId(docSnap.id);
    }


    return (
        <div className='CartContainer'>
            {
                orderId ?
                    <Alert severity="success">
                        <AlertTitle>Todo listo.</AlertTitle>
                        Se genero correctamente la orden con id: <strong>{orderId}</strong>
                    </Alert>
                    :
                    <>
                        {! items.length ?
                        <>
                            <h1>Carro de compras vacío</h1>
                            <p>Vaya a buscar sus productos en la página principal!</p>
                            <Button positive onClick={backToMenu}>Ver productos</Button>
                        </>
                        :   
                            <>
                            <>  <h1>Lista de productos elegidos: </h1>
                                <Button color='purple' onClick={clear}>Limpiar carro</Button>
                                {items.map(item => <CartItem item={item} onDelete={removeItem}  key={item.id}></CartItem>)}
                            </>
                            <Header as='h2' icon style={styles.FormHeader}>
                                <Icon name='shopping bag' />
                                    Precio total: ${total}
                                <Header.Subheader>
                                    Por favor, ingrese sus datos para que podamos registrar su pedido
                                </Header.Subheader>
                            </Header>
                            <div  style={styles.Form}>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control name='name' placeholder="Ingrese su nombre" onChange={handleInputChange}/>
                                        <Form.Text className="text-muted">
                                        Por favor, ingrese su nombre completo.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name='email' placeholder=" ingrese su mail..."  onChange={handleInputChange}/>
                                        
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Celular</Form.Label>
                                        <Form.Control type="phone" name='phone' placeholder="numero de celular..."  onChange={handleInputChange}/>
                                    </Form.Group>

                                    <Button variant="contained" basic color = 'purple' onClick={finalizarCompra}  >
                                        comprar
                                    </Button>
                                </Form>
                                </div>
                            </>
                        }
                    </>
            }   
            
    
        </div>
        
    )
}

export default Cart