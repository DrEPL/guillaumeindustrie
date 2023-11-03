import React, { useEffect, useState } from 'react';
import { Navbar } from 'flowbite-react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/react.svg'

export default function HeaderComponent() {
    const location = useLocation();
    const [url, setUrl] = useState(location.pathname);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);
    return (
        <Navbar fluid rounded>
            <Navbar.Brand>
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="hidden md:block  self-center whitespace-nowrap text-lg font-semibold dark:text-white">Cabinet Conseil Guillaume Industrie</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse >
                <Navbar.Link active={url === "/" ? true : false}>
                    <NavLink to="/">Accueil</NavLink>
                </Navbar.Link>
                <Navbar.Link active={url === "/about" ? true : false}>
                    <NavLink to="/about">A propos</NavLink>
                </Navbar.Link>
                <Navbar.Link active={url === "/product" ? true : false}>
                    <NavLink to="/product" className="active">Produit</NavLink>
                </Navbar.Link>
                <Navbar.Link active={url === "/essence" ? true : false}>
                    <NavLink to="/essence">Essence</NavLink>
                </Navbar.Link>
                <Navbar.Link active={url === "/contact" ? true : false}>
                    <NavLink to="/contact">Contact</NavLink>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
