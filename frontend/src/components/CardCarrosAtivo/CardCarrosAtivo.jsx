// src/components/CardCarrosAtivo.jsx
import React from 'react';

const CardCarrosAtivo = ({ car }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={car.images[0]}
        className="card-img-top"
        alt={`${car.brand} ${car.model}`}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{car.brand} {car.model}</h5>
        <p className="card-text">
          <strong>Ano:</strong> {car.year}<br />
          <strong>Cor:</strong> {car.color}<br />
          <strong>KM:</strong> {car.mileage.toLocaleString()}<br />
          <strong>Preço:</strong> R$ {car.price.toLocaleString('pt-BR')}
        </p>
      </div>
    </div>
  );
};

export default CardCarrosAtivo;
