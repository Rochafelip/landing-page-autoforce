import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ContactFormModal from '../ContactFormModal/ContactFormModal.jsx';
import './ContactButton.css';

const ContactButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="whatsapp-button btn btn-success d-flex align-items-center justify-content-center"
        title="Fale conosco"
      >
        <i className="bi bi-envelope-fill fs-2"></i>
      </button>

      {showModal && <ContactFormModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default ContactButton;
