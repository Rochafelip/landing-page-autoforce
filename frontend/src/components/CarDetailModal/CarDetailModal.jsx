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
                <div className="item item-1">
                  <i className="bi bi-calendar-event me-2"></i>
                  <strong>Ano:</strong> {car.year}
                </div>
                <div className="item item-2">
                  <i className="bi bi-palette me-2"></i>
                  <strong>Cor:</strong> {car.color}
                </div>
                <div className="item item-3">
                  <i className="bi bi-speedometer2 me-2"></i>
                  <strong>KM:</strong> {car.mileage.toLocaleString('pt-BR')} km
                </div>
                <div className="item item-4">
                  <i className="bi bi-cash-coin me-2"></i>
                  <strong>Preço:</strong> R$ {car.on_promo ? car.promo_price.toLocaleString('pt-BR') : car.price.toLocaleString('pt-BR')}
                </div>
                <div className="item item-5">
                  <i className="bi bi-gear me-2"></i>
                  <strong>Câmbio:</strong> {car.cambio}
                </div>
                <div className="item item-6">
                  <i className="bi bi-fuel-pump me-2"></i>
                  <strong>Combustível:</strong> {car.combustivel}
                </div>
                <div className="item item-7">
                  <i className="bi bi-truck-front me-2"></i>
                  <strong>Carroceria:</strong> {car.carroceria}
                </div>
                <div className="item item-8">
                  <i className="bi bi-door-closed me-2"></i>
                  <strong>Portas:</strong> {car.doors || 'N/A'}
                </div>
                <div className="item item-9">
                  <i className="bi bi-card-text me-2"></i>
                  <strong>Placa:</strong> {car.plate || 'N/A'}
                </div>
                <div className="item item-10">
                  <i className="bi bi-123 me-2"></i>
                  <strong>Final Placa:</strong> {car.plate?.slice(-1) || 'N/A'}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CarDetailModal;
