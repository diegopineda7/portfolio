import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <h2>CONTACTA CONMIGO</h2>
      <h3 className='message'>Me puedes contactar en mis redes sociales o por email</h3>
      <div className='contactContent'>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://www.linkedin.com/in/diego-alberto-pineda-medina-8b1476180/'
        >
          <div className='social'>
            <FontAwesomeIcon icon={faLinkedinIn} className='icon' />
            <h3>LinkedIn</h3>
          </div>
        </a>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://www.instagram.com/pinedadiego7/'
        >
          <div className='social'>
            <FontAwesomeIcon icon={faInstagram} className='icon' />
            <h3>Instagram</h3>
          </div>
        </a>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://api.whatsapp.com/send?phone=+573125285909'
        >
          <div className='social'>
            <FontAwesomeIcon icon={faWhatsapp} className='icon' />
            <h3>WhatsApp</h3>
          </div>
        </a>
        <a href='mailto:pineda.diego798@gmail.com'>
          <div className='social'>
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
            <h3>Email</h3>
          </div>
        </a>
      </div>
    </div>
  )
}