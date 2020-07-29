import React from 'react';

// Styles
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='item-img' src='../images/image1.jpg' alt='video' />
    <div className='item-details'>
      <div className='item-icon'>
        <img src='../images/play-button.svg' width='20px' alt='play icon' />
        <img src='../images/add-button.svg' width='20px' alt='plus icon' />
      </div>
      <p className='item-title'>Titulo descriptivo</p>
      <p className='item-subtitle'>
        <span>2019</span>
        <span>+16</span>
        <span>114 min.</span>
      </p>
    </div>
  </div>
);

export default CarouselItem;
