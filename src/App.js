import React, { useState } from 'react';
import './App.css';
import logoFIREBASE from './assets/frameworkLogos/firebase.png';
import logoGIT from './assets/frameworkLogos/git.png';
import logoMONGO from './assets/frameworkLogos/mongo.png';
import logoNODE from './assets/frameworkLogos/node.png';
import logoPG from './assets/frameworkLogos/postgres.png';
import logoRN from './assets/frameworkLogos/react-native.png';
// FRAMEWORK LOGOS
import logoRJS from './assets/frameworkLogos/react.png';
import logoSHEETS from './assets/frameworkLogos/sheets.png';
import claudia from './assets/projectIcons/claudia.png';
import contact from './assets/projectIcons/contact.png';
import ipred from './assets/projectIcons/ipred.png';
import portfolio from './assets/projectIcons/portfolio.png';
import progress from './assets/projectIcons/progress.png';
// PROJECT LOGOS
import store from './assets/projectIcons/store.png';
import weather from './assets/projectIcons/weather.png';
import youtrain from './assets/projectIcons/youtrain.png';
import Banner from './Banner';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';
import Menu from './Menu';
import Project from './Project';
// COMPONENTS
import projects from './projects.json';

const FMLogos = {
  'React JS': logoRJS,
  'React Native': logoRN,
  'Node.js': logoNODE,
  'Git': logoGIT,
  'MongoDB': logoMONGO,
  'Firebase': logoFIREBASE,
  'PostgreSQL': logoPG,
  'Google Sheets': logoSHEETS,
};
const FMLogosKeys = Object.keys(FMLogos);
const FMLogosValues = Object.values(FMLogos);

const PJLogos = {
  'store': store,
  'claudia': claudia,
  'portfolio': portfolio,
  'youtrain': youtrain,
  'ipred': ipred,
  'contact': contact,
  'progress': progress,
  'weather': weather
};

function App() {
  const [lang, setLang] = useState('es');
  return (
    <div className='App'>
      <Menu lang={lang} />
      <Banner lang={lang} setLang={setLang} />
      <div className='projects' id='projects'>
        <div className='projects__visible'>
          {
            projects.map(section => (
              <div className='projects__section' key={section.id}>
                <h2>
                  {
                    lang === 'es'
                      ? section.sectionEs
                      : section.sectionEn
                  }
                </h2>
                <div className='projects__list'>
                  {
                    section.projects.map(item => (
                      <Project
                        key={item.id}
                        project={item}
                        FMLogosKeys={FMLogosKeys}
                        FMLogosValues={FMLogosValues}
                        PJLogos={PJLogos}
                        lang={lang}
                      />
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Education lang={lang} />
      <Experience lang={lang} />
      <Contact lang={lang} />
      <Footer />
    </div >
  );
}

export default App;
