/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-button.svg';
import addIcon from '../assets/static/add-button.svg';

const CarouselItem = ({ cover, title, year, contentRating, duration, slug }) => (
  <div className='carousel-item'>
    <img className='item-img' src={cover} alt={title} />
    <div className='item-details'>
      <div className='item-icon'>
        <img src={playIcon} width='20px' alt='play icon' />
        <img src={addIcon} width='20px' alt='plus icon' />
      </div>
      <p className='item-title'>{slug}</p>
      <p className='item-subtitle'>
        <span>{year}</span>
        <span>{contentRating}</span>
        <span>{duration}</span>
      </p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  slug: PropTypes.string,
};

export default CarouselItem;
