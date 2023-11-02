import React from 'react';
import HomePage from '../pages/home_page'
import { BrowserRouter, Navigate, Route, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AboutPage from '../pages/about_page';
import ContactPage from '../pages/contact_page';
import ProductPage from '../pages/product_page';
import ErrorPage from '../pages/error_page';
import LayoutComponent from '../components/layout_componet';

// export const accueil = createBrowserRouter([
//     {
//         path: "/",
//         element: HeaderComponent(),
//         errorElement: <ErrorPage />,
//         children: [
//             {
//                 path: "/",
//                 element: HomePage(),
//             },
//             {
//                 path: "/about",
//                 element: AboutPage(),
//             },
//             {
//                 path: "/contact",
//                 element: ContactPage(),
//             },
//             {
//                 path: "/product",
//                 element: ProductPage(),
//             },
//         ]
//     },

// ]);

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<LayoutComponent />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={AboutPage()} />
                <Route path="/contact" element={ContactPage()} />
                <Route path="/product" element={ProductPage()} />
            </Route><Route path="*" element={ErrorPage()} />
        </>
    )
);

// export default function Router() {
//     return (
//       <BrowserRouter>
//         <Routes>
//           {/* 1️⃣ Wrap your routes in a pathless layout route */}
//           <Route element={<HeaderComponent />}>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/about" element={AboutPage()} />
//             <Route path="/contact" element={ContactPage()} />
//             <Route path="/product" element={ProductPage()} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     );
//   }