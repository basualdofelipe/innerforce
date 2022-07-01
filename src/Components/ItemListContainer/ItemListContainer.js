import React, {useEffect, useState} from "react";
import './ItemListContainer.scss'
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList"

let products = {}

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{products = json})


const ItemListContainer = ({greeting}) => {

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(products)
      }, 4000);
    });
    getData.then(res => setData(res))

  }, [])

  const onAdd = (quantity) => {
    console.log(`Agregado ${quantity} items al carrito`)    
  }


    return(
          <>
          <div className="items">
            <ItemList data={data}/>
          </div>
          </>
      )
  }

  export default ItemListContainer