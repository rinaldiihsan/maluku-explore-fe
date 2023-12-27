import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Layouts/Navbar/Navbar';
import Footer from '../../components/Layouts/Footer/Footer';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:3000/auth/token');
      const { accessToken } = response.data; // Destructure accessToken directly
      setToken(accessToken);
      const decoded = jwtDecode(accessToken);
      setExpire(decoded.exp);
      setUserId(decoded.id);
      fetchOrders(decoded.id);
    } catch (err) {
      if (err.response) {
        navigate('/');
      }
    }
  };

  const fetchOrders = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/order/get/?userId=${userId}`);

      if (response.data && response.data.data) {
        setOrders(response.data.data);
      } else {
        setError('Format respons tidak valid. Harap gunakan properti "data".');
      }
    } catch (error) {
      console.error('Error mengambil data order:', error);
      setError('Error mengambil data order. Silakan coba lagi nanti.');
    }
  };

  return (
    <>
      <Navbar />
      <section className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-6 gap-y-10">
        <div className="flex flex-col max-w-[380px] rounded-[28px] px-4 py-7 gap-y-2" style={{ outline: '3px solid #000' }}>
          <h2>Riwayat Pesanan Anda</h2>
          {orders.length > 0 ? (
            orders.map((order) => (
              <div key={order.id}>
                <p>ID Pesanan: {order.id}</p>
                <p>Jumlah Tiket: {order.jumlahTiket}</p>
                <p>Total Harga: {order.totalHarga}</p>
                <p>Tanggal Pesanan: {new Date(order.tanggalOrder).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>Tidak ada pesanan yang ditemukan.</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OrderHistory;
