import React from 'react';
import email from './assets/social/email.png';
import instagram from './assets/social/instagram.png';
import linkedin from './assets/social/linkedin.png';
import whatsapp from './assets/social/whatsapp.png';

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <h2>CONTACTA CONMIGO</h2>
      <h3 className='message'>Me puedes contactar en redes sociales o enviándome un email</h3>
      <div className='contactContent'>
        <a
          rel="noopener noreferrer"
          target='_blank'
          href='https://www.linkedin.com/in/diego-alberto-pineda-medina-8b1476180/'
        >
          <div className='social'>
            <img src={linkedin} alt='LinkedIn' />
            <h3>LinkedIn</h3>
          </div>
        </a>
        <a
          rel="noopener noreferrer"
          target='_blank'
          href='https://www.instagram.com/pinedadiego7/'
        >
          <div className='social'>
            <img src={instagram} alt='Instagram' />
            <h3>Instagram</h3>
          </div>
        </a>
        <a
          rel="noopener noreferrer"
          target='_blank'
          href='https://api.whatsapp.com/send?phone=+573125285909'
        >
          <div className='social'>
            <img src={whatsapp} alt='WhatsApp' />
            <h3>WhatsApp</h3>
          </div>
        </a>
        <a href='mailto:pineda.diego798@gmail.com'>
          <div className='social'>
            <img src={email} alt='Email' />
            <h3>Email</h3>
          </div>
        </a>
      </div>
    </div>
  )
}
