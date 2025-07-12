// src/components/WhatsappButtonStatic.jsx
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const WhatsappButtonStatic = ({ phoneNumber, message, label = "WhatsApp" }) => {
  const whatsappUrl = `https://wa.me/${5581997524801}?text= Olá, gostaria de mais informações sobre as ofertas do mês.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-success d-inline-flex align-items-center gap-2"
    >
      <i className="bi bi-whatsapp fs-5"></i>
      {label}
    </a>
  );
};

export default WhatsappButtonStatic;
