import React from "react";
import logo from "../../assets/logo2.png";
import './NavBar.scss';
import CartWidget from "../CartWidget/CartWidget";


const menuItems = [
  {
    id: 1,
    lable: "Fechas"
  },
  {
    id: 2,
    lable: "Discos"
  },
  {
    id: 3,
    lable: "Remeras"
  }
]

const NavBar = () => {
    return(
        <>
      <nav>
        <img id="logo" src={logo} alt="" />
        <div class="links">
          {menuItems.map((items)=>(
            <a href="/" key={items.id}>
              {items.lable}
            </a>
          ))}
        </div>
        <CartWidget/>
      </nav>
      </>
    )
  }

  export default NavBar