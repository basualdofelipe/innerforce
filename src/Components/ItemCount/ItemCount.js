import React,{useState} from 'react';
import './ItemCount.scss';

const ItemCount = ({stock}) => {
      const [contador, setContador] = useState(1);
      

      const sumar = () => {
            contador<stock
            ? setContador(contador + 1)
            : setContador(contador)
      }
      const restar = () => {
            contador>0
            ? setContador(contador - 1)
            : setContador(contador)
      }
      const clear = () => {
            setContador(0);
      }

            return(
            <>
                  <div className="item">
                        <h1>{contador}/{stock}</h1>
                        <div className="buttons">
                              <button id='suma' onClick={sumar}>+</button>
                              <button id='reset' onClick={clear}>0</button>
                              <button id='resta' onClick={restar}>-</button>
                              <button id='carrito'>Agregar al Carrito</button>
                        </div>
                  </div>
            </>
      )
}

  export default ItemCount