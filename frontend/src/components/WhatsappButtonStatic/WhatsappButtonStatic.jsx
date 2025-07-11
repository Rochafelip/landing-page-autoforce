// src/components/WhatsappButtonStatic.jsx
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const WhatsappButtonStatic = ({ phoneNumber, message, label = "Fale pelo WhatsApp" }) => {
  const whatsappUrl = `https://wa.me/${8199724801}?text=${encodeURIComponent(message)}`;

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
