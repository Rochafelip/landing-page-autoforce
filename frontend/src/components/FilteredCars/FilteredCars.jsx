import React, { useRef } from 'react';
import CardDetailsCar from '../CardDetailCar/CardDetailCar';
import './FilteredCars.css';

const FilteredCars = ({ cars, onCardClick }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

    const scrollAmount = 300;
    current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="FilteredCars" className="container my-5 position-relative">
      <h2 className="mb-4 text-center">Resultado da Busca</h2>

      <div className="carousel-scroll-wrapper position-relative">
        <button
          className="carousel-control-prev custom-carousel-btn"
          onClick={() => scroll('left')}
        >
          <i className="bi bi-arrow-left-circle text-white fs-3"></i>
        </button>

        <div className="car-scroll-container" ref={scrollRef}>
          {cars.map((car) => (
            <div className="car-scroll-item" key={car.id}>
              <CardDetailsCar car={car} onClick={onCardClick} />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-next custom-carousel-btn text-white fs-3"
          onClick={() => scroll('right')}
        >
          <i className="bi bi-arrow-right-circle"></i>
        </button>
      </div>
    </section>
  );
};

export default FilteredCars;
