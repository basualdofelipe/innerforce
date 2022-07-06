import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

let product = {}

fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>{product = json})

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(() => {
        const getItem = new Promise(resolve => {
            setTimeout(() => {
                resolve(product);
            }, 3000);
        });

        getItem.then(res => setItem(res));
    }, [])

    return(
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer