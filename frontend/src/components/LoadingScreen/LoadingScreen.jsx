// src/components/LoadingScreen/LoadingScreen.jsx
import React from 'react';
import './LoadingScreen.css'; // Estilize como quiser (spinner, etc)

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="spinner" />
      <p>Carregando carros, aguarde...</p>
    </div>
  );
}

export default LoadingScreen;
