import React, { useEffect } from 'react';
import './CarDetailModal.css';

const CarDetailModal = ({ show, onHide, car }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => document.body.classList.remove('modal-open');
  }, [show]);

  if (!show || !car) return null;

  return (
    <div
      className="modal fade show d-block car-modal-overlay"
      tabIndex="-1"
      role="dialog"
      onClick={onHide}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content shadow-lg rounded car-modal-content">
          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold">{car.brand} {car.model}</h5>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>

          <div className="modal-body">
            <div id="carDetailCarousel" className="carousel slide mb-3">
              <div className="carousel-inner rounded overflow-hidden">
                {car.images.map((url, index) => (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <img
                      src={url}
                      className="d-block mx-auto car-modal-img"
                      alt={`Imagem ${index + 1}`}
                    />
                  </div>
                ))}
              </div>

              {car.images.length > 1 && (
                <>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carDetailCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carDetailCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Próximo</span>
                  </button>
                </>
              )}
            </div>
            <div className="car-details-grid">
              <div className="item item-1"><strong>Ano:</strong> {car.year}</div>
              <div className="item item-2"><strong>Cor:</strong> {car.color}</div>
              <div className="item item-3"><strong>KM:</strong> {car.mileage.toLocaleString('pt-BR')} km</div>
              <div className="item item-4"><strong>Preço:</strong> R$ {car.on_promo ? car.promo_price.toLocaleString('pt-BR') : car.price.toLocaleString('pt-BR')}</div>
              <div className="item item-5"><strong>Câmbio:</strong> {car.cambio}</div>
              <div className="item item-6"><strong>Combustível:</strong> {car.combustivel}</div>
              <div className="item item-7"><strong>Carroceria:</strong> {car.carroceria}</div>
              <div className="item item-8"><strong>Portas:</strong> {car.doors || 'N/A'}</div>
              <div className="item item-9"><strong>Placa:</strong> {car.plate || 'N/A'}</div>
              <div className="item item-10"><strong>Final Placa:</strong> {car.plate?.slice(-1) || 'N/A'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CarDetailModal;
