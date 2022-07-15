import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import './Item.scss'


const Item = ({id, title, price, category, description, image}) => {

    return(
        
        <Link to={`/item/${id}`} className="product">
            <h2>{title}</h2>
            <img src={image} alt={`fotoproducto ${title}`} />
            <p>{`$ ${price}`}</p>
        </Link>
    )
}

export default Item