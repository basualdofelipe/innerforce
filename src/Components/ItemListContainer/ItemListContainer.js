import React, {useEffect, useState} from "react";
import './ItemListContainer.scss'
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

let products = {}

fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(json=>{products = json})


const ItemListContainer = ({greeting}) => {

  const [data, setData] = useState([])

  const {id} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(products)
      }, 1000);
    });
    if(id){
      getData.then(res => setData(res.filter(item => item.category === id)))
    } else { 
      getData.then(res => setData(res))
    }

  }, [id])

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