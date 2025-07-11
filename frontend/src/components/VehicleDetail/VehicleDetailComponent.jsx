import React from 'react';

const VehicleDetailComponent = ({ car }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={car.images[0]}
          alt={`${car.brand} ${car.model}`}
          className="img-fluid rounded shadow-sm"
        />
      </div>
      <div className="col-md-6">
        <ul className="list-group">
          <li className="list-group-item"><strong>Marca:</strong> {car.brand}</li>
          <li className="list-group-item"><strong>Modelo:</strong> {car.model}</li>
          <li className="list-group-item"><strong>Ano:</strong> {car.year}</li>
          <li className="list-group-item"><strong>Cor:</strong> {car.color}</li>
          <li className="list-group-item"><strong>Quilometragem:</strong> {car.mileage.toLocaleString()} km</li>
          <li className="list-group-item"><strong>Preço:</strong> R$ {car.price.toLocaleString('pt-BR')}</li>
        </ul>
      </div>
    </div>
  );
};

export default VehicleDetailComponent;
