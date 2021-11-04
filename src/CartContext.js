import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([]);

    const addItem = (item, cantidad) => {
        setItems([...items, { cantidad: cantidad, ...item }]);
    }

    const removeItem = (itemId) => {

        setItems(items.filter(item => item.id !== itemId));
    }

    const clear = () => {
        setItems([]);
    }

    const isInCart = (itemId) => {
        return !!items.find(item => item.id === itemId);
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, isInCart, clear }}>
            {children}
        </CartContext.Provider>
    );
}