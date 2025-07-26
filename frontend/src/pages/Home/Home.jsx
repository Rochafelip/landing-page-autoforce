import React, { useState } from 'react';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';

import Header from '../../components/Header/Header.jsx';
import MainCarousel from '../../components/MainCarousel/MainCarousel.jsx';
import SearchByMakeModel from '../../components/SearchByMakeModel/SearchByMakeModel.jsx';
import FilteredCars from '../../components/FilteredCars/FilteredCars.jsx';
import CarsOnSale from '../../components/CarsOnSale/CarsOnSale.jsx';
import CarDetailModal from '../../components/CarDetailModal/CarDetailModal.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import useCars from '../../hooks/useCars';

import '../../index.css';

function Home() {
  const { cars, loading } = useCars();
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null); // ✅ Faltava isso

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div id="root" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: '1 0 auto' }}>
        <MainCarousel />
        <SearchByMakeModel cars={cars} onFilter={setFilteredCars} />
        <FilteredCars cars={filteredCars} onCardClick={setSelectedCar} />
        <CarDetailModal show={!!selectedCar} car={selectedCar} onHide={() => setSelectedCar(null)} />
        <CarsOnSale />        
      </main>
      <Footer />      
    </div>
  );
}

export default Home;
