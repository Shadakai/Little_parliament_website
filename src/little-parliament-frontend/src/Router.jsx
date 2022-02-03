import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import MenuItem from "./pages/MenuItem"
import Products from "./pages/Products"
import ProductItem from "./pages/ProductItem"
import Checkout from "./pages/Checkout"
import Cart from "./pages/Cart"
import Admin from "./pages/Admin"

function Router() {

  const route_details = [
    {
      path: '/',
      element: <Home />,
      exact_path: true,
    },
    {
      path: '/about',
      element: <About />,
      exact_path: false,
    },
    {
      path: '/menu',
      element: <Menu />,
      exact_path: false,
    },
    {
      path: '/menu/:id',
      element: <MenuItem />,
      exact_path: true,
    },
    {
      path: '/products',
      element: <Products />,
      exact_path: false,
    },
    {
      path: '/products/:id',
      element: <ProductItem />,
      exact_path: true,
    },
    {
      path: '/checkout',
      element: <Checkout />,
      exact_path: false,
    },
    {
      path: '/cart',
      element: <Cart />,
      exact_path: false,
    },
    {
      path: '/admin',
      element: <Admin />,
      exact_path: false,
    },
  ]

  const routes = route_details.map((route, index) =>
    route.exact_path ? <Route exact path={route.path} element={route.element} key={index}/> : <Route path={route.path} element={route.element} key={index}/>
  )
  return (
    <Routes>
       {routes}
    </Routes>
  )
}

export default Router;