import React from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if(cart.length === 0) {
        return(
            <>
            <p>No hay elementos para mostrar</p>
            <Link to='/'>Ir a la tienda</Link>
            </>
        )
    }
    return(
        <>
            {
                cart.map(item => <ItemCart key={item.id} item = {item}/>)
            }
            <p className="totalPrice">Precio Total: ${totalPrice()}</p>
        </>
    )
}

export default Cart