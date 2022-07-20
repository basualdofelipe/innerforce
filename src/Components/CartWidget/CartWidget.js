import React from 'react';

import carrito from "../../assets/shopping_cart.svg";
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { totalProducts } = useCartContext();
    return(
        <>
            <button>
                <img src={carrito} alt="Cart Icon" />
            </button>    
            <p id='contador'>{totalProducts() || ''}</p>
        </>
    )
  }

  export default CartWidget