import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/scss/_main.scss'
import { createBrowserRouter, RouterProvider} from "react-router-dom"

import Root from './router/root'
import Error404 from './pages/Error-404'
import Contact from './pages/Contact'
import About from './pages/About'
import Test from './test/products-page/test-page'
import Products from './pages/Products'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "products",
        element: <Products /> 
      },
      {
        path: "about",
        element: <About />,
      }
    ],
  },


  {
    path: "/test",
    element: <Test/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router} />
)
