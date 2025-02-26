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
import BookPage from './pages/Book.jsx';
import ToDoApp from './components/todo/ToDoApp.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    //nested route
    children: [
      {
        index: true,
        element: <ToDoApp />
      },
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/books",
        element: <BookPage />,
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
