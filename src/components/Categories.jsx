import React from 'react';

// Styles
import '../assets/styles/components/Categories.scss';

const Categories = ({ children }) => (
  <section className='categories'>
    <h3 className='categories-title'>Mi Lista</h3>
    {children}
  </section>
);

export default Categories;
