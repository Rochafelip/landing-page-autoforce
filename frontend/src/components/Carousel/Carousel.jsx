import React from "react";
import Corolla1 from '../../assets/Corolla/Corolla1.jpg';
import Corolla2 from '../../assets/Corolla/Corolla2.jpg';
import Corolla3 from '../../assets/Corolla/Corolla3.jpg';
import Corolla4 from '../../assets/Corolla/Corolla4.jpg';
import './Carousel.css'; // Assuming you have some styles for the carousel

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide carousel-wrapper" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Corolla1} className="carousel-img" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Corolla2} className="carousel-img" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Corolla4} className="carousel-img" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
