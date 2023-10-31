import React from 'react';
import HomePage from '../pages/home_page'
import { createBrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/about_page';
import ContactPage from '../pages/contact_page';
import ProductPage from '../pages/product_page';
import ErrorPage from '../pages/error_page';
import HeaderComponent from '../components/header';

export const accueil = createBrowserRouter([
    {
        path: "/",
        element: HeaderComponent(),
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: HomePage(),
            },
            {
                path: "/about",
                element: AboutPage(),
            },
            {
                path: "/contact",
                element: ContactPage(),
            },
            {
                path: "/product",
                element: ProductPage(),
            },
        ]
    },

]);