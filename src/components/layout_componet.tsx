'use client';

import React, {  } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from './header_component';
import { FooterComponent } from './footer_component';

export default function LayoutComponent() {

    return (
        <>
            <HeaderComponent />
            <main>
                <Outlet />
            </main>
            <FooterComponent/>
        </>
    )
}





