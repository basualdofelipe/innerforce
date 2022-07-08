import React from "react";
import logo from "../../assets/logo2.png";
import './NavBar.scss';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from 'react-router-dom';


const menuItems = [
  {
    id: 1,
    lable: "Electrónica",
    href: "electronics"
  },
  {
    id: 2,
    lable: "Joyería",
    href: "jewelery"
  },
  {
    id: 3,
    lable: "Ropa Hombre",
    href: "men's clothing"
  },
  {
    id: 4,
    lable: "Ropa Mujer",
    href: "women's clothing"
  }
]

const NavBar = () => {
    return(
        <>
      <nav>
        <NavLink id="logo" to='/'><img src={logo} alt="logo" /></NavLink>
        <div class="links">
          {menuItems.map((items)=>(
            <NavLink to={`/category/${items.href}`} key={items.id}>
              {items.lable}
            </NavLink>
          ))}
        </div>
        <NavLink id="cart" to='/cart'><CartWidget/></NavLink>
      </nav>
      </>
    )
  }

  export default NavBar