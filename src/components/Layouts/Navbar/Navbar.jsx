import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between font-poppins items-center py-[40px] sticky top-0">
      <Link to="/" className="navbar-logo w-[220px]">
        <img src="/logo.svg" alt="Maluku Explore" />
      </Link>
      <ul className="navbar-nav flex gap-[40px]">
        <li>
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="">
            About
          </Link>
        </li>
        <li>
          <Link to="/tour" className="">
            Tour
          </Link>
        </li>
        <li>
          <Link to="/blog" className="">
            Blog
          </Link>
        </li>
      </ul>
      <div className="navbar-extra">
        <Link to="/sign-in" className="bg-myDarkGreen font-semibold px-6 py-3 text-white rounded-[14px]">
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
