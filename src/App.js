import React from 'react';
import './App.css';
// COMPONENTS
import projects from './projects.json';
import Menu from './Menu';
// FRAMEWORK LOGOS
import logoRJS from './assets/react.png';
import logoRN from './assets/react-native.png';
import logoNODE from './assets/node.png';
import logoGIT from './assets/git.png';
import logoMONGO from './assets/mongo.png';
import logoPG from './assets/postgres.png';
import logoSHEETS from './assets/sheets.png';
import Contacto from './Contacto';
import Project from './Project';

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
      <Menu />
      <div className='banner'>
        <h1>DIEGO ALBERTO PINEDA MEDINA</h1>
        <h2>BIENVENIDO(A) A MI PORTAFOLIO</h2>
        <div className='skills'>
          <div className='service'>
            <img src={logoNODE} alt='Desarrollo web' />
            <h3>Desarrollo web</h3>
          </div>
          <div className='service'>
            <img src={logoNODE} alt='Desarrollo móvil' />
            <h3>Desarrollo móvil</h3>
          </div>
          <div className='service'>
            <img src={logoNODE} alt='Responsive design' />
            <h3>Responsive design</h3>
          </div>
        </div>
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
                      <Project
                        key={item.id}
                        project={item}
                        logosKeys={logosKeys}
                        logosValues={logosValues}
                      />
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Contacto />
    </div>
  );
}

export default App;
