import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const WhatsappButton = ({ phoneNumber, message, label = "WhatsApp" }) => {
  const whatsappUrl = `https://wa.me/${5581997524801}?text= Olá, gostaria de mais informações sobre as ofertas do mês.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-success d-inline-flex align-items-center gap-2 btn-sm"
      style={{ whiteSpace: 'nowrap' }}
    >
      <i className="bi bi-whatsapp fs-5 fs-md-4"></i>
      <span className="d-none d-md-inline">{label}</span>
    </a>
  );
};

export default WhatsappButton;
