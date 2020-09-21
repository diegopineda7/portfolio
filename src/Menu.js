import React, { useState } from 'react';
import logo from './assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Menu(props) {
  const { lang } = props;
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
          <a className='navLink' href='#projects' onClick={hideMenu} >
            {lang === 'es' ? 'PROYECTOS' : 'PROJECTS'}
          </a>
          <a className='navLink' href='#education' onClick={hideMenu} >
            {lang === 'es' ? 'EDUCACIÓN' : 'EDUCATION'}</a>
          <a className='navLink' href='#experience' onClick={hideMenu} >
            {lang === 'es' ? 'EXPERIENCIA' : 'EXPERIENCE'}</a>
          <a className='navLink' href='#contact' onClick={hideMenu} >
            {lang === 'es' ? 'CONTACTO' : 'CONTACT'}</a>
        </div>
      </div>
    </div>
  )
}
