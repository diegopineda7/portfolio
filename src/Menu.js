import React, { useState } from 'react';

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
      <a className='navLink' href='#home' onClick={hideMenu} >DIEGO</a>
      <div>
        <div className='openMenu' onClick={handleMenu}>##</div>
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
