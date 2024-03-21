"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  const sliderRef = React.useRef(null);

  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="pb-20 pt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px] ">
      <div className="container mx-auto ">
        <Swiper slidesPerView={1} ref={sliderRef}>
          <SwiperSlide>
            <SingleTestimonial
              image="/img-projet/img-automobile.jpg"
              reviewImg="Assurance automobile"
              reviewAlt="Photo d'une voiture moderne sur une route"
              details="Ce projet vise à fournir une assurance complète pour les véhicules automobiles. Il couvre une gamme de services tels que l'assurance responsabilité civile, l'assurance tous risques, l'assurance contre le vol, etc."
              name="Assurance Automobile"
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <SingleTestimonial
              image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
              reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
              reviewAlt="lineicon"
              details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
              name="Larry Diamond"
              position="Chief Executive Officer."
            />
          </SwiperSlide> */}
        </Swiper>

      </div>
    </section>
  );
};

const SingleTestimonial = ({
  image,
  reviewImg,
  reviewAlt,
  details,
  name,
  position,
}) => {
  return (
    <div className="relative flex justify-center ">
      <div className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12 bg-white rounded-xl shadow-white shadow-lg p-12 mt-12">
        <div className="w-full items-center md:flex">
          <div className="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16">
            <img src={image} alt="image" className=" ml-3 w-full rounded-xl shadow-lg shadow-slate-700" />
            <span className="absolute -bottom-6 -right-6 z-[-1]">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                  stroke="#13C296"
                  strokeWidth="6"
                />
              </svg>
            </span>
          </div>
          <div className="w-full">
            <div>
              <div className="mt-6 text-[#D0E153]  block text-xl font-semibold">
                <h1 >{reviewImg}</h1>
              </div>

              <p className="mt-11 text-base font-normal italic leading-[1.81] text-body-color dark:text-dark-6 sm:text-[22px]">
                {details}
              </p>

              <h4 className="mb-2 text-[22px] font-semibold leading-[27px] text-dark dark:text-white">
                {name}
              </h4>
              <p className="text-base text-body-color dark:text-dark-6">
                {position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
