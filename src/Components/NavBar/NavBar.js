import React from "react";
import logo from "../../assets/logo2.png"
import carrito from "../../assets/shopping_cart.svg";
import './NavBar.css';

const NavBar = () => {
    return(
        <>
      <nav>
        <img id="logo" src={logo} alt="" />
        <div class="links">
          <a href="/#">Fechas</a>
          <a href="/#">Discos</a>
          <a href="/#">Remeras</a>
        </div>
        <img id="carrito" src={carrito} alt="" />
      </nav>
      </>
    )
  }

  export default NavBar