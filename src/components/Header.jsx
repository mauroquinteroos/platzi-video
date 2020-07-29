import React from 'react';

// Styles
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <img className='header-img' src='../images/logo-platzi-video.png' alt='logo de platzi video' />
    <div className='header-menu'>
      <div className='header-menu-profile'>
        <img src='../images/user.svg' alt='user' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
