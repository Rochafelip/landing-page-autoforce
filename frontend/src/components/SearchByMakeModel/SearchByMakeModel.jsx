import React, { useState, useEffect } from 'react';
import { fetchCars } from '../../utils/fetchCars';
import './SearchByMakeModel.css';

const SearchByMakeModel = ({ onFilter }) => {
  const [allCars, setAllCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedKmRange, setSelectedKmRange] = useState('');
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetchCars().then((cars) => {
      setAllCars(cars);
      onFilter(cars);
    });
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      const filteredModels = allCars
        .filter((car) => car.brand === selectedBrand)
        .map((car) => car.model);
      setModels([...new Set(filteredModels)]);
      setSelectedModel('');
    } else {
      setModels([]);
      setSelectedModel('');
    }
  }, [selectedBrand, allCars]);

  useEffect(() => {
    const filtered = allCars.filter((car) => {
      // Filtra por KM
      let kmMatch = true;
      if (selectedKmRange) {
        const km = car.mileage;
        switch (selectedKmRange) {
          case '0-20000':
            kmMatch = km <= 20000;
            break;
          case '20001-50000':
            kmMatch = km > 20000 && km <= 50000;
            break;
          case '50001+':
            kmMatch = km > 50000;
            break;
          default:
            kmMatch = true;
        }
      }

      return (
        (!selectedBrand || car.brand === selectedBrand) &&
        (!selectedModel || car.model === selectedModel) &&
        kmMatch
      );
    });

    onFilter(filtered);
  }, [selectedBrand, selectedModel, selectedKmRange, allCars]);

  const brands = [...new Set(allCars.map((car) => car.brand))];

  return (
    <div id="SearchByMakeModel" className="container my-4">
      <div className="row justify-content-center">
        {/* Marca */}
        <div className="col-12 col-sm-6 col-md-3 mb-3">
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

        {/* Modelo */}
        <div className="col-12 col-sm-6 col-md-3 mb-3">
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

        {/* KM */}
        <div className="col-12 col-sm-6 col-md-3 mb-3">
          <label className="form-label">Quilometragem</label>
          <select
            className="form-select"
            value={selectedKmRange}
            onChange={(e) => setSelectedKmRange(e.target.value)}
          >
            <option value="">Todas</option>
            <option value="0-20000">Até 20.000 km</option>
            <option value="20001-50000">20.001 a 50.000 km</option>
            <option value="50001+">Acima de 50.000 km</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchByMakeModel;
