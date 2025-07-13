import React, { useState, useEffect } from 'react';
import { fetchCars } from '../../utils/fetchCars';
import './SearchByMakeModel.css';

const SearchBarMarcaModelo = ({ onFilter }) => {
  const [allCars, setAllCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [models, setModels] = useState([]);

  // Busca todos os carros na montagem do compon
  useEffect(() => {
    fetchCars().then((cars) => {
      setAllCars(cars);
      onFilter(cars); // Exibe todos inicialmente
    });
  }, []);

  // Atualiza lista de modelos quando a marca muda
  useEffect(() => {
    if (selectedBrand) {
      const filteredModels = allCars
        .filter((car) => car.brand === selectedBrand)
        .map((car) => car.model);
      setModels([...new Set(filteredModels)]);
      setSelectedModel('');
    } else {
      setModels([]);
    }
  }, [selectedBrand, allCars]);

  // Aplica os filtros e envia para o pai
  useEffect(() => {
    const filtered = allCars.filter((car) => {
      return (
        (!selectedBrand || car.brand === selectedBrand) &&
        (!selectedModel || car.model === selectedModel)
      );
    });

    onFilter(filtered);
  }, [selectedBrand, selectedModel, allCars]);

  // Marcas únicas
  const brands = [...new Set(allCars.map((car) => car.brand))];

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 mb-3">
          <label className="form-label">Marca</label>
          <select
            className="form-select"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">Todas</option>
            {brands.map((brand, idx) => (
              <option key={idx} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12 col-sm-6 col-md-4 mb-3">
          <label className="form-label">Modelo</label>
          <select
            className="form-select"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            disabled={!selectedBrand}
          >
            <option value="">Todos</option>
            {models.map((model, idx) => (
              <option key={idx} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBarMarcaModelo;
