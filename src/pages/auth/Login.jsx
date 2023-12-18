import React, { useState } from 'react';
import featuresImage from '../../assets/features.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/auth/login', {
        email: email,
        password: password,
      });
      navigate('/home');
    } catch (error) {
      setMessage('Gagal login, Email dan Password Salah !');
    }
  };

  return (
    <div className="flex font-poppins items-center justify-between h-screen">
      <div className="flex flex-col gap-y-7">
        <div className="flex-col">
          <h1 className="font-clashDisplay font-semibold text-[26px]">Hi There,</h1>
          <h2 className="font-clashDisplay font-semibold text-[26px]">
            Welcome to <span className="text-myDarkGreen">Maluku Explore</span>
          </h2>
          <p className="font-medium text-sm mt-2">Please Sign in to your Account!</p>
        </div>
        <form onSubmit={signIn} className="flex flex-col gap-y-5">
          <p className="text-red-500 font-medium justify-center items-center">{message}</p>
          <input type="email" required placeholder="Email" className="px-12 py-4 rounded-[18px] bg-[#FAFAFA]" style={{ border: '3px solid #F1ECEC' }} value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" required placeholder="Password" className="px-12 py-4 rounded-[18px] bg-[#FAFAFA]" style={{ border: '3px solid #F1ECEC' }} value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="w-fit bg-myDarkGreen font-semibold text-white py-4 px-10 rounded-[18px] mt-5 hover:bg-myGreen1 transition-all duration-200 ease-in-out flex items-center justify-center gap-2">
            Sign In
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11.6802 14.62L14.2402 12.06L11.6802 9.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12.06H14.17" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
        <p className="font-medium text-sm">
          Don’t have an account?
          <Link to="/sign-up" className="text-myDarkGreen font-bold mx-2 hover:text-myGreen1">
            Create your account
          </Link>
        </p>
      </div>
      <div className="max-w-[355px]">
        <img src={featuresImage} alt="features" />
      </div>
    </div>
  );
};

export default Login;
