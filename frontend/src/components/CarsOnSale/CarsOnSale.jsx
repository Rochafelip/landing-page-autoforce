import React, { useEffect, useState } from 'react';
import { fetchCars } from '../../utils/fetchCars';
import SaleCarCard from '../SaleCarCard/SaleCarCard';
import useResponsiveGroupSize from '../../hooks/useResponsiveGroupSize';
import './CarsOnSale.css';

const CarsOnSale = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const groupSize = useResponsiveGroupSize();

  useEffect(() => {
    fetchCars()
      .then(data => {
        const promoCars = data.filter(car => car.on_promo === true);
        setCars(promoCars);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-5">Carregando veículos...</p>;

  const groupedCars = [];
  for (let i = 0; i < cars.length; i += groupSize) {
    groupedCars.push(cars.slice(i, i + groupSize));
  }

  return (
    <section className="container my-5">
      <h2 className="mb-4 text-center">Veículos em Oferta</h2>

      <div id="carouselCards" className="carousel slide">
        <div className="carousel-inner">
          {groupedCars.map((group, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <div className="row justify-content-center">
                {group.map(car => (
                  <div className="col-12 col-md-6 col-lg-3 mb-4" key={car.id}>
                    <SaleCarCard car={car}/>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev custom-carousel-btn"
          type="button"
          data-bs-target="#carouselCards"
          data-bs-slide="prev"
        >
          <i className="bi bi-arrow-left-circle-fill"></i>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button
          className="carousel-control-next custom-carousel-btn"
          type="button"
          data-bs-target="#carouselCards"
          data-bs-slide="next"
        >
          <i className="bi bi-arrow-right-circle-fill"></i>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </section>
  );
};

export default CarsOnSale;
