import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  const [DropdownProfile, setDropdownProfile] = useState(false);

  const toggleDropdown = () => {
    setDropdownProfile(!DropdownProfile);
  };

  const logout = async () => {
    try {
      await axios.delete('http://localhost:3000/auth/logout');
      navigate('/');
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

      <div
        className="mt-8 tablet:mt-0 navbar-extra flex gap-x-3 items-center relative"
        onClick={toggleDropdown}
      >
        <div className="relative cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
                d="M20.2001 21.3C20.0834 21.2834 19.9334 21.2834 19.8001 21.3C16.8668 21.2 14.5334 18.8 14.5334 15.85C14.5334 12.8334 16.9668 10.3834 20.0001 10.3834C23.0168 10.3834 25.4668 12.8334 25.4668 15.85C25.4501 18.8 23.1334 21.2 20.2001 21.3Z"
                stroke="#005100"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M31.2333 32.3C28.2666 35.0166 24.3333 36.6666 19.9999 36.6666C15.6666 36.6666 11.7333 35.0166 8.7666 32.3C8.93327 30.7333 9.93327 29.2 11.7166 28C16.2833 24.9666 23.7499 24.9666 28.2833 28C30.0666 29.2 31.0666 30.7333 31.2333 32.3Z"
                stroke="#005100"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.9999 36.6666C29.2047 36.6666 36.6666 29.2047 36.6666 20C36.6666 10.7952 29.2047 3.33331 19.9999 3.33331C10.7952 3.33331 3.33325 10.7952 3.33325 20C3.33325 29.2047 10.7952 36.6666 19.9999 36.6666Z"
                stroke="#005100"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
          </svg>
          
          {DropdownProfile && (
            <div className="absolute top-12 right-0 mt-2 w-40 bg-white rounded-md shadow-md overflow-hidden">
              <NavLink to="/profile" className="block px-4 py-2 text-myDarkGreen hover:bg-myGreen1">
                Profile
              </NavLink>
              <NavLink to="/order-history" className="block px-4 py-2 text-myDarkGreen hover:bg-myGreen1">
                Order History
              </NavLink>
              <button
                onClick={logout}
                className="block w-full px-4 py-2 text-white bg-myDarkGreen hover:bg-myGreen1"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
