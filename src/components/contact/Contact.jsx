import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookF } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import './contact.css'



const Contact = ({setVisible}) => {

  
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_yxqkf6s', 'template_m0bbhx6', form.current, 'FDLG_ptP-L8QgQ9SE')
  .then((result) => {
    console.log(result.text);
    e.target.reset()
    setVisible(true)

  }, (error) => {
    console.log(error.text);
  });
  } 
  
  return (
    <section className="contact-me" id="contact">
      {/* {openModal && <PopUp closeModal={setOpenModal}/>} */}
      <div className="container">
        <h1 className="section-heading">Get In Touch</h1>
        <div className="contact-me-content">
          <div className="right-side">
            <p className="text-color">
              Hello there, feel free to contact me at any time, I will get back to you within 24 hours and if it's urgent, my social handle would be better in situations like that.
            </p>
            <p className="text-color"><b>Email: builtbykaksy@gmail.com</b></p>

            <div className="social-link">
              <a href="https://github.com/Kaksie-codes" className="icon-box github" target="_blank">
                <BsGithub/>
              </a>
              <a href="https://twitter.com/kaksie_codes" className="icon-box twitter" target="_blank">
                <FaTwitter/>
              </a>
              <a href="https://www.linkedin.com/in/nsikak-akpan/" className="icon-box facebook" target="_blank">
                <BsLinkedin/>
              </a>
              <a href="https://web.facebook.com/engrnsikak.akpan.14" className="icon-box facebook" target="_blank">
                <FaFacebookF/>
              </a>
              <a href="https://web.whatsapp.com/" className="icon-box facebook" target="_blank">
                <FaWhatsapp/>
              </a>
            </div>
          </div>

          <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <input className="input-field field" type="text" name="name" placeholder="Your Name" required />            
            <input className="input-field field" type="text" name="email" placeholder="Your Email" required />
            <textarea className="input-field field" name="message" placeholder="Your Message" required></textarea>
            <input id="submit-btn" type="submit" value="Send" className="field" />            
          </form>
        </div>

      </div>
    </section>

  )
}

export default Contact;