import './ItemCart.scss';
import React from 'react';
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({ item }) => {
    const { removeItem } = useCartContext();
    return (
        <div className="itemCart">
            <img src={item.image} alt="" />
            <div className="itemDescription">
                <p className='itemTitle'>Producto: <br />{item.title}</p>
                <p>Cantidad: <br />{item.quantity}</p>
                <p>Precio: <br />{item.price}</p>
                <p>Subtotal: <br />${item.price * item.quantity}</p>
            </div>
            <button onClick={() => removeItem(item.id)}>X</button>
        </div>
    )
}

export default ItemCart