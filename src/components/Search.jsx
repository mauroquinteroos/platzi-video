import React from 'react';

// Styles
import '../assets/styles/components/Search.scss';

const Search = () => (
  <section className='main'>
    <h2 className='main-title'>Qué quieres ver hoy?</h2>
    <input className='main-input' type='text' name='movie' placeholder='Buscar...' />
  </section>
);

export default Search;
