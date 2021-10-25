import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);


    const addItem = (item, cantidad) => {

        if (isInCart(item.id)) {
            alert("Este producto ya fue agregado.")
        }

        setItems([...items, { cantidad: cantidad, ...item }]);
    }

    const removeItem = (ChardId) => {
        setItems(items.filter(item => item.id !== ChardId))
    }

    const isInCart = (ChardId) => {
        return !!items.find(item => item.id === ChardId)
    }

    const clear = () => setItems([]);

    return (
        <CartContext.Provider value={[items, setItems, addItem, removeItem, isInCart, clear]}>
            {children}
        </CartContext.Provider >
    );
}