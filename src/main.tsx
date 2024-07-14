import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Menu } from './pages/Menu/Menu'
import { Cart } from './pages/Cart/Cart'
import MainPage from './layout/MainPage/MainPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
    children: [
      {
        path: '/menu',
        element: <Menu/>,
      },
      {
        path: '/cart',
        element: <Cart/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
