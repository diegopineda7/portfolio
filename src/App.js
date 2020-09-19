import React from 'react';
import './App.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// COMPONENTS
import projects from './projects.json';
import Menu from './Menu';
// FRAMEWORK LOGOS
import logoRJS from './assets/frameworkLogos/react.png';
import logoRN from './assets/frameworkLogos/react-native.png';
import logoNODE from './assets/frameworkLogos/node.png';
import logoGIT from './assets/frameworkLogos/git.png';
import logoMONGO from './assets/frameworkLogos/mongo.png';
import logoFIREBASE from './assets/frameworkLogos/firebase.png';
import logoPG from './assets/frameworkLogos/postgres.png';
import logoSHEETS from './assets/frameworkLogos/sheets.png';
import logoGH from './assets/frameworkLogos/github.png';
import Contact from './Contact';
import Project from './Project';
// PROJECT LOGOS
import claudia from './assets/projectIcons/claudia.png';
import youtrain from './assets/projectIcons/youtrain.png';
import ipred from './assets/projectIcons/ipred.png';
import react from './assets/projectIcons/react.png';
import contact from './assets/projectIcons/contact.png';
import progress from './assets/projectIcons/progress.png';

const FMLogos = {
  'React JS': logoRJS,
  'React Native': logoRN,
  'Node.js': logoNODE,
  'Git': logoGIT,
  'MongoDB': logoMONGO,
  'Firebase': logoFIREBASE,
  'PostgreSQL': logoPG,
  'Google Sheets': logoSHEETS,
}
const FMLogosKeys = Object.keys(FMLogos);
const FMLogosValues = Object.values(FMLogos);

const PJLogos = {
  'claudia': claudia,
  'youtrain': youtrain,
  'ipred': ipred,
  'react': react,
  'contact': contact,
  'progress': progress
}

function App() {
  return (
    <div className="App">
      <Menu />
      <div className='banner' id='home'>
        <div className='header'>
          <div className='name'>
            <h1>DIEGO ALBERTO PINEDA MEDINA</h1>
            <h2>TE DOY LA BIENVENIDA A MI PORTAFOLIO</h2>
          </div>
          <div className='ghPortfolio'>
            <Tippy content={'Repositorios en GitHub'} placement='bottom'>
              <a
                rel="noopener noreferrer"
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
                        FMLogosKeys={FMLogosKeys}
                        FMLogosValues={FMLogosValues}
                        PJLogos={PJLogos}
                      />
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Contact />
    </div >
  );
}

export default App;
