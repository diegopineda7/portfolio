import React from 'react';
import uis from './assets/education/uis.png';

export default function Education() {
  return (
    <div className='education' id='education'>
      <h2>EDUCACIÓN</h2>
      <div className='item'>
        <img src={uis} alt='Universidad Industrial de Santander' />
        <div className='description'>
          <h3>Universidad Industrial de Santander</h3>
          <h3>Ingeniería de Sistemas</h3>
          <h4>Abril 2015 - Actualmente (Décimo semestre)</h4>
          <h4>Bucaramanga, Santander, Colombia</h4>
        </div>
      </div>
    </div>
  )
}