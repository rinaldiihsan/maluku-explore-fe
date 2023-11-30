import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col tablet:flex-row gap-4 text-center tablet:text-start justify-between py-[40px] font-poppins items-center">
      <Link to="/" className="navbar-logo w-[220px]">
        <img src="/logo.svg" alt="Maluku Explore" />
      </Link>
      <p className="text-[#989AAE] text-sm">
        All rights reserved Maluku Explore by Kelompok 5 BE Vocasia 2023
      </p>
    </footer>
  );
};

export default Footer;
