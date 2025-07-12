import React, { useState } from 'react';

import Header from '../../components/Header/Header.jsx';
import WhatsappButton from '../../components/WhatsappButton/WhatsappButton.jsx';
import Carousel from '../../components/Carousel/Carousel.jsx';
import CarList from '../../components/CarList/CarList.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import SearchBarMarcaModelo from '../../components/SearchBarMarcaModelo/SearchBarMarcaModelo.jsx';
import FilteredCarCarousel from '../../components/FilteredCarCarousel/FilteredCarCarousel.jsx';
import useCars from '../../hooks/useCars';

import '../../index.css';

function Home() {
  const { cars: allCars, loading } = useCars();  // Dados e loading do hook custom
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
        <SearchBarMarcaModelo cars={allCars} onFilter={setFilteredCars} />
        <FilteredCarCarousel cars={filteredCars} />
        <CarList cars={allCars} />

        <WhatsappButton />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
