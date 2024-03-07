import React from "react";
import Home from "./home/page";
import Portfolio from "./project/page";
import Service from "./services/page";
import Contact from "./contacts/page";

export default function Page() {
  return (
    <>
      <Home />
      <Portfolio />
      <Service />
      <Contact />
    </>
  );
};
