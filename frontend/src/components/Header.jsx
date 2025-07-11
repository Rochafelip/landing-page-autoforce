import React from 'react';

function Header() {
  return (
    <header className="bg-light border-bottom mb-4 position-fixed w-100 top-0">
      {/* Linha 1: Logo + Contato */}
      <div className="container py-2 d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Logo */}
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <img
            src="https://production.autoforce.com/uploads/group/logo/1814/logo_webp_comprar-dealer-seminovos_0759c60cac.png.webp"
            alt="Logo"
            className="me-2"
          />
          <h1 className="h5 m-0">Rocha Seminovos</h1>
        </div>

        {/* Contato */}
        <div className="text-center text-md-end">
          <p className="m-0 small">📞 (81) 99999-9999</p>
          <p className="m-0 small">📱 WhatsApp: (81) 98888-8888</p>
        </div>
      </div>

      {/* Linha 2: Navbar */}
      <nav className="bg-primary">
        <div className="container d-flex justify-content-start">
          <a href="#" className="nav-link text-white px-3">Todos os Carros</a>
          <a href="#" className="nav-link text-white px-3">Seminovos</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
