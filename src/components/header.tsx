'use client';

import { Navbar } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import logo from '../assets/react.svg'
import { Outlet, NavLink, useLocation } from 'react-router-dom';

export default function HeaderComponent() {
    // const location = useLocation();
    // const [url, setUrl] = useState("/");
    // useEffect(() => {
    //     setUrl(location.pathname);
    // }, [location]);
    const urlname: string = "/about";
    return (
        <>
            <Navbar fluid rounded>
                <Navbar.Brand>
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Cabinet Conseil Guillaume Industrie</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link active={urlname === "/" ? true : false}>
                        <NavLink to="/">Accueil</NavLink>
                    </Navbar.Link>
                    <Navbar.Link active={urlname === "/about" ? true : false}>
                        <NavLink to="/about">A propos</NavLink>
                    </Navbar.Link>
                    <Navbar.Link active={urlname === "/product" ? true : false}>
                        <NavLink to="/product" className="active">Produit</NavLink>
                    </Navbar.Link>
                    <Navbar.Link active={urlname === "/" ? true : false}>
                        <NavLink to="#">Essence</NavLink>
                    </Navbar.Link>
                    <Navbar.Link active={urlname === "/contact" ? true : false}>
                        <NavLink to="/contact">Contact</NavLink>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <section>
                <Outlet />
            </section>
        </>
    )
}





