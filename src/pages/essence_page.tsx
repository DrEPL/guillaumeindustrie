import { Card } from 'flowbite-react';
import React from 'react';
import { MdContactEmergency } from "react-icons/md"

export default function EssencePage() {
    return (
        <>
            <section className="w-full">
                <div id="" className="relative h-96 background-image">
                    <div className="absolute h-44 bottom-0 right-0 left-0 flex flex-col items-center justify-center text-white p-4 linear-gradient">
                        <MdContactEmergency id="icon" />
                        <p className="text-lg font-bold text-[#FFF5E1]">A savoir</p>
                        <p className="text-sm text-center">Nous avons l'art de façonner la nature</p>
                    </div>
                </div>
            </section>
            <section id="section-contact">
                <div className='mb-6'>
                    <h1 className="text-xl font-medium text-gray-900">Nos principales essences</h1>
                    <hr className="my-4 pt-6 bg-cyan-600 border-0 rounded md:my-10" />
                </div>
                <div className='flex flex-wrap gap-4 mb-6 p-0 justify-center'>
                    <div className="max-w-xs h-450 bg-white border border-gray-200 rounded-lg box px-4 shadow">
                        <div className="padding-y-24 flex flex-col items-center">
                            <h5 className="text-sm text-right font-bold tracking-tight text-gray-900 dark:text-white self-start">
                                L'ESSENCE EXOTIQUE WENGÉ
                            </h5>
                            <hr className=" bg-cyan-600 border-0 hr rounded md:my-10" />
                            <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
                                L'essence wengé est un bois de haut de gamme en raison de sa rareté et de sa beauté célèbre pour sa couleur très foncée, allant du brun au noir, avec des nuances de veines noires qui ajoutent une belle profondeur et un contraste visuel.
                                C’est un bois dur et dense, ce qui le rend très résistant à l'usure, à l'humidité, aux termites, aux insectes de bois sec, ainsi qu’aux champignons, peu imprégnable. Il n’est donc pas nécessaire de le traiter.
                                Ses caractéristiques en font une essence tropicale polyvalente.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-xs h-450 bg-white border border-gray-200 rounded-lg box px-4 shadow">
                        <div className="padding-y-24 flex flex-col items-center">
                            <h5 className="text-sm text-right font-bold tracking-tight text-gray-900 dark:text-white self-start">
                                L'ESSENCE EXOTIQUE IROKO
                            </h5>
                            <hr className=" bg-cyan-600 border-0 hr rounded md:my-10" />
                            <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
                                L'Iroko est un bois de couleur jaune doré à brun olive, avec un grain qui peut varier de droit à légèrement ondulé. Il a une apparence chaleureuse et terreuse.
                                Il a tendance à devenir plus foncé avec le temps, passant du jaune doré à un brun plus profond. Ce changement de couleur est naturel et fait partie de son charme.
                                L'Iroko est généralement considéré comme un bois de milieu de gamme en termes de coût. Il offre un bon équilibre entre qualité et prix.
                                L'Iroko est apprécié pour sa durabilité naturelle. Il est résistant aux insectes, à la pourriture et à l'humidité.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-xs h-450 bg-white border border-gray-200 rounded-lg box px-4 shadow">
                        <div className="padding-y-24 flex flex-col items-center">
                            <h5 className="text-sm text-right font-bold tracking-tight text-gray-900 dark:text-white self-start">
                                L'ESSENCE EXOTIQUE PADOUK
                            </h5>
                            <hr className=" bg-cyan-600 border-0 hr rounded md:my-10" />
                            <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
                            De couleur rouge vif, devenant progressivement un rouge foncé à la lumière, l’essence exotique padouk est un bois très durable,
                             qui ne nécessite aucun traitement de préservation. Il faut ainsi noter le double avantage économique et écologique de l’utilisation de cette essence. Elle peut être utilisée sans traitement en milieu marin ou en eau saumâtre mais uniquement en milieu tempéré et froid.
                             Le Padouk est considéré comme un bois durable, résistant aux termites et à la pourriture.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-xs h-450 bg-white border border-gray-200 rounded-lg box px-4 shadow">
                        <div className="padding-y-24 flex flex-col items-center">
                            <h5 className="text-sm text-right font-bold tracking-tight text-gray-900 dark:text-white self-start">
                                L'ESSENCE EXOTIQUE TECK
                            </h5>
                            <hr className=" bg-cyan-600 border-0 hr rounded md:my-10" />
                            <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
                            Le teck est célèbre pour sa couleur miel doré à brun doré et son grain droit et uniforme, sa durabilité naturelle.
                             Il est résistant aux intempéries, à la pourriture, et il possède des huiles naturelles qui le protègent des insectes.
                            Il requiert peu d'entretien. Au fil du temps, il développe une belle patine argentée sous l'influence des éléments. Cependant, si vous souhaitent maintenir sa couleur d'origine, vous pouvez traiter le bois avec de l'huile de teck spéciale.
                            Le teck est généralement considéré comme un bois coûteux en raison de sa rareté et de sa grande demande.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
