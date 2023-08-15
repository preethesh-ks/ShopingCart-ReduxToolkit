import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Product from './components/Product';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
  import "bootstrap/dist/css/bootstrap.min.css"
  import { createBrowserRouter,createRoutesFromElements ,RouterProvider,Route} from 'react-router-dom';
import RootLayout from './components/RootLayout';

const App = () => {
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Dashboard/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    </Route>
 
))
  return (
    <div >
    <RouterProvider router={router}/>
      {/* <Product/> */}
    </div>
    )
}

export default App