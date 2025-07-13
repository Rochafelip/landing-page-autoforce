import React, { useEffect, useState } from 'react';
import { fetchCars } from '../../utils/fetchCars';
import CardCarrosAtivo from '../CardDetailsCar/CardCarrosAtivo';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCars()
      .then(data => {
        // Filtra só os carros em promoção
        const promoCars = data.filter(car => car.on_promo === true);
        setCars(promoCars);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-5">Carregando veículos...</p>;

  // Divide em grupos de 3 para o carousel
  const chunkedCars = [];
  for (let i = 0; i < cars.length; i += 3) {
    chunkedCars.push(cars.slice(i, i + 3));
  }

  return (
    <section className="container my-5">
      <h2 className="mb-4">Veículos em Oferta</h2>

      <div id="carouselCards" className="carousel slide">
        <div className="carousel-inner">
          {chunkedCars.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="container">
                <div className="row justify-content-center">
                  {group.map(car => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4" key={car.id}>
                      <CardCarrosAtivo car={car} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CarList;
