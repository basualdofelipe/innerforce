
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './context/CartContext';



const App= () => {
  return(
    <>
      <BrowserRouter> 
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path ='/' element = {<ItemListContainer/>} />
            <Route path ='/category/:id' element = {<ItemListContainer/>} />
            <Route path ='/cart' element = {<Cart />} />
            <Route path ='/item/:id' element = {<ItemDetailContainer/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App