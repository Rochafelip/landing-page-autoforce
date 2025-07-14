# 🚗 Rocha Seminovos - Landing Page de Veículos em Oferta

Este é um projeto fullstack desenvolvido para exibir uma **landing page responsiva e funcional de veículos** com promoções em destaque, busca por marca e modelo, galeria de cards, carrossel e botão de contato via WhatsApp.

---

## 🧠 Visão Geral

A aplicação é composta por:

- **Frontend** moderno com React.js e Bootstrap, com foco em usabilidade e mobile-first.
- **Backend** com Ruby on Rails (API Only), responsável por fornecer os dados dos veículos.
- **Estilo clean** e intuitivo, com seções claras e objetivo de facilitar a jornada do comprador.

---

## 🚀 Tecnologias Utilizadas

### Backend (API):
- **Ruby on Rails** 7+
- **SQlite** como banco de dados
- **CORS** para permitir integração com frontend

### Frontend:
- **React.js (Vite)**
- **Bootstrap 5** + **Icons**
- **Axios** para requisições HTTP
- **Responsividade** via Flexbox e media queries
- **Carrossel linear** com scroll lateral nos cards
- **Modal** para exibir detalhes dos veículos
- **WhatsApp Button** com mensagem personalizada

---

## 🛠️ Requisitos para Instalar

### 🔧 Backend (Rails API)
1. **Ruby 3.2+** e **Rails 7+**
2. **Sqlite3** instalado
3. Clonar o projeto e executar:
  

#### 🧰 Gems Utilizadas

```ruby
# API básica e desempenho
gem 'rails', '~> 7.1.0'
gem 'sqlite3', '~> 1.6'
gem 'puma', '~> 6.0'
gem 'rack-cors', '~> 2.0'
```
### 🔧 Frontend (React)
Node.js (v18+)
---

### Guia Rápido de Instalação 🚀

Após clonar o repositório:
```bash
git clone <URL-do-repo>
cd <nome-do-repo>
```
---

### Backend (Rails API)

```bash
cd backend
bundle install           # Instala as gems
rails db:create          # Cria o banco de dados
rails db:migrate         # Executa migrations
rails db:seed            # Popula com dados iniciais (se houver)
rails server             # Inicia o servidor na porta 3000
```

A API estará rodando em:
http://localhost:3000

Frontend (React)
Abra outro terminal:

```bash
cd frontend
npm install              # Instala dependências do Node
npm run dev              # Inicia o servidor frontend (Vite)
```

O frontend estará rodando em:
http://localhost:5173 (ou outra porta que o Vite escolher)

---

🧩 Estrutura da Página
🔹 Header
Logo da loja

Botão de WhatsApp visível

Menu hamburguer responsivo para mobile

🔹 Seção de Busca
Filtro de marca e modelo

Busca dinâmica integrada com a API

🔹 Resultado da Busca
Lista horizontal com scroll (carrossel linear)

Cards compactos com dados e botão de detalhe

🔹 Veículos em Promoção
Carrossel horizontal com botões de navegação

Cards com destaque de preço promocional

🔹 Formulário de Contato
Campos de nome, telefone e mensagem

Redireciona para o WhatsApp com mensagem automática

🔹 Footer
Contato direto e branding

---

## 🌐 Links de Acesso

- **API Backend:** [https://landing-page-autoforce-backend.onrender.com])  
- **Frontend:** [[https://rochafelip.github.io/landing-page-autoforce/])  

---
📦 Considerações Finais
Este projeto foi pensado para ser rápido, responsivo e fácil de usar tanto em desktop quanto em dispositivos móveis, com foco em vendas online de veículos. O objetivo é aproximar o comprador de uma decisão com clareza de informações e um ponto de contato direto.
