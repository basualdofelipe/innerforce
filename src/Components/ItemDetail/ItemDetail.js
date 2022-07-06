import React from 'react';
import './ItemDetail.scss'

const ItemDetail = ({item}) => {
    return(
        <div className='itemcontainer'>
            <img src={item.image} alt="" />
            <div className="data">
                <h1>{item.title}</h1>
                <p id='price'>{`$${item.price}`}</p>
                <p id='description'>{item.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail