import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Layouts/Navbar/Navbar';
import Footer from '../../components/Layouts/Footer/Footer';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/blog/get/${id}`);

        if (response.data && response.data.data) {
          setBlog(response.data.data);
        } else {
          setError('Invalid response format. Expected "data" property.');
        }
      } catch (error) {
        console.error('Error fetching blog detail:', error);
        setError('Error fetching blog detail. Please try again later.');
      }
    };

    fetchBlogDetail();
  }, [id]);

  const getImageUrl = (imageId) => {
    return `http://localhost:3000/imageBlog/get-image/${imageId}`;
  };

  if (error) {
    return (
      <>
        <Navbar />
        <section className="font-poppins flex flex-col justify-center items-center gap-y-8">
          <p>{error}</p>
        </section>
        <Footer />
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Navbar />
        <section className="font-poppins flex flex-col justify-center items-center gap-y-8">
          <p>Loading...</p>
        </section>
        <Footer />
      </>
    );
  }

  const currentDate = new Date(blog.createdAt);
  const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <Navbar />
      <section className="font-poppins flex flex-col justify-center items-center gap-y-8">
        <img
          src={getImageUrl(blog.imageId)}
          alt={blog.title}
          className="rounded-[52px]"
          style={{
            width: '1130px',
            height: '504px',
            borderRadius: '52px',
          }}
        />
        <h1 className="font-clashDisplay font-semibold text-[30px]">{blog.title}</h1>
        <div className="flex justify-center items-center gap-x-2 ">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3335 3.33331V8.33331" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M26.6665 3.33331V8.33331" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.8335 15.15H34.1668" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M35 14.1666V28.3333C35 33.3333 32.5 36.6666 26.6667 36.6666H13.3333C7.5 36.6666 5 33.3333 5 28.3333V14.1666C5 9.16665 7.5 5.83331 13.3333 5.83331H26.6667C32.5 5.83331 35 9.16665 35 14.1666Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path d="M26.1577 22.8333H26.1726" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M26.1577 27.8333H26.1726" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.9926 22.8333H20.0076" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.9926 27.8333H20.0076" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.8237 22.8333H13.8387" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.8237 27.8333H13.8387" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span className="text-myBlack font-medium">{new Date(blog.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>
        <p className="text-justify">{blog.body}</p>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetail;
