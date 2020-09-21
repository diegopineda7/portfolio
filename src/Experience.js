import React from 'react';
import ipred from './assets/education/ipred.png';

export default function Experience(props) {
  const { lang } = props;

  return (
    <div className='experience' id='experience'>
      <h2>
        {
          lang === 'es'
            ? 'EXPERIENCIA LABORAL'
            : 'WORK EXPERIENCE'
        }
      </h2>
      <div className='item'>
        <img src={ipred} alt='Instituto de Proyección Regional y Educación a Distancia' />
        <div className='description'>
          <h3>
            {
              lang === 'es'
                ? 'Instituto de Proyección Regional y Educación a Distancia - IPRED'
                : 'Institute for Regional Projection and Distance Education - IPRED'
            }</h3>
          <h3>
            {
              lang === 'es'
                ? 'Universidad Industrial de Santander - UIS'
                : 'Industrial University of Santander - UIS'
            }
          </h3>
          <h3>
            {
              lang === 'es'
                ? 'Desarrollador web'
                : 'Web developer'
            }
          </h3>
          <h4>
            {
              lang === 'es'
                ? 'Septiembre 2018 - Actualmente'
                : 'September 2018 - Currently'
            }
          </h4>
          <h4>Bucaramanga, Santander, Colombia</h4>
        </div>
      </div>
    </div>
  )
}