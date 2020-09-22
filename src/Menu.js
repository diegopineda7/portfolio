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
      <a className='menu__item menu__item--img' href='#home' onClick={hideMenu} >
        <img
          src={logo}
          alt='Diego Pineda'
          className='menu__logo'
        />
      </a>
      <div>
        <div className='menu__open-button' onClick={handleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={menuVisible ? 'menu__options menu__options--visible' : 'menu__options'}>
          <a className='menu__item' href='#projects' onClick={hideMenu} >
            {lang === 'es' ? 'PROYECTOS' : 'PROJECTS'}
          </a>
          <a className='menu__item' href='#education' onClick={hideMenu} >
            {lang === 'es' ? 'EDUCACIÓN' : 'EDUCATION'}
          </a>
          <a className='menu__item' href='#experience' onClick={hideMenu} >
            {lang === 'es' ? 'EXPERIENCIA' : 'EXPERIENCE'}
          </a>
          <a className='menu__item' href='#contact' onClick={hideMenu} >
            {lang === 'es' ? 'CONTACTO' : 'CONTACT'}
          </a>
        </div>
      </div>
    </div>
  )
}
