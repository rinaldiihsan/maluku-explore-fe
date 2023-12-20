import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Tour from './pages/Tour/Tour';
import Blog from './pages/Blog/Blog';
import BlogDetail from './pages/Blog/BlogDetail';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import TourDetail from './pages/Tour/TourDetail';
import OrderHistory from './pages/Order/OrderHistory';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="max-w-6xl px-3 mx-auto">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail/:id" element={<BlogDetail />} />
          <Route path="/tour-detail/:id" element={<TourDetail />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
