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
                        <h1>{contador}/{stock}</h1>
                        <div className="buttons">
                              <button disabled={contador >= stock} id='suma' onClick={sumar}>+</button>
                              <button id='reset' onClick={clear}>Reset</button>
                              <button disabled={contador <= 1} id='resta' onClick={restar}>-</button>
                              <button disabled={stock<=0} onClick={() => onAdd(contador)} id='carrito'>Agregar al Carrito</button>
                        </div>
                  </div>
            </>
      )
}

  export default ItemCount