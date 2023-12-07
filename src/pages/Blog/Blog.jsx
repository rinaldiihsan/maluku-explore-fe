import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Blog/Card';

const Blog = () => {
  return (
    <section className="font-poppins mt-[43px]">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-clashDisplay font-semibold text-3xl">Lets know about Maluku!</h1>
          <p className="font-normal">Explore more about Maluku!</p>
        </div>
        <Card />
        <Link to="/blog-detail" className="text-myDarkGreen font-bold mx-2 hover:text-myGreen1">
          Read More
        </Link>
      </div>
    </section>
  );
};

export default Blog;
