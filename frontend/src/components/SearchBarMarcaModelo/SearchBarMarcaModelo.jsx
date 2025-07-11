// src/components/SearchBarMarcaModelo.jsx
import React, { useState, useEffect } from 'react';
import { fetchCars } from '../../utils/fetchCars'; // ajuste o caminho conforme sua estrutura

const SearchBarMarcaModelo = ({ onFilter }) => {
  const [allCars, setAllCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [models, setModels] = useState([]);

  // Busca os carros uma única vez
  useEffect(() => {
    fetchCars().then(cars => {
      setAllCars(cars);
      onFilter(cars); // Inicialmente exibe todos
    });
  }, []);

  const brands = [...new Set(allCars.map(car => car.brand))];

  // Atualiza modelos disponíveis ao escolher uma marca
  useEffect(() => {
    if (selectedBrand) {
      const filteredModels = allCars
        .filter(car => car.brand === selectedBrand)
        .map(car => car.model);
      setModels([...new Set(filteredModels)]);
      setSelectedModel('');
    } else {
      setModels([]);
    }
  }, [selectedBrand, allCars]);

  // Aplica o filtro
  useEffect(() => {
    const filtered = allCars.filter(car => {
      return (
        (!selectedBrand || car.brand === selectedBrand) &&
        (!selectedModel || car.model === selectedModel)
      );
    });
    onFilter(filtered);
  }, [selectedBrand, selectedModel, allCars]);

  return (
    <div className="container my-4">
      <div className="row g-3 align-items-end">
        <div className="col-md-4">
          <label className="form-label">Marca</label>
          <select
            className="form-select"
            value={selectedBrand}
            onChange={e => setSelectedBrand(e.target.value)}
          >
            <option value="">Todas</option>
            {brands.map((brand, idx) => (
              <option key={idx} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Modelo</label>
          <select
            className="form-select"
            value={selectedModel}
            onChange={e => setSelectedModel(e.target.value)}
            disabled={!selectedBrand}
          >
            <option value="">Todos</option>
            {models.map((model, idx) => (
              <option key={idx} value={model}>{model}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBarMarcaModelo;
