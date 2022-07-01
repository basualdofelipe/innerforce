import React from "react";

import './Item.scss'

const Item = ({id, title, price, category, description, image}) => {
    return(
        
        <a href="/#" className="product">
            <h2>{title}</h2>
            <img src={image} alt={`fotoproducto ${title}`} />
            <p>{`$ ${price}`}</p>
        </a>
    )
}

export default Item