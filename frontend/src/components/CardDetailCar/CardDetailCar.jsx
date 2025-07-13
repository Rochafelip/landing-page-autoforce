import React from 'react';
import './CardDetailCar.css';
import tags from '../../assets/icons/tags.svg';

const colorMap = {
  prata: '#C0C0C0',
  preto: '#000000',
  branco: '#FFFFFF',
  cinza: '#808080',
  vermelho: '#FF0000',
  azul: '#0000FF',
  laranja: '#FFA500',
  'verde militar': '#4B5320',
};

const CardDetailCar = ({ car }) => {
  console.log('CARRO RECEBIDO:', car);
  if (!car) return null;

  const imageUrl = car.images?.[0] || '';
  const corHex = colorMap[car.color?.toLowerCase()] || '#000';

  return (
    <div className="card-detail-car card shadow-sm">
      {imageUrl && (
        <img
          src={imageUrl}
          className="card-img-top car-image"
          alt={`${car.brand} ${car.model}`}
        />
      )}

      <div className="card-body">
        <h5 className="card-title text-center mb-3">
          {car.brand} {car.model} {car.on_promo ? <img src={tags}  /> : ''}          
        </h5>

        <div className="row text-muted fs-6">
          <div className="col-6 mb-2">
            <i className="bi bi-calendar me-1"></i>
            <small><strong>Ano:</strong> {car.year}</small>
          </div>

          <div className="col-6 mb-2 d-flex align-items-center">
            <i className="bi bi-palette me-2"></i>
            <small>
              <strong>Cor:</strong>
              <span
                style={{
                  display: 'inline-block',
                  width: '16px',
                  height: '16px',
                  backgroundColor: corHex,
                  borderRadius: '50%',
                  marginLeft: '8px',
                  verticalAlign: 'middle',
                  border: '1px solid #ccc',
                }}
                title={car.color}
              />
            </small>
          </div>

          <div className="col-6 mb-2">
            <i className="bi bi-speedometer2 me-1"></i>
            <small><strong>KM:</strong> {car.mileage.toLocaleString('pt-BR')}</small>
          </div>

          <div className="col-6 mb-2 text-center fw-bold text-white fs-5 price-highlight">
            R$ {car.on_promo ? car.promo_price.toLocaleString('pt-BR') : car.price.toLocaleString('pt-BR')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailCar;
