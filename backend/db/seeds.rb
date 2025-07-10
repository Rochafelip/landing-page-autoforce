# db/seeds.rb
Car.create!(
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "Prata",
  mileage: 32000,
  price: 85000.0,
  images: [
    "https://omecanico.com.br/wp-content/uploads/2019/09/Toyota-Corolla-2020_1.jpg",
    "https://quatrorodas.abril.com.br/wp-content/uploads/2019/03/painel-3-toyota-corolla.jpg?quality=70\\u0026strip=info\\u0026w=720\\u0026crop=1"
  ].to_json
)
