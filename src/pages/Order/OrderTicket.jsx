import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import Navbar from '../../components/Layouts/Navbar/Navbar';
import Footer from '../../components/Layouts/Footer/Footer';
import CardOrderTicket from '../../components/Order/CardOrderTicket';

const OrderTicket = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [token, setToken] = useState('');
  const [UserId, setUserId] = useState('');
  const [namaLengkap, setNamaLengkap] = useState('');
  const [email, setEmail] = useState('');
  const [expire, setExpire] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [tanggalOrder, setTanggalOrder] = useState('');
  const [totalHarga, setTotalHarga] = useState(5000);

  const Navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:3000/auth/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setUserId(decoded.id);
      setNamaLengkap(decoded.namaLengkap);
      setEmail(decoded.email);
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
    const fetchTourDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/tour/get/${id}`);

        if (response.data && response.data.data) {
          setTour(response.data.data);
        } else {
          console.error('Invalid response format. Expected "data" property.');
        }
      } catch (error) {
        console.error('Error fetching tour detail:', error);
      }
    };
    fetchTourDetail();
  }, [id]);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);

    if (!isNaN(newQuantity)) {
      setQuantity(newQuantity);
      setTotalHarga(tour.harga * newQuantity);
    } else {
      setQuantity();
      setTotalHarga(0);
    }
  };

  const handleOrder = async (e) => {
    e.preventDefault();

    if (quantity <= 0) {
      alert('Jumlah tiket tidak boleh kurang dari 1');
      return;
    }

    try {
      await axios.post('http://localhost:3000/order/create', {
        UserId: UserId,
        TempatWisataId: id,
        jumlahTiket: quantity,
        tanggalOrder: tanggalOrder,
        totalHarga: totalHarga,
      });
      Navigate('/success-order');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="section2 flex flex-col justify-center font-poppins items-center py-[30px] gap-y-[40px] max-w-[70rem] mx-auto">
        <p className="font-clashDisplay font-semibold text-3xl text-center">Order Ticket</p>
        <CardOrderTicket
          tour={tour}
          namaLengkap={namaLengkap}
          email={email}
          quantity={quantity}
          handleQuantityChange={handleQuantityChange}
          totalHarga={totalHarga}
          tanggalOrder={tanggalOrder}
          setTanggalOrder={setTanggalOrder}
          handleOrder={handleOrder}
        />
      </section>
      <Footer />
    </div>
  );
};

export default OrderTicket;
