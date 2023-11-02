
'use client';

import { Footer } from 'flowbite-react';
import React from 'react';

export function FooterComponent() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between block sm:flex sm:items-center sm:justify-between">
            <Footer.Title className='font-bolder text-black text-xl capitalize' title='Cabinet Conseil Guillaume Industrie'></Footer.Title>
          <Footer.LinkGroup className='space-x-3'>
            <Footer.Link href="/about">A propos</Footer.Link>
            <Footer.Link href="/product">Produit</Footer.Link>
            <Footer.Link href="#">Essence</Footer.Link>
            <Footer.Link href="/contact">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright  by="CCGI Developped by Dr EPL" year={2023} />
      </div>
    </Footer>
  );
}
