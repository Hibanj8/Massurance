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
                        <div className="hero-content pt-8 lg:pl-14">
                            <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                Welcome to Tech Innovate Showcase
                            </h1>
                            <p className="mb-8 max-w-[480px] text-base text-white dark:text-dark-6">
                                <span className="text-[#25416e] text-xl font-semibold " >Who We Are?</span> <br /> <br />
                                Welcome to Tech Innovate Showcase, your dedicated hub for
                                the latest technological innovations and creative solutions.
                                We are a passionate team of developers,
                                designers, and technology experts working together to create
                                outstanding digital experiences.
                            </p>
                            <ul className="flex flex-wrap items-center">
                                <li>
                                    <Link
                                        href="/contacts"
                                        className="inline-flex items-center justify-center rounded-md bg-[#25416e] px-6 py-3 text-center text-base font-medium text-white hover:bg-[#D0E153] hover:text-[#000815] duration-500 lg:px-7"
                                    >
                                        Contact Us
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
                <img src={imgSrc} alt="brand image" className="h-10 w-full" />
            </Link>
        </>
    );
};