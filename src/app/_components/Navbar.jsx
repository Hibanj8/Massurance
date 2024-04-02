"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  // Check if the current path includes '/dashbordSuperAdmin/'
  const hideNavbar = path.includes('/dashbordSuperAdmin/');

  return (
    <header className={`${hideNavbar ? 'hidden' : 'flex'} flex w-screen items-center bg-dark mb-5`}>
      <div className="container ">
        <div className="fixed z-20 backdrop-blur-lg bg-black/30 flex flex-wrap items-center justify-between w-full gap-x-80 p-9 lg:p-0 px-4 lg:px-20 ">
          <div className="flex items-center flex-shrink-0 mr-6 ">
            <Link href="/" className="lg:w-full">
              <Image className="w-24"
                src="/logo.png"
                alt="logo"
                width={900}
                height={900}
              />
            </Link>
            <Link href="/" className="text-white text-2xl text-nowrap"> Massurance </Link>
          </div>
          <div className="flex items-center justify-between px-4  ">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${open && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[350px] rounded-lg bg-[#021027] px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"
                  } `}
              >
                <ul className="blog lg:flex ms-10">
                  <ListItem NavLink="/" className="flex py-2 text-base font-medium text-white bg-transparent transition duration-300 ease-in-out hover:text-[#D0E153] lg:ml-12 lg:inline-flex"
                  >Home</ListItem>
                  <ListItem NavLink="/project" className="flex py-2 text-base font-medium text-white bg-transparent transition duration-300 ease-in-out hover:text-[#D0E153] lg:ml-12 lg:inline-flex"
                  >Projects</ListItem>
                  <ListItem NavLink="/services" className="flex py-2 text-base font-medium text-white bg-transparent transition duration-300 ease-in-out hover:text-[#D0E153] lg:ml-12 lg:inline-flex"
                  >Services</ListItem>
                  <ListItem NavLink="/contacts" className="flex py-2 text-base font-medium text-white bg-transparent transition duration-300 ease-in-out hover:text-[#D0E153] lg:ml-12 lg:inline-flex"
                  >Contact Us</ListItem>
                  <ListItem NavLink="/rendez-vous" className="flex  rounded-md bg-[#25416e] px-3 py-3 text-center text-base ml-8 font-medium text-white hover:bg-[#25416ead] hover:text-white duration-500 lg:px-7x"
                  >Rendez-vous</ListItem>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink, className }) => {
  return (
    <>
      <li>
        <Link
          href={NavLink}
          className={className}
        >
          {children}
        </Link>
      </li>
    </>
  );
};
