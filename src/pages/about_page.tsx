import { Card } from 'flowbite-react';
import React from 'react';
import { MdContactEmergency } from "react-icons/md"

export default function AboutPage() {
  return (
    <>
      <section className="w-full">
        <div id="" className="relative h-96 background-image">
          <div className="absolute h-44 bottom-0 right-0 left-0 flex flex-col items-center justify-center text-white p-4 linear-gradient">
            <MdContactEmergency id="icon" />
            <p className="text-lg font-bold text-[#FFF5E1]">Les informations sur notre entreprise</p>
            <p className="text-sm text-center">Nous avons l'art de façonner la nature</p>
          </div>
        </div>
      </section>
      <section id="section-contact" className='mb-4'>
        <div className='mb-6'>
          <h1 className="text-xl font-medium text-gray-900">A propos de nous</h1>
          <hr className="my-4 pt-6 bg-cyan-600 border-0 rounded md:my-10" />
        </div>
        <div className="container about mx-auto">
          <div className="about-child text-justify col-span-2 padding-r-4">
            <p className="mt-8 mb-8 ">Le CABINET CONSEIL GUILLAUME INDUSTRIES (C.C.G.I), se base sur des projets de génie forestier et génie du bois, étudie et réalise directement les projets ou en partenariat avec d'autres intermédiaires, tout en prenant en compte les paramètres techniques, technologiques, économiques et financiers.
              <br />
              Notre force est que nous intervenons aussi bien en phase de conception qu'en phase d'exécution. Et ce, dans le souci de bénéfices immédiats et de respect des délais.
            </p>
            <p className="mt-4 .margin-t-0">
              En phase de conception et dans le but de répondre à l'exigence du client, nous nous efforçons d'explorer toutes les pistes possibles.
              En phase d'exécution, la recherche de variantes, de solutions techniques alternatives permet de gagner en efficacité et d'optimiser les coûts.
              Le CABINET CONSEIL GUILLAUME INDUSTRIES (C.C.G.I) investit dans les technologies les plus avancées pour offrir des prestations de haut niveau.</p>
          </div>
          <div className="pt-4">
            <video controls autoPlay src="/video.MP4"></video>
            <p className="text-center">Mr TABAKALA Mexan Guillaume</p>
          </div>
        </div>
      </section>
    </>
  );
}
