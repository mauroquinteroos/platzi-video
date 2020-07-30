import React from 'react';

// Styles
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-button.svg';
import addIcon from '../assets/static/add-button.svg';
import mainImage from '../assets/static/image.jpg';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='item-img' src={mainImage} alt='video' />
    <div className='item-details'>
      <div className='item-icon'>
        <img src={playIcon} width='20px' alt='play icon' />
        <img src={addIcon} width='20px' alt='plus icon' />
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
