// src/utils/fetchCars.js
import axios from 'axios';

export const fetchCars = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/cars', {
      headers: { Accept: 'application/json' }
    });

    return response.data.map(car => ({
      ...car,
      images: JSON.parse(car.images),
      price: Number(car.price),
      promo_price: Number(car.promo_price),
      on_promo: Boolean(car.on_promo)
    }));
  } catch (error) {
    console.error('Erro ao buscar carros:', error);
    return [];
  }
};
