import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route } from 'react-router-dom'; // Import Route
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import Product from './components/Product/Product.jsx';
import Services from './components/Services/Services.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='product' element={<Product/>}/>
      <Route path='services' element={<Services/>}/>
      

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
