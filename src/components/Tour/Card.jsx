import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, images, nama, tempat }) => {
  return (
    <section key={id} className="flex flex-col max-w-[380px] rounded-[28px] px-4 py-7 gap-y-2" style={{ outline: '3px solid #000' }}>
      <img src={images} alt={nama} className="w-[380px] h-[225px]" />
      <h2 className="font-semibold text-[20px]">{nama}</h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <svg width="25" height="25" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.5 18.4662C18.8693 18.4662 20.79 16.5455 20.79 14.1762C20.79 11.8069 18.8693 9.88623 16.5 9.88623C14.1307 9.88623 12.21 11.8069 12.21 14.1762C12.21 16.5455 14.1307 18.4662 16.5 18.4662Z"
              stroke="#292D32"
              strokeWidth="1.5"
            />
            <path
              d="M4.9775 11.6738C7.68625 -0.233747 25.3275 -0.219997 28.0225 11.6875C29.6037 18.6725 25.2587 24.585 21.45 28.2425C18.6862 30.91 14.3138 30.91 11.5363 28.2425C7.74125 24.585 3.39625 18.6588 4.9775 11.6738Z"
              stroke="#292D32"
              strokeWidth="1.5"
            />
          </svg>
          <h3>{tempat}</h3>
        </div>
        <a href="/tour" className="px-4 py-2 text-sm rounded-[10px] hover:bg-myBlack hover:text-myWhite transition-all duration-200 ease-in-out" style={{ outline: '2px solid #000' }}>
          See Details
        </a>
      </div>
    </section>
  );
};

export default Card;
