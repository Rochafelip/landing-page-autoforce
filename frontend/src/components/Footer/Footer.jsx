import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-md-start py-4 mt-5">
      <div className="container py-2">
        <div className="row justify-content-between align-items-start">
        {/* Informações da loja */}
        <div className="col-md-4 mb-3">
            <h3>Rocha Seminovos</h3>
            <p className="mb-1">Rua de Janeiro, 23 - Centro</p>
            <p className="mb-0">Recife - PE | (81) 99752-4801</p>
            <p className="mb-0">CNPJ: 76.953.418/0001-85</p>
            
        </div>

        {/* Horário de funcionamento */}
        <div className="col-md-3 mb-3">
            <h5>Horário de Funcionamento</h5>
            <ul className="list-unstyled mb-0">
            <li>Seg a Sex: 08h – 18h</li>
            <li>Sábado: 08h – 12h</li>
            <li>Domingo: Fechado</li>
            </ul>
        </div>

        {/* Contatos e redes sociais */}
        <div className="col-md-4 d-flex flex-column align-items-md-end align-items-center text-md-end text-center">
            <h3>Contatos</h3>
            <div>
            <a href="https://wa.me/5581997524801" target="_blank" rel="noreferrer" className="text-white mx-2">
                <i className="bi bi-whatsapp fs-4"></i>
            </a>
            <a href="https://www.instagram.com/autoforcebr/" target="_blank" rel="noreferrer" className="text-white mx-2">
                <i className="bi bi-instagram fs-4"></i>
            </a>
            <a href="https://web.facebook.com/AutoForcebr" target="_blank" rel="noreferrer" className="text-white mx-2">
                <i className="bi bi-facebook fs-4"></i>
            </a>
            </div>
        </div>
        </div>

        {/* Linha divisória */}
        <hr className="border-secondary my-4" />

        {/* Direitos autorais */}
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} Rocha Seminovos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
