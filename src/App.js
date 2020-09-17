import React from 'react';
import './App.css';
import projects from './projects.json';
import logoRJS from './assets/react.png';
import logoRN from './assets/react-native.png';
import logoNODE from './assets/node.png';
import logoGIT from './assets/git.png';
import logoMONGO from './assets/mongo.png';
import logoPG from './assets/postgres.png';
import logoSHEETS from './assets/sheets.png';

const logos = {
  RJS: logoRJS,
  RN: logoRN,
  NODE: logoNODE,
  GIT: logoGIT,
  MONGO: logoMONGO,
  POSTGRES: logoPG,
  SHEETS: logoSHEETS,
}
const logosKeys = Object.keys(logos);
const logosValues = Object.values(logos);

function App() {
  return (
    <div className="App">
      <div className='menu'>
        <a className='navLink' href='#projects'>PROYECTOS</a>
        <a className='navLink' href='#skills'>HABILIDADES</a>
        <a className='navLink' href='#contact'>CONTACTO</a>
      </div>
      <div className='banner'>
        <h1>DIEGO ALBERTO PINEDA MEDINA</h1>
        <h2>BIENVENIDO A MI PORTAFOLIO</h2>
        <h3>DESARROLLLO WEB Y MÓVIL</h3>
      </div>
      <div className='projects' id='projects'>
        <div className='projectsVisible'>
          {
            projects.map(section => (
              <div className='projectsSection' key={section.id}>
                <h2>{section.section}</h2>
                <div className='projectsList'>
                  {
                    section.projects.map(item => (
                      <div className='projectItem' key={item.id}>
                        <h2>{item.name}</h2>
                        <img
                          src={item.img}
                          alt={item.name}
                          className='projectImg'
                        />
                        <p>{item.description}</p>
                        <div className='projectFrameworks'>
                          {
                            item.frameworks.map(framework => {
                              const index = logosKeys.indexOf(framework);
                              const logo = logosValues[index];
                              return (
                                <img
                                  key={framework}
                                  src={logo}
                                  alt={framework}
                                  className='logoFramework'
                                />
                              )
                            })
                          }
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='contact' id='contact'>
        <h2>CONTACTO</h2>
        <div className='contactContent'>
          <a href='mailto:pineda.diego798@gmail.com'>
            <div className='social'>
              <img src={logoNODE} alt='Email' />
              <h3>Email</h3>
            </div>
          </a>
          <a target='_blank' href=''>
            <div className='social'>
              <img src={logoNODE} alt='LinkedIn' />
              <h3>LinkedIn</h3>
            </div>
          </a>
          <a target='_blank' href=''>
            <div className='social'>
              <img src={logoNODE} alt='Instagram' />
              <h3>Instagram</h3>
            </div>
          </a>
          <a target='_blank' href=''>
            <div className='social'>
              <img src={logoNODE} alt='WhatsApp' />
              <h3>WhatsApp</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
