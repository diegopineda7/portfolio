import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import web from './assets/services/web.png';
import mobile from './assets/services/mobile.png';
import responsive from './assets/services/responsive.png';
import logoGH from './assets/frameworkLogos/github.png';

export default function Banner() {
  return (
    <div className='banner' id='home'>
      <div className='header'>
        <div className='name'>
          <h1>HOLA, ME LLAMO DIEGO PINEDA</h1>
          <h2>TE DOY LA BIENVENIDA A MI PORTAFOLIO</h2>
        </div>
        <div className='ghPortfolio'>
          <Tippy content={'Repositorios en GitHub'} placement='bottom'>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://github.com/diegopineda7?tab=repositories'
            >
              <img
                src={logoGH}
                alt='GitHub'
                className='ghLogoHeader'
              />
            </a>
          </Tippy>
        </div>
      </div>
      <div className='skills'>
        <div className='service'>
          <img src={web} alt='Desarrollo web' />
          <h3>Desarrollo web</h3>
        </div>
        <div className='service'>
          <img src={mobile} alt='Desarrollo móvil' />
          <h3>Desarrollo móvil</h3>
        </div>
        <div className='service'>
          <img src={responsive} alt='Responsive design' />
          <h3>Responsive design</h3>
        </div>
      </div>
    </div>
  )
}
