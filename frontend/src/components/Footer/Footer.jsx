import React from 'react';
import ContactFooter from '../ContactFooter/ContactFooter'; // ajuste o caminho conforme seu projeto

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-md-start py-4 mt-5">
      <div className="container py-2">
        <div className="row">
          <div className="col-md-6 mb-4 d-flex flex-column justify-content-between">
            <ContactFooter />
          </div>
          <div className="col-md-6 mb-4 text-md-center d-flex flex-column justify-content-between">            
            <div className="mb-3">
              <h3>Rocha Seminovos</h3>
              <p className="mb-1">Rua de Janeiro, 23 - Centro</p>
              <p className="mb-0">Recife - PE | (81) 99752-4801</p>
              <p className="mb-0">CNPJ: 76.953.418/0001-85</p>
            </div>

            <div>
              <h5>Horário de Funcionamento</h5>
              <ul className="list-unstyled mb-0 col">
                <li>Seg a Sex: 08h – 18h</li>
                <li>Sábado: 08h – 12h</li>
                <li>Domingo: Fechado</li>
              </ul>
            </div>
            
            <div className="text-md-center mt-3">
              <h5>Redes Sociais</h5>
              <div>
                <a
                  href="https://wa.me/5581997524801"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white mx-2"
                >
                  <i className="bi bi-whatsapp fs-4"></i>
                </a>
                <a
                  href="https://www.instagram.com/autoforcebr/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white mx-2"
                >
                  <i className="bi bi-instagram fs-4"></i>
                </a>
                <a
                  href="https://web.facebook.com/AutoForcebr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white mx-2"
                >
                  <i className="bi bi-facebook fs-4"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* LINHA DIVISÓRIA */}
        <hr className="border-secondary my-4" />

        {/* DIREITOS AUTORAIS */}
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} Rocha Seminovos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
