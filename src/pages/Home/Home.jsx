import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Hero from '../../components/Home/Hero';
import Popular from '../../components/Home/Popular';
import Comment from '../../components/Home/Comment';
import Features from '../../components/Home/Features';
import Navbar from '../../components/Layouts/Navbar/Navbar';
import Footer from '../../components/Layouts/Footer/Footer';

const Home = () => {
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
      <section className="font-poppins">
        <Hero />
        <Popular />
        <Features />
        <Comment />
      </section>
      <Footer />
    </>
  );
};

export default Home;
