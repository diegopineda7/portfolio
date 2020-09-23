import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import logoGH from './assets/frameworkLogos/github.png';
import lock from './assets/lock.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


export default function Project(props) {
  const { project, FMLogosKeys, FMLogosValues, PJLogos, lang } = props;
  const { name, image, github, descriptionEs, descriptionEn, frameworks, link } = project;

  return (
    <div className='project'>
      <div className='project__header'>
        <h2>{name}</h2>
        {
          link !== '' &&
          <a
            rel='noopener noreferrer'
            target='_blank'
            href={link !== '' ? link : null}
            className={link !== '' ? 'project__link project__link--link' : 'project__link'}
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} className='project__plus' />
          </a>
        }
      </div>
      <div className='project__info' >
        <img
          src={PJLogos[image]}
          alt={name}
          className={image === 'portfolio' ? 'project__img project__img--portfolio' : 'project__img'}
        />
        <div className='project__frameworks'>
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
                    className='project__framework-logo'
                  />
                </Tippy>
              )
            })
          }
        </div>
      </div>
      <p className='project__description'>
        {
          lang === 'es'
            ? descriptionEs
            : descriptionEn
        }
      </p>
      {
        github !== ''
          ? <a
            rel='noopener noreferrer'
            target='_blank'
            href={github}
            className='project__gh-button'
          >
            <img
              src={logoGH}
              alt='Repositorio GitHub'
              className='project__framework-logo project__gh-button-img'
            />
            {
              lang === 'es'
                ? 'Repositorio GitHub'
                : 'GitHub repository'

            }
          </a>
          : <p className='project__private-button'>
            <img
              src={lock}
              alt='Repositorio privado'
              className='project__framework-logo project__private-button-img'
            />
            {
              lang === 'es'
                ? 'Repositorio privado'
                : 'Private repository'
            }
          </p>
      }
    </div >
  )
}
