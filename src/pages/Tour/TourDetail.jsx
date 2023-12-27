import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Layouts/Navbar/Navbar';
import Footer from '../../components/Layouts/Footer/Footer';

const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTourDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/tour/get/${id}`);

        if (response.data && response.data.data) {
          setTour(response.data.data);
        } else {
          setError('Invalid response format. Expected "data" property.');
        }
      } catch (error) {
        console.error('Error fetching tour detail:', error);
        setError('Error fetching tour detail. Please try again later.');
      }
    };
    fetchTourDetail();
  }, [id]);

  const getImageUrl = (imageId) => {
    return `http://localhost:3000/imageTour/get-image/${imageId}`;
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

  if (!tour) {
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

  return (
    <>
      <Navbar />
      <section className="font-poppins flex flex-col justify-center items-center gap-y-5">
        <img
          src={getImageUrl(tour.imageId)}
          alt={tour.nama}
          className="rounded-[52px]"
          style={{
            width: '1130px',
            height: '504px',
            borderRadius: '52px',
          }}
        />
        <h1 className="text-4xl font-semibold font-clashDisplay text-center ">{tour.nama}</h1>
        <div className="flex justify-center items-center gap-x-6">
          <div className="flex items-center gap-x-3">
            <svg width="32" height="32" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.5 22.3834C23.3719 22.3834 25.7 20.0553 25.7 17.1834C25.7 14.3115 23.3719 11.9834 20.5 11.9834C17.6282 11.9834 15.3 14.3115 15.3 17.1834C15.3 20.0553 17.6282 22.3834 20.5 22.3834Z"
                stroke="#292D32"
                strokeWidth="1.5"
              />
              <path
                d="M6.53326 14.1499C9.81659 -0.283411 31.1999 -0.266744 34.4666 14.1666C36.3833 22.6333 31.1166 29.7999 26.4999 34.2333C23.1499 37.4666 17.8499 37.4666 14.4833 34.2333C9.88326 29.7999 4.61659 22.6166 6.53326 14.1499Z"
                stroke="#292D32"
                strokeWidth="1.5"
              />
            </svg>

            <span className="text-myBlack font-medium">{tour.kota}</span>
          </div>
          <div className="flex items-center gap-x-3">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3335 3.33331V8.33331" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26.6665 3.33331V8.33331" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.8335 15.15H34.1668" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M35 14.1666V28.3333C35 33.3333 32.5 36.6666 26.6667 36.6666H13.3333C7.5 36.6666 5 33.3333 5 28.3333V14.1666C5 9.16665 7.5 5.83331 13.3333 5.83331H26.6667C32.5 5.83331 35 9.16665 35 14.1666Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M26.1577 22.8333H26.1726" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26.1577 27.8333H26.1726" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.9926 22.8333H20.0076" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.9926 27.8333H20.0076" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.8237 22.8333H13.8387" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.8237 27.8333H13.8387" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-myBlack font-medium">{new Date(tour.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
          <Link to={`/order-ticket/${tour.id}`} className="bg-myDarkGreen font-semibold px-6 py-3 text-white rounded-[14px] hover:bg-myGreen1 transition-all duration-200 ease-in-out">
            Order Ticket
          </Link>
        </div>
        <p className="text-justify">{tour.deskripsi}</p>
      </section>
      <Footer />
    </>
  );
};

export default TourDetail;
