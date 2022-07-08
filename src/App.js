
import './App.css';
import React from "react";
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App= () => {
  return(
    <>
      <BrowserRouter> 
        <NavBar/>
        <Routes>
          <Route path ='/' element = {<ItemListContainer/>} />
          <Route path ='/category/:id' element = {<ItemListContainer/>} />
          <Route path ='/cart' element = {<Cart />} />
          <Route path ='/item/:id' element = {<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App