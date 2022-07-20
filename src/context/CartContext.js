import React, { useState, useContext } from 'react';
const CartContext = React.createContext('');

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantit: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    }

    console.log('carrito: ', cart);
    
    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(item => item.id === id) ? true : false;

    const removeItem = (id) => setCart(cart.filter(item => item.id !== id));

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }

    const totalProducts = () => cart.reduce((prev, act) => prev + act.quantity, 0)


    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeItem,
            addItem,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider