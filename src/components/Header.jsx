import React from 'react';

// Styles
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video.png';
import user from '../assets/static/user.svg';

const Header = () => (
  <header className='header'>
    <img className='header-img' src={logo} alt='platzi video logo' />
    <div className='header-menu'>
      <div className='header-menu-profile'>
        <img src={user} alt='user' />
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
