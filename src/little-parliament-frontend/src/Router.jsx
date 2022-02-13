import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import MenuItem from "./pages/MenuItem"
import Products from "./pages/Products"
import ProductItem from "./pages/ProductItem"
import Admin from "./pages/Admin"
import AdminPanel from "./pages/AdminPanel"

// Importing all the necessary components that we want to render for each route.

function Router() {
  // Created an array of objects to easily add additional routes if required
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
      path: '/admin',
      element: <Admin />,
      exact_path: false,
    },
    {
       path: '/adminPanel',
       element: <AdminPanel />,
       exact_path: false,
    },
    {
      path: "/*",
      element: <Home />,
      exact_path: false,
    }
  ]

  // Mapping over the route_details array and conditionally creating a route passed off the value of exact_path.
  const routes = route_details.map((route, index) =>
    route.exact_path ? <Route exact path={route.path} element={route.element} key={index} /> : <Route path={route.path} element={route.element} key={index} />
  )
  return (
    <Routes>
      {routes}
    </Routes>
  )
}

export default Router;
