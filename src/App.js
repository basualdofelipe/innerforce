
import './App.css';
import React from "react";
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


const App= () => {
  return(
    <>
    <NavBar/>
    {/* <ItemListContainer greeting="Hola"/> */}
    <ItemDetailContainer/>
    </>
  )
}

export default App