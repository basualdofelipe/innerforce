import React from "react";
import Item from '../Item/Item'

const ItemList = ({data = []}) => {
    return(
        data.map(products => 
        <Item
        id = {products.id}
        title = {products.title}
        price = {products.price}
        category = {products.category}
        description = {products.description}
        image = {products.image}
        />)
    )
}

export default ItemList