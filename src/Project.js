import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import logoGH from './assets/frameworkLogos/github.png';
import lock from './assets/lock.png';

export default function Project(props) {
  const { project, FMLogosKeys, FMLogosValues, PJLogos } = props;
  const { name, image, github, description, frameworks, link } = project;

  return (
    <div className='projectItem'>
      <h2>{name}</h2>
      <div className='projectInfo'>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href={link}
          className='projectLink'
        >
          <img
            src={PJLogos[image]}
            alt={name}
            className={image === 'portfolio' ? 'projectImg portfolio' : 'projectImg'}
          />
        </a>
        <div className='projectFrameworks'>
          {
            frameworks.map(framework => {
              const index = FMLogosKeys.indexOf(framework);
              const logo = FMLogosValues[index];
              return (
                <Tippy
                  key={framework}
                  content={framework}
                  placement='bottom'
                >
                  <img
                    src={logo}
                    alt={framework}
                    className='logoFramework'
                  />
                </Tippy>
              )
            })
          }
        </div>
      </div>
      <p className='description'>{description}</p>
      {
        github !== ''
          ? <a
            rel='noopener noreferrer'
            target='_blank'
            href={github}
            className='ghButton'
          >
            <img
              src={logoGH}
              alt='Repositorio GitHub'
              className='logoFramework'
            />
              Repositorio GitHub
          </a>
          : <p className='privateButton'>
            <img
              src={lock}
              alt='Repositorio privado'
              className='logoFramework'
            />
            Proyecto privado
          </p>
      }
    </div>
  )
}
