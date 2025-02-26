import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/Login.jsx';
import RegisterPage from './pages/Register.jsx';
import UserPage from './pages/Users.jsx';
import ProductPage from './pages/Product.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    //nested route
    children: [
      {
        path: "/users",
        element: <UserPage/>,
      },
      {
        path: "/products",
        element: <ProductPage/>,
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
