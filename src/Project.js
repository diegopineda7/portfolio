import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import logoGH from './assets/github.png';
import lock from './assets/lock.png';

export default function Project(props) {
  const { project, logosKeys, logosValues } = props;
  const { name, img, github, description, frameworks } = project;
  return (
    <div className='projectItem'>
      <h2>{name}</h2>
      <img
        src={img}
        alt={name}
        className='projectImg'
      />
      <p>{description}</p>
      <div className='projectFrameworks'>
        {
          frameworks.map(framework => {
            const index = logosKeys.indexOf(framework);
            const logo = logosValues[index];
            return (
              <Tippy content={framework} placement='bottom'>
                <img
                  key={framework}
                  src={logo}
                  alt={framework}
                  className='logoFramework'
                />
              </Tippy>
            )
          })
        }
      </div>
      {
        github !== ''
          ? <a
            rel="noopener noreferrer"
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
