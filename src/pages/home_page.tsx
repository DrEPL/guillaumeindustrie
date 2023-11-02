import React from "react";
import HeaderComponent from "../components/layout_componet";
import logo from "../assets/ustensile-3.jpg"
import {FaWpbeginner} from 'react-icons/fa'


export default function HomePage() {
  return (
    <>
      <section className="group w-full">
        <div className="relative h-96" style={{ backgroundImage: `url(${logo})`, backgroundSize: `cover`, backgroundPosition: `bottom center` }}>
          <div className="absolute h-44 bottom-0 right-0 left-0 flex flex-col items-center justify-center text-white p-4" style={{background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))`,}}>
            <FaWpbeginner style={{fontSize: '75px', color: 'RGB(255, 245, 225)'}}/>
            <p className="text-2xl font-bold text-[#FFF5E1]">Bienvenue sur notre site</p>
            <p className="text-sm text-center">Nous sommes spécilisés dans l'industrie du bois, gérer par TABAKALA Mexan Guillaume, Ingénieur technologique en transformation mécanique du bois, diplômé en étude approfondie en écologie</p>
          </div>
        </div>
      </section>
    </>
  );
}
