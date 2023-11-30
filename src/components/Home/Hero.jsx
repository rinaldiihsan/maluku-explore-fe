import React from "react";
import { TbMapSearch } from "react-icons/tb";
import HeroImg from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      className="section1 flex flex-col justify-center font-poppins items-center h-[80vh] py-[90px] gap-y-[70px] mx-auto rounded-3xl object-cover bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(23, 23, 23, 0.6), rgba(23, 23, 23, 0.6)), url(${HeroImg})`,
      }}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-6 text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]">
          <p className="text-5xl font-bold text-center font-clashDisplay">
            Let's Start <br />
            your exciting journey!
          </p>
          <p className="text-[14px] text-center">
            Your Gateway to Nature, History and Hossle-tree Travel Planning.
            Discover <br /> Accomodation Options and Book Ticket with Excel
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-6 py-3 font-[500] text-[14px] text-white bg-green-700 rounded-md flex gap-1">
            <TbMapSearch className="text-[20px]" /> Lets Tour
          </button>
          <button className="px-6 py-3 font-[500] text-[14px] text-white bg-myGreen1 rounded-md">
            See Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
