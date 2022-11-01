import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/Containers/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/Containers/ItemDetailContainer/ItemDetailContainer"
import Persons from "./Components/People/Persons";
import Cart from "../src/Components/Containers/CartView/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomProvider from "./Context/CustomContext";

function App() {

  const dash = "Ofertas";
  const nombreUsuario = "Lucas";
  const apellidoUsuario = "Silva";

  return (
    <>
    <BrowserRouter>
    <CustomProvider>
      <header nombre={nombreUsuario} id="1" apellido={apellidoUsuario}>
        <div className='App'>
      <Navbar />
      <Routes>
          <Route path='/' element={<ItemListContainer greeting={dash} />}/>
          <Route path='/category/:id' element={<ItemListContainer greeting={dash} />}/>
          <Route path='/product/:id' element={ <ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
      </Routes>
      <ItemListContainer />
      <Persons />
        </div>
      </header>
      </CustomProvider>
    </BrowserRouter>
    </>
  )
}

export default App;
