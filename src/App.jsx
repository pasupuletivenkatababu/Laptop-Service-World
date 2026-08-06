import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Services from './components/Services';
import ContactModal from './components/ContactModel';

import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="App">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <SearchBar onBookService={openServiceModal} />
      <Services onServiceSelect={openServiceModal} />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <Footer />
      {isModalOpen && selectedService && (
        <ContactModal
          service={selectedService}
          onClose={closeServiceModal}
        />
      )}
    </div>
  );
}

export default App;