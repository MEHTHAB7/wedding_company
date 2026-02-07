import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Vendors from './pages/Vendors';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Admin from './pages/Admin';

import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main style={{ minHeight: '80vh', paddingBottom: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <WhatsAppWidget />
      <Footer />
    </div>
  );
}

export default App;
