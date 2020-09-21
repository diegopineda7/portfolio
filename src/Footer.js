import React from 'react';
import logo from './assets/logo.png';

export default function Footer() {
  return (
    <div className='footer'>
      <img
        src={logo}
        alt='Diego Pineda'
        className='footerIcon'
      />
      <div className='info'>
        <h4>Diego Alberto Pineda Medina - 2020</h4>
        <h5>Bucaramanga, Santander, Colombia</h5>
      </div>
    </div>
  )
}
