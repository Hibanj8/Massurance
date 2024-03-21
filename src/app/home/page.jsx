import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <div
            className="relative pb-[110px] pt-[120px] lg:pt-[150px] "
        >
            <div className="container ml-5 mt-0">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-5/12">
                        <div className="hero-content pt-0 lg:pl-14">
                            <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                            Bienvenue chez Massurance
                            </h1>
                            <p className="mb-8 max-w-[480px] text-base text-white dark:text-dark-6">
                                <span className="text-[#25416e] text-xl font-semibold " >votre expert en assurance.</span> <br /> <br />
                                Bienvenue chez Massurance, votre partenaire de confiance depuis plus de 40 ans. 
                                Nous sommes là pour vous offrir des solutions d'assurance sur mesure, adaptées à vos besoins spécifiques.
                                Avec notre expertise et notre engagement envers la satisfaction client, vous pouvez avoir l'esprit tranquille en sachant que vous êtes entre de bonnes mains. 
                                Découvrez nos services dès aujourd'hui et protégez ce qui compte le plus pour vous avec Massurance.
                            </p>
                            <ul className="flex flex-wrap items-center">
                                <li>
                                    <Link
                                        href="/rendez-vous"
                                        className="inline-flex items-center justify-center rounded-md bg-[#D0E153] px-6 py-3 text-center text-base font-medium text-[#25416e] hover:bg-[#25416e] hover:text-white duration-500 lg:px-7"
                                    >
                                        Rendez-vous
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services"
                                        className=" ml-3 inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-white hover:text-[#D0E153] duration-500"
                                    >
                                        Services
                                    </Link>
                                </li>
                            </ul>



                        </div>
                    </div>
                    <div className="hidden px-4 lg:block lg:w-1/12 "></div>
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="lg:ml-auto lg:text-right">
                            <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                <img
                                    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                                    alt="hero"
                                    className="max-w-full lg:ml-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const SingleImage = ({ href, imgSrc }) => {
    return (
        <>
            <Link href={href} className="flex w-full items-center justify-center">
                <img src={imgSrc} alt="brand image " className="h-10 w-full" />
            </Link>
        </>
    );
};