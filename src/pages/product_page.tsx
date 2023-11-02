import React from "react";
import { FaWpbeginner } from 'react-icons/fa'
import './home_page.css'
import GalleryComponent from "../components/gallery_component";


export default function ProductPage() {
  return (
    <>
      <section className="w-full">
        <div id="" className="relative h-96 background-image">
          <div className="absolute h-44 bottom-0 right-0 left-0 flex flex-col items-center justify-center text-white p-4 linear-gradient">
            <FaWpbeginner id="icon" />
            <p className="text-2xl font-bold text-[#FFF5E1]">Nos oeuvres</p>
            <p className="text-sm text-center">Nous sommes spécilisés dans l'industrie du bois, gérer par TABAKALA Mexan Guillaume, Ingénieur technologique en transformation mécanique du bois, diplômé en étude approfondie en écologie</p>
          </div>
        </div>
      </section>
      <section id="section-product" >
        <div>
          <h1 className="text-xl font-medium text-gray-900">Nos produits</h1>
          <hr className="my-4 pt-6 bg-cyan-600 border-0 rounded md:my-10" />
        </div>
        <div id="products" className="">
          <GalleryComponent/>
        </div>
      </section>
    </>
  );
}
