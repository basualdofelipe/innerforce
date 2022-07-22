import React, {useEffect, useState} from "react";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {

  const [data, setData] = useState([])

  const {id} = useParams();

  useEffect(() => {

    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'productos');
    
    if(id){
      const queryFilter = query(queryCollection, where('category', '==', id))
      getDocs(queryFilter)
      .then(res => res.docs.map(item => ({id: item.id, ...item.data()})))
      .then(items => setData(items))      
    } else { 
      getDocs(queryCollection)
      .then(res => res.docs.map(item => ({id: item.id, ...item.data()})))
      .then(items => setData(items))
    }

  }, [id])

 


    return(
          <>
          <div className="items">
            <ItemList data={data}/>
          </div>
          </>
      )
  }

  export default ItemListContainer