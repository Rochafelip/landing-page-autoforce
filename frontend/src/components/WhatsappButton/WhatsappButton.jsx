// src/components/WhatsappButton.jsx
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './WhatsappButton.css'; 
const WhatsappButton = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button btn btn-success d-flex align-items-center justify-content-center"
      title="Fale conosco no WhatsApp"
    >
      <i className="bi bi-whatsapp fs-2"></i>
    </a>
  );
};

export default WhatsappButton;
