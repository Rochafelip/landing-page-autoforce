import React, { useState } from 'react';
import './ContactFooter.css';

const ContactFooter = () => {
  const [form, setForm] = useState({ nome: '', telefone: '', mensagem: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensagem = 
      `Olá, tudo bem?\n` +
      `Meu nome é ${form.nome}.\n` +
      `Estou entrando em contato pelo telefone ${form.telefone}.\n` +
      `Gostaria de falar sobre:\n${form.mensagem}\n\n` +
      `Aguardo seu retorno, obrigado!`;
    const numeroWhatsapp = '5581997524801'; 

    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;

    window.open(urlWhatsapp, '_blank');

    setForm({ nome: '', telefone: '', mensagem: '' });
  };

  return (
    <div className="contact-footer py-4 px-3">
      <div className="container">
        <h4 className="mb-3">Entre em Contato</h4>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label className="form-label">Nome</label>
              <input
                type="text"
                className="form-control"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Telefone</label>
              <input
                type="tel"
                className="form-control"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12">
              <label className="form-label">Mensagem</label>
              <textarea
                className="form-control"
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                rows="3"
                required
              />
            </div>
          </div>

          <div className="mt-3 text-end">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFooter;
