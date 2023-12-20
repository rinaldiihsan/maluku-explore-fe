import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import bannerAbout from '../../assets/banner-about.png';
import Navbar from '../../components/Layouts/Navbar/Navbar';
import Footer from '../../components/Layouts/Footer/Footer';

const About = () => {
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const Navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:3000/auth/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setExpire(decoded.exp);
    } catch (err) {
      if (err.response) {
        Navigate('/');
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:3000/auth/token');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);

        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return (
    <>
      <Navbar />
      <section className="font-poppins flex flex-col justify-center items-center gap-y-8">
        <h1 className="font-clashDisplay text-3xl font-semibold">Who we are?</h1>
        <p className="text-center">
          Maluku Explorer is your reliable source for information about the natural beauty and culture of the Maluku Islands. We provide in-depth articles about the history and unique cultural aspects of the region, along with practical
          travel guides, including options for purchasing tickets to tourist destinations. With user-friendly search and booking features, we make it easy for travelers to plan unforgettable adventures in the Maluku Islands. Welcome to
          Maluku Explorer, your travel companion!
        </p>
        <img src={bannerAbout} alt="Banner About" />
      </section>
      <Footer />
    </>
  );
};

export default About;
