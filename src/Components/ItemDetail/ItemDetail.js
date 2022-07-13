import React, {useState} from 'react';
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.scss'
import { Link } from 'react-router-dom'

const ItemDetail = ({item}) => {
    const [toCart, setToCart] = useState(false)

    const onAdd = (quantity) => {
        setToCart(true);   
      }

    return(
        <div className='itemcontainer'>
            <img src={item.image} alt="" />
            <div className="data">
                <h1>{item.title}</h1>
                <p id='price'>{`$${item.price}`}</p>
                <p id='description'>{item.description}</p>
                {
                    toCart
                    ? <Link to='/cart'><button id='go-to-cart'>Ir al carrito</button></Link>
                    : <ItemCount stock={5} initial={1} onAdd={onAdd} />
                }
            </div>
        </div>
    )
}

export default ItemDetail