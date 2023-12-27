import React from 'react';
import HeroImg from '../../assets/hero.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="section1 flex flex-col justify-center font-poppins items-center h-[80vh] py-[90px] gap-y-[70px] mx-auto rounded-3xl object-cover bg-cover"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-6 text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]">
          <p className="text-2xl tablet:text-5xl font-semibold text-center font-clashDisplay">
            Let's start <br />
            your exciting journey !
          </p>
          <p className="text-[12px] tablet:text-[14px] text-center">
            Your Gateway to Nature, History and Hossle-tree Travel Planning. Discover <br /> Accomodation Options and Book Ticket with Excel
          </p>
        </div>

        <div className="flex gap-2">
          <Link to="/tour" className="px-4 tablet:px-7 py-4 font-semibold text-[16px] text-white bg-myDarkGreen rounded-[12px] flex gap-x-2 hover:bg-myGreen2 transition-all duration-200 ease-in-out">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.29001 7.78001V17.51C2.29001 19.41 3.64001 20.19 5.28001 19.25L7.63001 17.91C8.14001 17.62 8.99001 17.59 9.52001 17.86L14.77 20.49C15.3 20.75 16.15 20.73 16.66 20.44L20.99 17.96C21.54 17.64 22 16.86 22 16.22V6.49001C22 4.59001 20.65 3.81001 19.01 4.75001L16.66 6.09001C16.15 6.38001 15.3 6.41001 14.77 6.14001L9.52001 3.52001C8.99001 3.26001 8.14001 3.28001 7.63001 3.57001L3.30001 6.05001C2.74001 6.37001 2.29001 7.15001 2.29001 7.78001Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M8.56 4V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.73 6.62V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Lets Tour
          </Link>
          <Link to="/blog" className="px-4 tablet:px-7 py-4 font-semibold text-[16px] text-white bg-myGreen1 rounded-[12px] hover:bg-myGreen2 transition-all duration-200 ease-in-out">
            See Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
