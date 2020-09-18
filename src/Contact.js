import React from 'react';
import email from './assets/email.png';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import whatsapp from './assets/whatsapp.png';

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <h2>CONTACTO</h2>
      <h3>Me puedes contactar en mis redes sociales</h3>
      <div className='contactContent'>
        <a href='mailto:pineda.diego798@gmail.com'>
          <div className='social'>
            <img src={email} alt='Email' />
            <h3>Email</h3>
          </div>
        </a>
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
      </div>
      <h3>O si lo prefieres, déjame un mensaje y me comunicaré contigo</h3>
      <form>
        <div className='formItem'>
          <label>¿Cómo te llamas?</label>
          <input type='text' placeholder='Nombre*' />
        </div>
        <div className='formItem'>
          <label>¿A qué email te respondo?</label>
          <input type='email' placeholder='Email*' />
        </div>
        <div className='formItem'>
          <label>¿Qué quieres comentarme?</label>
          <textarea type='text' placeholder='Mensaje*' />
        </div>
      </form>
      <button className='sendButton'>Enviar</button>
    </div>
  )
}
