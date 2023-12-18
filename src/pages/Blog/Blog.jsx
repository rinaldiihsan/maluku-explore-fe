import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Blog/Card';
import Navbar from '../../components/Layouts/Navbar/Navbar';
import Footer from '../../components/Layouts/Footer/Footer';

const Blog = () => {
  return (
    <>
      <Navbar />
      <section className="font-poppins mt-[43px]">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="font-clashDisplay font-semibold text-3xl">Lets know about Maluku!</h1>
            <p className="font-normal">Explore more about Maluku!</p>
          </div>
          <Card />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
