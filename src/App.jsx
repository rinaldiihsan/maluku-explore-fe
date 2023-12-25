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
import SuccessOrder from './pages/Order/SuccessOrder';
import Profile from './pages/Profile/Profile';
import OrderTicket from './pages/Order/OrderTicket';
import NotFound from './pages/NotFound';

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
          <Route path="/order-ticket/:id" element={<OrderTicket />} />
          <Route path="/success-order" element={<SuccessOrder />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
