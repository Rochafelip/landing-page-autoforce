import { useState, useEffect } from 'react';
import { fetchCars } from '../utils/fetchCars';

const useCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCars()
      .then(data => setCars(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { cars, loading };
};

export default useCars;
