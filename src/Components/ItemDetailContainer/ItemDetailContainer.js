import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

let product = {}

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id} = useParams();
    
    
    fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res=>res.json())
                .then(json=>{product = json})


    useEffect(() => {
        const getItem = new Promise(resolve => {
            setTimeout(() => {
                resolve(product);
            }, 1000);
        });

        getItem.then(res => setItem(res));
    }, [])

    return(
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer