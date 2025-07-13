import React, { useState } from 'react';
import WhatsappButton from '../WhatsappButton/WhatsappButton.jsx';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-3 bg-light border-bottom mb-4">
      <div className="container py-2">
        <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-light d-md-none ms-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list fs-4"></i>
            </button>
          <div className="d-flex align-items-center">
            <img
              src="https://production.autoforce.com/uploads/group/logo/1814/logo_webp_comprar-dealer-seminovos_0759c60cac.png.webp"
              alt="Logo"
              className="me-2"
              style={{ maxHeight: '50px', width: 'auto', maxWidth: '120px' }}
            />
            <h1 className="h4 m-0 d-none d-md-block">Rocha Seminovos</h1>

          </div>

          <div className="text-end">
            <WhatsappButton />
          </div>
        </div>
      </div>

      <nav className="bg-primary">
        <div className="container">
          <div
            className={`${
              menuOpen ? 'd-block' : 'd-none'
            } d-md-flex flex-column flex-md-row justify-content-center text-center w-100`}
          >
            <a href="#" onClick={() => setMenuOpen(false)} className="nav-link text-white px-3 py-2">
              Todos os Carros
            </a>
            <a href="#" className="nav-link text-white px-3 py-2">
              Seminovos
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
