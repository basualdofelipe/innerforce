import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: "Juan",
            phone: "11 2258 6521",
            email: "juancitoelmasbonito@hotjuan.com"
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),

    }

    const handleClick = () =>{
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
    }

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
            <div className="totalPrice">
            <button onClick={handleClick}>Finalizar Compra</button>
            <p>Precio Total: ${totalPrice()}</p>
            </div>
        </>
    )
}

export default Cart