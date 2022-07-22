import React, {useState, useEffect} from 'react';
import {getFirestore, doc, getDoc} from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id} = useParams();

    useEffect(() => {
            const querydb = getFirestore();
            const queryDoc = doc(querydb, 'productos', id);
            getDoc(queryDoc)
            .then(res => setItem({id: res.id, ...res.data()}))
        }, [id]);

    return(
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer