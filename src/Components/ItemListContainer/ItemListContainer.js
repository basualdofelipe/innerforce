import React from "react";
import './ItemListContainer.scss'
import ItemCount from "../ItemCount/ItemCount";


const ItemListContainer = ({greeting}) => {

  const onAdd = (quantity) => {
    console.log(`Agregado ${quantity} items al carrito`)    
  }

    return(
          <>
          <h1>{greeting}</h1>
          <div className="items">
            <ItemCount initial={1} stock={10} onAdd = {onAdd} />
            <ItemCount initial={2} stock={15} onAdd = {onAdd} />
            <ItemCount initial={1} stock={0} onAdd = {onAdd} />
            <ItemCount initial={5} stock={45} onAdd = {onAdd} />
            <ItemCount initial={1} stock={8} onAdd = {onAdd} />
            <ItemCount initial={8} stock={255} onAdd = {onAdd} />
          </div>
          </>
      )
  }

  export default ItemListContainer