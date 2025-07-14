import React, { useEffect, useState, useRef } from 'react';
import { fetchCars } from '../../utils/fetchCars';
import SaleCarCard from '../SaleCarCard/SaleCarCard';
import './CarsOnSale.css';

const CarsOnSale = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetchCars()
      .then(data => {
        const promoCars = data.filter(car => car.on_promo === true);
        setCars(promoCars);
      })
      .finally(() => setLoading(false));
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  if (loading) return <p className="text-center mt-5">Carregando veículos...</p>;

  return (
    <section id="CarsOnSaleSection" className="container my-5">
      <h2 className="mb-4 text-center">Veículos em Oferta</h2>

      <div className="linear-carousel-wrapper position-relative">
        <button
          className="custom-carousel-btn left"
          onClick={() => scroll('left')}
        >
          <i className="bi bi-arrow-left-circle text-white fs-3"></i>
        </button>

        <div className="car-scroll-container" ref={scrollRef}>
          {cars.map((car) => (
            <div className="car-scroll-item" key={car.id}>
              <SaleCarCard car={car} />
            </div>
          ))}
        </div>

        <button
          className="custom-carousel-btn right"
          onClick={() => scroll('right')}
        >
          <i className="bi bi-arrow-right-circle text-white fs-3"></i>
        </button>
      </div>
    </section>
  );
};

export default CarsOnSale;
