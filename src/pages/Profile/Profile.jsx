// Profile.js
import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Layouts/Navbar/Navbar';
import Footer from '../../components/Layouts/Footer/Footer';

const Card = () => {
  return (
    <div className="bg-white shadow-lg rounded p-6 max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <img
        className="rounded-full w-107 h-auto mx-auto mb-2"
        src="/profile.svg"
        alt="Profile"
      />
      <h2 className="text-3xl font-semibold mb-2 text-center">Rinaldi Ihsan Setiawan</h2>
      <p className="font-poppins mb-2 text-center">rinaldiihsan@gmail.com</p>
      <p className="font-poppins text-center">081233211233211</p>
      <p className="font-poppins text-center mt-6">
        Lorem ipsum dolor sit amet consectetur. Netus massa lectus egestas faucibus. Nec libero arcu pellentesque posuere amet. Aliquam et volutpat neque laoreet. Ultricies vitae ante a nibh porttitor gravida.
      </p>
    </div>
  );
};

const Profile = () => {
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
    <div>
      <Navbar />
      <Card />
      <Footer />
    </div>
  );
};

export default Profile;
