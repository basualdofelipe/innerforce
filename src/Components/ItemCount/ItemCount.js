import React,{useState} from 'react';
import './ItemCount.scss';

const ItemCount = ({stock, initial, onAdd}) => {
      const [contador, setContador] = useState(initial);
      

      const sumar = () => {
            setContador(contador+1)
      }
      const restar = () => {
            setContador(contador-1)
      }
      const clear = () => {
            setContador(initial);
      }

            return(
            <>
                  <div className="item">
                        <h3>Stock Disponible</h3>
                        <div id='stock'>
                              <p>Cantidad: {contador}  ( {stock} en stock)</p>
                              <button disabled={contador >= stock} id='suma' onClick={sumar}>+</button>
                              <button disabled={contador <= 1} id='resta' onClick={restar}>-</button>
                        </div>
                        <button id='reset' onClick={clear}>Reset</button>
                        <button disabled={stock<=0} onClick={() => onAdd(contador)} id='carrito'>Comprar Ahora</button>
                  </div>
            </>
      )
}

  export default ItemCount