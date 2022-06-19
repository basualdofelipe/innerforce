
import './App.css';
import React from "react";
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

const App= () => {
  return(
    <>
    <NavBar/>
    {/* <ItemListContainer greeting="__________________________________________________hola__________________________________________________"/> */}
    <ItemListContainer greeting="Hola"/>
    </>
  )
}

export default App