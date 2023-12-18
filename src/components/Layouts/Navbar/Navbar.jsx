import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const Navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:3000/auth/logout');
      Navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar flex flex-col tablet:flex-row justify-between font-poppins items-center py-[40px] tablet:sticky tablet:top-0 bg-myWhite">
      <Link to="/home" className="navbar-logo w-[220px] mb-5 tablet:mb-0">
        <img src="/logo.svg" alt="Maluku Explore" />
      </Link>
      <ul className="navbar-nav flex gap-[40px]">
        <li className="transition-all duration-200 ease-in-out hover:font-bold">
          <Link to="/home">Home</Link>
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
        <button onClick={Logout} className="bg-myDarkGreen font-semibold px-6 py-3 text-white rounded-[14px] hover:bg-myGreen1 transition-all duration-200 ease-in-out">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
