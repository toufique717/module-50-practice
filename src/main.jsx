import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componant/Root/Root.jsx';
import Home from './componant/Home/Home.jsx';
import Login from './componant/Login/Login.jsx';
import Register from './componant/Register/register.jsx';
import Heroregister from './componant/Heroregister/Heroregister.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element:<Login></Login>,
      },

      {
        path: "/register",
        element:<Register></Register>,
      },

      {
        path: "/heroregister",
        element:<Heroregister></Heroregister>,
      },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
