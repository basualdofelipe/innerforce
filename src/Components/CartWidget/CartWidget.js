import React from 'react';

import carrito from "../../assets/shopping_cart.svg";

const CartWidget = () => {
    return(
        <button>
            <img src={carrito} alt="Cart Icon" />
        </button>    
    )
  }

  export default CartWidget