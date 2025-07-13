import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ContactModal from '../../components/ContactModal/ContactModal.jsx';
import './ContactUs.css';

const ContactUs = () => {
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

      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default ContactUs;
