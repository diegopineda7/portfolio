import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Contact(props) {
  const { lang } = props;
  return (
    <div className='contact' id='contact'>
      <h2>
        {
          lang === 'es'
            ? 'CONTACTA CONMIGO'
            : 'CONTACT ME'
        }
      </h2>
      <h3 className='contact__message'>
        {
          lang === 'es'
            ? 'Me puedes contactar en mis redes sociales o por email'
            : 'You can contact me on my social networks or by email'
        }
      </h3>
      <div className='contact__content'>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://www.linkedin.com/in/diego-alberto-pineda-medina-8b1476180/'
          className='contact__item'
        >
          <div className='contact__social'>
            <FontAwesomeIcon icon={faLinkedinIn} className='contact__icon' />
            <h3>LinkedIn</h3>
          </div>
        </a>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://www.instagram.com/pinedadiego7/'
          className='contact__item'
        >
          <div className='contact__social'>
            <FontAwesomeIcon icon={faInstagram} className='contact__icon' />
            <h3>Instagram</h3>
          </div>
        </a>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://api.whatsapp.com/send?phone=+573125285909'
          className='contact__item'
        >
          <div className='contact__social'>
            <FontAwesomeIcon icon={faWhatsapp} className='contact__icon' />
            <h3>WhatsApp</h3>
          </div>
        </a>
        <a href='mailto:pineda.diego798@gmail.com' className='contact__item'>
          <div className='contact__social'>
            <FontAwesomeIcon icon={faEnvelope} className='contact__icon' />
            <h3>Email</h3>
          </div>
        </a>
      </div>
      <h4 className='contact__message'>{
        lang === 'es'
          ? '¡Gracias por tu visita. Ten un gran día!'
          : 'Thank you for your visit. Have a nice day!'
      }
      </h4>
    </div>
  )
}