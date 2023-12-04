import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar flex flex-col tablet:flex-row justify-between font-poppins items-center py-[40px] tablet:sticky tablet:top-0 bg-myWhite">
      <Link to="/" className="navbar-logo w-[220px] mb-5 tablet:mb-0">
        <img src="/logo.svg" alt="Maluku Explore" />
      </Link>
      <ul className="navbar-nav flex gap-[40px]">
        <li className="transition-all duration-200 ease-in-out hover:font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="transition-all duration-200 ease-in-out hover:font-bold">
          <Link to="/about">About</Link>
        </li>
        <li className="transition-all duration-200 ease-in-out hover:font-bold">
          <Link to="/tour">Tour</Link>
        </li>
        <li className="transition-all duration-200 ease-in-out hover:font-bold">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>

      <div className="mt-8 tablet:mt-0 navbar-extra">
        <Link to="/sign-in" className="bg-myDarkGreen font-semibold px-6 py-3 text-white rounded-[14px] hover:bg-myGreen1 transition-all duration-200 ease-in-out">
          Sign In
        </Link>
        <button className="hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4.5H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 9.5H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 14.5H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 19.5H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
