import React, { Component } from 'react';
import emailLogo from './assets/social/email.png';
import instagram from './assets/social/instagram.png';
import linkedin from './assets/social/linkedin.png';
import whatsapp from './assets/social/whatsapp.png';

export default class Contact extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      enable: false
    }
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.messageRef = React.createRef();
  }

  changeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => this.validateInputs());
  }

  validateInputs = () => {
    const { name, email, message } = this.state;
    if (name !== '' && email !== '' && message !== '')
      this.setState({ enable: true });
    else this.setState({ enable: false });
  }

  sendMessage = () => {
    const { name, email, message } = this.state;
    alert(`Gracias ${name}. Me dijiste "${message}". Estaré respondiendo a ${email} lo más pronto posible.`)
  }

  render() {
    const { nameRef, emailRef, messageRef, changeInput, validateInputs, sendMessage } = this;
    const { enable } = this.state;
    return (
      <div className='contact' id='contact'>
        <h2>CONTACTO</h2>
        <h3>Me puedes contactar en mis redes sociales</h3>
        <div className='contactContent'>
          <a href='mailto:pineda.diego798@gmail.com'>
            <div className='social'>
              <img src={emailLogo} alt='Email' />
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
        <h3>O si prefieres, déjame un mensaje y me comunicaré contigo</h3>
        <form>
          <div className='formItem'>
            <label>¿Cómo te llamas?</label>
            <input name='name' type='text' placeholder='Nombre*' ref={nameRef} onChange={changeInput} />
          </div>
          <div className='formItem'>
            <label>¿A qué email te puedo responder?</label>
            <input name='email' type='email' placeholder='Email*' ref={emailRef} onChange={changeInput} />
          </div>
          <div className='formItem'>
            <label>¿Qué quieres comentarme?</label>
            <textarea name='message' type='text' placeholder='Mensaje*' ref={messageRef} onChange={changeInput} />
          </div>
        </form>
        <button
          disabled={!enable}
          onClick={sendMessage}
          className={enable ? 'sendButton' : 'sendButton disabled'}
        >Enviar</button>
      </div>
    )
  }
}
