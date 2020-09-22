import React, { useState } from 'react';
import './App.css';
// COMPONENTS
import projects from './projects.json';
import Menu from './Menu';
import Banner from './Banner';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import Project from './Project';
import Footer from './Footer';
// FRAMEWORK LOGOS
import logoRJS from './assets/frameworkLogos/react.png';
import logoRN from './assets/frameworkLogos/react-native.png';
import logoNODE from './assets/frameworkLogos/node.png';
import logoGIT from './assets/frameworkLogos/git.png';
import logoMONGO from './assets/frameworkLogos/mongo.png';
import logoFIREBASE from './assets/frameworkLogos/firebase.png';
import logoPG from './assets/frameworkLogos/postgres.png';
import logoSHEETS from './assets/frameworkLogos/sheets.png';
// PROJECT LOGOS
import claudia from './assets/projectIcons/claudia.png';
import portfolio from './assets/projectIcons/portfolio.png';
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
};
const FMLogosKeys = Object.keys(FMLogos);
const FMLogosValues = Object.values(FMLogos);

const PJLogos = {
  'claudia': claudia,
  'portfolio': portfolio,
  'youtrain': youtrain,
  'ipred': ipred,
  'react': react,
  'contact': contact,
  'progress': progress
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
