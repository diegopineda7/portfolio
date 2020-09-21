import React, { useState } from 'react';
import logo from './assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenu = () => {
    setMenuVisible(prevMenuVisible => !prevMenuVisible);
  }

  const hideMenu = () => {
    setMenuVisible(false);
  }

  return (
    <div className='menu'>
      <a className='navLink img' href='#home' onClick={hideMenu} >
        <img
          src={logo}
          alt='Diego Pineda'
          className='portfolioIcon'
        />
      </a>
      <div>
        <div className='openMenu' onClick={handleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={menuVisible ? 'menuOptions visible' : 'menuOptions'}>
          <a className='navLink' href='#projects' onClick={hideMenu} >PROYECTOS</a>
          <a className='navLink' href='#education' onClick={hideMenu} >EDUCACIÓN</a>
          <a className='navLink' href='#experience' onClick={hideMenu} >EXPERIENCIA</a>
          <a className='navLink' href='#contact' onClick={hideMenu} >CONTACTO</a>
        </div>
      </div>
    </div>
  )
}
