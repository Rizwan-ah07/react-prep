import React from 'react'
import { Outlet, NavLink, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Opdracht1 from './pages/Opdracht1';

import './App.css'
import Opdracht2 from './pages/Opdracht2';
import Opdracht3 from './pages/Opdracht3';


const Root = () => {
  return (
    <div>

      <h1>Mijn react app</h1>
      
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/opdracht1'>Opdracht 1</NavLink>
        <NavLink to='/opdracht2'>Opdracht 2</NavLink>
        <NavLink to='/opdracht3'>Opdracht 3</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
          path: "",
          element: <Home/>
        },
        {
          path: "Opdracht1",
          element: <Opdracht1/>
        },
        {
          path: "Opdracht2",
          element: <Opdracht2/>
        },
        {
          path: "Opdracht3",
          element: <Opdracht3/>
        },

      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
