import React from "react";

const Service = () => {
  return (
    <div
      className="relative pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px] "
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className=" text-[#D0E153] mb-2 block text-lg font-semibold text-primary">
                Assurances toutes branches
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
               Nos Offres d'Assurance
              </h2>
              <p className="text-base text-body-color text-white">
              Explorez nos offres d'assurance spécialisées pour trouver la couverture qui répond à vos exigences et sécurise votre avenir.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Assurance Automobile"
            details="Nous proposons une gamme complète de polices d'assurance automobile pour protéger votre véhicule et vous assurer une tranquillité d'esprit sur la route."
            icon={
              <img src="/icons/icon-automobile.png" alt="portfolio" className="w-10 h-10" />

            }
          />
          <ServiceCard
            title="Assurance Habitation"
            details=" Nos solutions d'assurance habitation offrent une protection complète pour votre maison, votre contenu et votre responsabilité civile, afin que vous puissiez vous concentrer sur ce qui compte vraiment."
            icon={
              <img src="/icons/icon-habitation.png" alt="portfolio" className="w-10 h-10" />

            }
          />
          <ServiceCard
            title="Assurance Santé"
            details="Notre assurance santé vous offre une couverture médicale fiable et abordable pour vous aider à faire face aux imprévus médicaux sans stress financier."
            icon={
              <img src="/icons/icon-sante.png" alt="portfolio" className="w-10 h-10" />

            }
          />
          <ServiceCard
            title="Assurance Vie"
            details=" Protégez l'avenir financier de votre famille avec notre assurance vie, offrant une tranquillité d'esprit et une sécurité financière en cas de décès."
            icon={
              <img src="/icons/icon-vie.png" alt="portfolio" className="w-10 h-10" />

            }
          />
          <ServiceCard
            title="Assurance Voyage"
            details="Voyagez en toute sérénité avec notre assurance voyage, couvrant une gamme de situations imprévues telles que les annulations de voyage, les urgences médicales et la perte de bagages."
            icon={
              <img src="/icons/icon-voyage.png" alt="portfolio" className="w-10 h-10" />

            }
          />
          <ServiceCard
            title="Assurance Entreprise"
            details="Nous offrons une gamme complète de solutions d'assurance pour les entreprises, y compris l'assurance responsabilité civile, l'assurance des biens,
             et bien plus encore, pour protéger votre entreprise contre les risques financiers."
            icon={
              <img src="/icons/icon-entreprise.png" alt="portfolio" className="w-10 h-10" />

            }
          />
        </div>
      </div>
    </div>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white h-[390px] p-10 duration-300 hover:shadow-lg hover:shadow-[#d0e153aa] z-index-10">
          <div className=" mb-8 flex h-[70px] w-[70px] bg-[#D0E153] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-[#021027]">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
