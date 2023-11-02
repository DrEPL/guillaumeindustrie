import { Card } from 'flowbite-react';
import React from 'react';
import {MdContactEmergency} from "react-icons/md"
import { GoogleMapComponent } from '../components/google_map';

export default function ContactPage() {
  return (
    <>
      <section className="w-full">
        <div id="" className="relative h-96 background-image">
          <div className="absolute h-44 bottom-0 right-0 left-0 flex flex-col items-center justify-center text-white p-4 linear-gradient">
            <MdContactEmergency id="icon" />
            <p className="text-lg font-bold text-[#FFF5E1]">Contactez-nous</p>
            <p className="text-sm text-center">Nous avons l'art de façonner la nature</p>
          </div>
        </div>
      </section>
      <section id="section-contact">
        <div className='mb-6'>
          <h1 className="text-xl font-medium text-gray-900">Nos contacts</h1>
          <hr className="my-4 pt-6 bg-cyan-600 border-0 rounded md:my-10" />
        </div>
        <div className='flex flex-wrap justify-center gap-4 mb-6'>
          <Card className="max-w-xs text-center">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Adresse mail
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            tabakamexan@gmail.com
            </p>
          </Card>
          <Card className="max-w-xs text-center">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Adresse
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            172 bis rue Dolisie, Ouenze, Brazzaville
            </p>
          </Card>
          <Card className="max-w-xs text-center">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Téléphone
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            +242 06 937 82 05 / +242 05 528 45 05
            </p>
          </Card>
        </div>
          <Card className="">
            <GoogleMapComponent/>
          </Card>
      </section>
    </>
  );
}
