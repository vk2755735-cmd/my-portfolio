import React, { useRef, useState } from 'react';
import './contact.css';
import { MdOutlineMailOutline } from "react-icons/md";
import { LiaFacebookMessenger } from "react-icons/lia";
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9abhrhd',
      'template_nccklbq',
      form.current,
      'LTIOUnq6Sx_Y7BCIH'
    )
    .then(() => {
      setStatus("Message sent successfully ✅");
    })
    .catch((error) => {
      setStatus("Failed ❌, try again");
      console.log(error);
    });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>

        {/* CONTACT OPTIONS */}
        <div className='contact__options'>

          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vk2755735@gmail.com</h5>
            <a href="mailto:vk2755735@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className='contact__option'>
            <LiaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>vishal yadav</h5>
            <a href="https://m.me/vishal.yadav.192580" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91-9771806027</h5>
            <a href="https://api.whatsapp.com/send?phone=919771806027" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

        </div>

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail}>

          <input 
            type="text" 
            name='name' 
            placeholder='Your Full Name' 
            required 
          />

          <input 
            type="email" 
            name='email' 
            placeholder='Your Email' 
            required 
          />

          <textarea 
            name="message" 
            rows="7" 
            placeholder='Your Message' 
            required
          ></textarea>

          <button type="submit" className='btn btn-primary'>
            Send Message
          </button>

          {/* STATUS MESSAGE */}
          {status && <p className="contact__status">{status}</p>}

        </form>
      </div>
    </section>
  );
};

export default Contact;