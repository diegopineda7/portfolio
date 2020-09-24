import React from 'react';
import uis from './assets/education/uis.png';

export default function Education(props) {
  const { lang } = props;

  return (
    <div className='education' id='education'>
      <h2>
        {lang === 'es' ? 'EDUCACIÓN' : 'EDUCATION'}
      </h2>
      <div className='education__item'>
        <img src={uis} alt='Universidad Industrial de Santander' className='education__item-img' />
        <div className='education__description'>
          <h3>
            {
              lang === 'es'
                ? 'Ingeniería de Sistemas'
                : 'Systems engineering '
            }
          </h3>
          <h3>
            {
              lang === 'es'
                ? 'Universidad Industrial de Santander - UIS'
                : 'Industrial University of Santander - UIS'
            }
          </h3>
          <h4>
            {
              lang === 'es'
                ? 'Abril 2015 - Actualmente (Décimo semestre)'
                : 'April 2015 - Currently (Tenth semester)'
            }
          </h4>
          <h4>Bucaramanga, Santander, Colombia</h4>
        </div>
      </div>
    </div>
  )
}