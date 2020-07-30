import React from 'react';

// Styles
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
  <section className='categories'>
    <h3 className='categories-title'>{title}</h3>
    {children}
  </section>
);

export default Categories;
