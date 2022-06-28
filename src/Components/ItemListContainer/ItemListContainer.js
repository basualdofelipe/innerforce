import React from "react";
import './ItemListContainer.scss'
import ItemCount from "../ItemCount/ItemCount";


const ItemListContainer = ({greeting}) => {

    return(
          <div className="items">
            <ItemCount stock={10} />
            <ItemCount stock={15} />
            <ItemCount stock={3} />
            <ItemCount stock={45} />
            <ItemCount stock={8} />
            <ItemCount stock={255} />
          </div>
      )
  }

  export default ItemListContainer