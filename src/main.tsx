import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './pages/home_page'
import HeaderComponent from './components/header'
import {  RouterProvider } from "react-router-dom";
import { accueil } from './routes/routes'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <HeaderComponent /> */}
      <RouterProvider router={accueil}>
      </RouterProvider>
  </React.StrictMode>,
)
