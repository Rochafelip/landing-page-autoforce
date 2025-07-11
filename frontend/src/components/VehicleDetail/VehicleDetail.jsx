import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VehicleDetailComponent from '../VehicleDetail/VehicleDetailComponent';

const VehicleDetail = () => {
  const [car, setCar] = useState(null);

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
    .catch(err => console.error(err));
    }, []);

  if (!car) return <p className="text-center mt-5">Carregando veículo...</p>;

  return (
    <section className="container my-5">
      <h2 className="mb-4">Detalhes do Veículo</h2>
      <VehicleDetailComponent car={car} />
    </section>
  );
};

export default VehicleDetail;
