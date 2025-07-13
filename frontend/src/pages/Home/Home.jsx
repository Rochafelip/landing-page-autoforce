import React, { useState } from 'react';

import Header from '../../components/Header/Header.jsx';
import ContactUs from '../../components/ConctactUs/ContactUs.jsx';
import Carousel from '../../components/Carousel/Carousel.jsx';
import CarOnPromo from '../../components/CarOnPromo/CarOnPromo.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import SearchBarMarcaModelo from '../../components/SearchBarMarcaModelo/SearchBarMarcaModelo.jsx';
import FilteredCarCarousel from '../../components/FilteredCarCarousel/FilteredCarCarousel.jsx';
import useCars from '../../hooks/useCars';

import '../../index.css';

function Home() {
  const { cars: cars, loading } = useCars();  
  const [filteredCars, setFilteredCars] = useState([]);

  // Opcional: você pode mostrar um loading simples enquanto carrega os carros
  if (loading) {
    return <div>Carregando carros...</div>;
  }

  return (
    <div id="root" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: '1 0 auto' }}>
        <Carousel />
        <SearchBarMarcaModelo cars={cars} onFilter={setFilteredCars} />
        <FilteredCarCarousel cars={filteredCars} />
        <CarOnPromo cars={cars} />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
