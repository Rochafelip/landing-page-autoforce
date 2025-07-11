import React from 'react';
import CardCarrosAtivo from '../CardCarrosAtivo/CardCarrosAtivo';

const FilteredCarCarousel = ({ cars }) => {
  if (!cars.length) return null;

  const chunkedGroups = Array.from({ length: Math.ceil(cars.length / 6) }).map((_, i) =>
    cars.slice(i * 6, i * 6 + 6)
  );

  return (
    <section className="container my-5">
      <h2 className="mb-4">Resultado da Busca</h2>

      <div id="carouselFiltered" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedGroups.map((group, i) => (
            <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
              <div className="container">
                {[0, 1].map(row => (
                  <div className="row justify-content-center" key={row}>
                    {group.slice(row * 3, row * 3 + 3).map(car => (
                      <div className="col-12 col-sm-6 col-md-4 mb-4" key={car.id}>
                        <CardCarrosAtivo car={car} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Controles */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselFiltered"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselFiltered"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </section>
  );
};

export default FilteredCarCarousel;
