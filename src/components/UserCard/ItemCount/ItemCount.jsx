import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ initial, stock }) => {
    const [counter, setCounter] = useState(parseInt(initial))
    const onAdd = () => {
        if (stock > counter) {
            setCounter(counter + 1);
        } else {
            console.warn('No puede pedir más de lo disponible.')
        }
    }
    const onRemove = () => {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }
    return (
        <div className="ItemCount" >
            <div className='ItemButtons'>
                <button onClick={onRemove}>-</button>
                <p>{counter}</p>
                <button onClick={onAdd}>+</button>
            </div>
            <p>stock disponible: {stock}</p>
        </div>
    );
}
ItemCount.defaultProps = {
    initial: '0',
    stock: '10'
}
export default ItemCount;
