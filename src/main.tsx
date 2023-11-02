import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider } from "react-router-dom";
import Router, { accueil, router } from './routes/routes'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      {/* <Router/> */}
      <RouterProvider router={router} />
  </React.StrictMode>,
)
