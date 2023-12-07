import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Tour from './pages/Tour/Tour';
import Blog from './pages/Blog/Blog';
import BlogDetail from './pages/Blog/BlogDetail';
import Navbar from './components/Layouts/Navbar/Navbar';
import Footer from './components/Layouts/Footer/Footer';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <div className="max-w-6xl px-3 mx-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
