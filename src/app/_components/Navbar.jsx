"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-screen items-center bg-dark mb-5`}>
      <div className="container ">
        <div className="fixed z-20 backdrop-blur-lg bg-black/30 flex flex-wrap items-center justify-between w-full gap-x-80 p-9 lg:p-0 px-4 lg:px-20 ">
          <div className="flex items-center flex-shrink-0 mr-6 ">
            <Link href="/" className="lg:w-full">
              <Image className="w-24 "
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
                className={`absolute right-4 top-full w-full max-w-[350px] rounded-lg bg-[#021027]/80 px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"
                  } `}
              >
                <ul className="blog lg:flex ms-10">
                  <ListItem NavLink="/home">Home</ListItem>
                  <ListItem NavLink="/project">Projects</ListItem>
                  <ListItem NavLink="/services">Services</ListItem>
                  <ListItem NavLink="/contacts">Contact Us</ListItem>
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

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <Link
          href={NavLink}
          className="flex py-2 text-base font-medium text-white bg-transparent transition duration-300 ease-in-out hover:text-[#D0E153] lg:ml-12 lg:inline-flex"
        >
          {children}
        </Link>
      </li>
    </>
  );
};
