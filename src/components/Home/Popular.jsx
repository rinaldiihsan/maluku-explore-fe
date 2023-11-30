import React from "react";
import pantaiNatsepa from "../../assets/pantai-natsepa.png";
import { Link } from "react-router-dom";
import { HiOutlineMapPin } from "react-icons/hi2";

const Popular = () => {
  const places = [
    {
      id: 1,
      images: pantaiNatsepa,
      nama: "Pantai Natsepa",
      tempat: "Maluku Tengah",
    },
    {
      id: 2,
      images: pantaiNatsepa,
      nama: "Pantai Natsepa",
      tempat: "Maluku Tengah",
    },
    {
      id: 3,
      images: pantaiNatsepa,
      nama: "Pantai Natsepa",
      tempat: "Maluku Tengah",
    },
  ];

  return (
    <section className="section1 flex flex-col justify-center font-poppins items-center py-[70px] gap-y-[70px] max-w-[70rem] mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold font-clashDisplay">
          See the popular places
        </h1>
        <p className="text-[14px]">Explore popular tourist attractions here!</p>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-8 gap-y-10">
        {places.map((data) => (
          <div
            key={data.id}
            className="flex flex-col max-w-[380px] rounded-[28px] px-4 py-7 gap-y-2"
            style={{ outline: "3px solid #000" }}
          >
            <img
              src={data.images}
              alt={data.nama}
              className="w-[380px] h-[225px]"
            />
            <h2 className="font-semibold text-[20px]">{data.nama}</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <HiOutlineMapPin className="text-[25px]" />
                <h3>{data.tempat}</h3>
              </div>
              <a
                href="/tour"
                className="px-4 py-2 text-sm rounded-[10px] hover:bg-myBlack hover:text-myWhite transition-all duration-200 ease-in-out"
                style={{ outline: "2px solid #000" }}
              >
                See More
              </a>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/tour"
        className="bg-myDarkGreen font-semibold text-myWhite px-8 py-4 text-sm rounded-[10px] hover:bg-myGreen1 transition-all duration-200 ease-in-out"
      >
        View More
      </Link>
    </section>
  );
};

export default Popular;
