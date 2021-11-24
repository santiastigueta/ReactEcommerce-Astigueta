import React, { useState } from 'react';
import './ItemCount.css';
import { Button } from 'semantic-ui-react';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [counter, setCounter] = useState(parseInt(initial))

    const Add = () => {
        if (stock > counter) {
            setCounter(counter + 1);
        } else {
            console.warn('No puede pedir más de lo disponible.')
        }
    }
    const Remove = () => {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }
    const AddToCart = () => onAdd(counter);

    return (
        <div className="ItemCount" >
            <div className='ItemButtons'>
                <button onClick={Remove} className="itemCountButton"><strong>-</strong></button>
                <p>{counter}</p>
                <button onClick={Add} className="itemCountButton"><strong>+</strong></button>
            </div>
            <p>stock disponible: {stock}</p>
            <Button onClick={AddToCart} primary>Añadir al carrito</Button>
        </div>
    );
}

export default ItemCount;
