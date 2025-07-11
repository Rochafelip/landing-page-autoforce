// src/components/CarList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardCarrosAtivo from '../../components/CardCarrosAtivo/CardCarrosAtivo.jsx';
import WhatsappButtonStatic from '../WhatsappButtonStatic/WhatsappButtonStatic.jsx';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/cars', {
      headers: { Accept: 'application/json' }
    })
      .then(res => {
        const formattedCars = res.data.map(car => ({
          ...car,
          images: JSON.parse(car.images),
          price: Number(car.price),
        }));
        setCars(formattedCars);
      })
      .catch(err => console.error('Erro ao buscar carros:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-5">Carregando veículos...</p>;

  // Agrupa os carros em blocos de 3 por slide
  const chunkedCars = [];
  for (let i = 0; i < cars.length; i += 3) {
    chunkedCars.push(cars.slice(i, i + 3));
  }

  return (
    <section className="container my-5">
      <h2 className="mb-4">Veículos Disponíveis</h2>

      <div id="carouselCards" className="carousel slide" data-bs-ride="carousel">
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

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselCards"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselCards"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
        <WhatsappButtonStatic />
      </div>
    </section>
  );
};

export default CarList;
