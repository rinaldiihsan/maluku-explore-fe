import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Layouts/Navbar/Navbar';
import Footer from '../../components/Layouts/Footer/Footer';

const SuccessOrder = () => {
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
      <div className="p-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-clashDisplay font-semibold mb-5">Success Order Tiket!</h1>
        <img src="/success.svg" alt="Success Order Tiket" className="w-481 h-486 mt-5 mb-5" />
        <p className="font-clashDisplay text-center text-2xl mt-5 font-medium">Check your order history to get the ticket QR Code</p>
        <p className="font-clashDisplay text-center text-2xl mb-8 font-medium">Thanks for buying a ticket from us!</p>
        <a href="/home" className="bg-myDarkGreen hover:bg-myGreen1 text-white font-semibold py-2 px-4 rounded-lg font-poppins transition-all duration-200 ease-in-out">
          Go to Home
        </a>
      </div>
      <Footer />
    </>
  );
};

export default SuccessOrder;
