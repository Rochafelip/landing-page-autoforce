import React, { useState } from 'react';

import Header from '../../components/Header/Header.jsx';
import MainCarousel from '../../components/MainCarousel/MainCarousel.jsx';
import SearchByMakeModel from '../../components/SearchByMakeModel/SearchByMakeModel.jsx';
import FilteredCars from '../../components/FilteredCars/FilteredCars.jsx';
import CarsOnSale from '../../components/CarsOnSale/CarsOnSale.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ContactButton from '../../components/ContactButton/ContactButton.jsx';
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
        <MainCarousel />
        <SearchByMakeModel cars={cars} onFilter={setFilteredCars} />
        <FilteredCars cars={filteredCars} />
        <CarsOnSale cars={cars} />
        <ContactButton />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
