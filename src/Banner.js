import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Switch from "react-switch";
import web from './assets/services/web.png';
import mobile from './assets/services/mobile.png';
import responsive from './assets/services/responsive.png';
import logoGH from './assets/frameworkLogos/github.png';

export default function Banner(props) {
  const { lang, setLang } = props;
  const [checked, setChecked] = useState(false);

  const toogleLang = () => {
    setLang(prevLang => prevLang === 'es' ? 'en' : 'es');
    setChecked(prevChecked => !prevChecked)
  }

  return (
    <div className='banner' id='home'>
      <div className='lang'>
        ESP
        <Switch
          checked={checked}
          onChange={toogleLang}
          onColor="#ebc90b"
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
          height={10}
          width={35}
        />
        ENG
      </div>
      <div className='header'>
        <div className='name'>
          <h1>
            {
              lang === 'es'
                ? 'HOLA, ME LLAMO DIEGO PINEDA'
                : 'HI THERE, I\'M DIEGO PINEDA'
            }
          </h1>
          <h2>
            {
              lang === 'es'
                ? 'TE DOY LA BIENVENIDA A MI PORTAFOLIO'
                : 'WELCOME TO MY PORTFOLIO'
            }
          </h2>
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
          <h3>{
            lang === 'es'
              ? 'Desarrollo web'
              : 'Web development'
          }</h3>
        </div>
        <div className='service'>
          <img src={mobile} alt='Desarrollo móvil' />
          <h3>{
            lang === 'es'
              ? 'Desarrollo móvil'
              : 'Mobile development'
          }</h3>
        </div>
        <div className='service'>
          <img src={responsive} alt='Responsive design' />
          <h3>Responsive design</h3>
        </div>
      </div>
    </div>
  )
}
