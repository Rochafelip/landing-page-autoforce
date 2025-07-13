import React from 'react';
import './CardPromoDetailCar.css';

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

const CardPromoDetailCar = ({ car }) => {
  if (!car) return null;

  const imageUrl = car.images?.[0] || '';
  const corHex = colorMap[car.color?.toLowerCase()] || '#000';

  return (
    <div className="card-promo-detail-car card shadow-lg border border-danger position-relative">
      <span className="badge bg-danger promo-badge">Promoção</span>

      {imageUrl && (
        <img
          src={imageUrl}
          className="card-img-top car-image"
          alt={`${car.brand} ${car.model}`}
        />
      )}

      <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
        <h5 className="card-title text-center mb-3">{car.brand} {car.model}</h5>

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
            <small><strong>KM:</strong> {car.mileage.toLocaleString('pt-BR')} km</small>
          </div>

          <div className="col-6 mb-2 text-center">
            <small className="text-muted text-decoration-line-through d-block">
              R$ {car.price.toLocaleString('pt-BR')}
            </small>
            <span className="fw-bold text-danger fs-5">
              R$ {parseFloat(car.promo_price).toLocaleString('pt-BR')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPromoDetailCar;
