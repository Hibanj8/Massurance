"use client";
import React, { useState } from "react";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category.toLowerCase());
  };

  return (
    <>
      <div className="relative pb-[110px] pt-[120px] lg:pt-[150px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-[#D0E153] mb-2 block text-lg font-semibold">
                  Notre Portfolio
                </span>
                <h2 className="text-white mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Nos nouveaux projet
                </h2>
                <p className="text-body-color text-base text-white">
                  Explorez notre portefeuille diversifié de projets passionnants.
                  Chaque projet est une réussite, fruit d'une collaboration unique entre notre équipe et nos clients.
                  Chez Massurance, nous vous offrons des solutions d'assurance sur mesure pour répondre à vos besoins spécifiques.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary text-[#D0E153]"
                        : "inactiveClasses text-body-color text-white hover:bg-primary hover:text-[#D0E153]"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("Assurance automobile")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "assurance automobile"
                        ? "activeClasses bg-primary text-[#D0E153]"
                        : "inactiveClasses text-body-color text-white hover:bg-primary hover:text-[#D0E153]"
                    }`}
                  >
                    Assurance automobile
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("Assurance habitation")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "assurance habitation"
                        ? "activeClasses bg-primary text-[#D0E153]"
                        : "inactiveClasses text-body-color text-white hover:bg-primary hover:text-[#D0E153]"
                    }`}
                  >
                    Assurance habitation
                  </button>
                </li>
              
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("Assurance santé")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "assurance santé"
                        ? "activeClasses bg-primary text-[#D0E153]"
                        : "inactiveClasses text-body-color text-white hover:bg-primary hover:text-[#D0E153]"
                    }`}
                  >
                    Assurance santé
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref="/img-projet/img-automobile.jpg"
              category="Assurance automobile"
              title="Creative Agency"
              button="View Details"
              buttonHref="/project/automobile"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/img-projet/img-sante.jpg"
              category="Assurance santé"
              title="Creative Agency"
              button="View Details"
              buttonHref="/project/sante"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="/img-projet/img-maison.jpg"
              category="Assurance habitation"
              title="Creative Agency"
              button="View Details"
              buttonHref="/project/habitation"
              showCard={showCard}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-[#021027] mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-[#021027] mb-5 text-xl font-bold ">{title}</h3>
            <a
              href={buttonHref}
              className="text-body-color text-black bg-[#d0e153b3] border-primary hover:border-[#D0E153] hover:bg-[#D0E153] inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-black"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
