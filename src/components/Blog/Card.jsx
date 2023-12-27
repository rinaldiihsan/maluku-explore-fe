import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Card = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/blog/get');

        if (response.data && response.data.data) {
          setBlogs(response.data.data);
        } else {
          setError('Invalid response format. Expected "data" property.');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Error fetching blogs. Please try again later.');
      }
    };

    fetchBlogs();
  }, []);

  const getImageUrl = (imageId) => {
    return `http://localhost:3000/imageBlog/get-image/${imageId}`;
  };

  return (
    <section className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-6 gap-y-10 mt-[50px]">
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          {blogs.map((blog) => (
            <React.Fragment key={blog.id}>
              <div className="relative">
                <Link to={`/blog-detail/${blog.id}`}>
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-[0.3] rounded-[50px] w-[360px]"></div>
                  <img src={getImageUrl(blog.imageId)} alt={blog.title} className="rounded-[50px] w-[360px] h-[230px]" />
                  <div className="absolute top-[63%] left-0 right-0 bottom-0 flex flex-col text-white font-poppins px-7">
                    <p className="text-[15px]">{new Date(blog.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    <h2 className="font-semibold text-[16px]">{blog.title}</h2>
                  </div>
                </Link>
              </div>
            </React.Fragment>
          ))}
        </>
      )}
    </section>
  );
};

export default Card;
