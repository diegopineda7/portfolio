import React from 'react';
import ipred from './assets/education/ipred.png';

export default function Experience() {
  return (
    <div className='experience' id='experience'>
      <h2>EXPERIENCIA LABORAL</h2>
      <div className='item'>
        <img src={ipred} alt='Instituto de Proyección Regional y Educación a Distancia' />
        <div className='description'>
          <h3>Instituto de Proyección Regional y Educación a Distancia</h3>
          <h3>Universidad Industrial de Santander</h3>
          <h3>Desarrollador web</h3>
          <h4>Septiembre 2018 - Actualmente</h4>
          <h4>Bucaramanga, Santander, Colombia</h4>
        </div>
      </div>
    </div>
  )
}