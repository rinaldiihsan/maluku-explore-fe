import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Layouts/Navbar/Navbar';
import Footer from '../../components/Layouts/Footer/Footer';

const Tour = () => {
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);
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

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tour/get');

        if (response.data && response.data.data) {
          setTours(response.data.data);
        } else {
          setError('Invalid response format. Expected "data" property.');
        }
      } catch (error) {
        console.error('Error fetching tours:', error);
        setError('Error fetching tours. Please try again later.');
      }
    };

    fetchTours();
  }, []);

  const getImageUrl = (imageId) => {
    return `http://localhost:3000/imageTour/get-image/${imageId}`;
  };

  return (
    <>
      <Navbar />
      <section className=" flex flex-col justify-center font-poppins items-center py-[30px] gap-y-[70px] max-w-[70rem] mx-auto">
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="font-clashDisplay font-semibold text-3xl text-center">
            Lets tour destination about <br />
            Maluku!
          </h1>
          <p className="text-[18px]">Explore more about the destination!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {error ? (
            <p>{error}</p>
          ) : (
            <>
              {tours.map((tour) => (
                <div key={tour.id} className="flex flex-col max-w-[380px] rounded-[28px] px-4 py-7 gap-y-2" style={{ outline: '3px solid #000' }}>
                  <img src={getImageUrl(tour.imageId)} alt={tour.nama} className="w-full h-[225px] rounded-xl" />
                  <h2 className="font-semibold text-[20px]">{tour.nama}</h2>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                      <svg width="25" height="25" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16.5 18.4662C18.8693 18.4662 20.79 16.5455 20.79 14.1762C20.79 11.8069 18.8693 9.88623 16.5 9.88623C14.1307 9.88623 12.21 11.8069 12.21 14.1762C12.21 16.5455 14.1307 18.4662 16.5 18.4662Z"
                          stroke="#292D32"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M4.9775 11.6738C7.68625 -0.233747 25.3275 -0.219997 28.0225 11.6875C29.6037 18.6725 25.2587 24.585 21.45 28.2425C18.6862 30.91 14.3138 30.91 11.5363 28.2425C7.74125 24.585 3.39625 18.6588 4.9775 11.6738Z"
                          stroke="#292D32"
                          strokeWidth="1.5"
                        />
                      </svg>
                      <h3>{tour.kota}</h3>
                    </div>
                    <Link to={`/tour-detail/${tour.id}`} className="px-4 py-2 text-sm rounded-[10px] hover:bg-myBlack hover:text-myWhite transition-all duration-200 ease-in-out" style={{ outline: '2px solid #000' }}>
                      See Details
                    </Link>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Tour;
