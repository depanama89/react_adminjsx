import React from 'react'
import { createRoot } from "react-dom/client";
import Home from './pages/home/Home'
import Product from './pages/product/Product';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Users from './pages/users/Users';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Login from './pages/login/Login';
import "./styles/global.scss"

const App = () => {

  const Layout = ()=>{
    return(
      <div className='main'>
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>

          </div>
          <div className="contentContainer">
            <Outlet/>

          </div>

        </div>


        <Footer/>

      </div>
    )
  }

  const router = createBrowserRouter(
  [ 
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"users",
          element:<Users/>
        },
        {
          path:"products",
          element:<Product/>
        }
      ]
    },
    {
      path:"login",
      element:<Login/>
    }
  ]
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App