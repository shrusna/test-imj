import React from 'react'
import ReactDOM from 'react-dom/client'
import 'flowbite'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Bitcoin from './pages/Bitcoin'
import Dashboard from './pages/Dashboard'
import TransactionByHash from './pages/TransactionByHash'


const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/bitcoin',
    element: <Bitcoin />,
  },
  {
    path: '/transaction/hash',
    element: <TransactionByHash />,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
