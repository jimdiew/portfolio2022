import React, { useRef } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form =  useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4p26bzc', 'template_hewozkf', form.current, '26E3dD70OoVUG8ZLG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (

   <section id='contact'>
    <h5>Get in touch</h5>
    <h2>Contact me</h2>
    <div className="container contact__container wow animate__fadeInUp animate__animated">
      <form ref={form} onSubmit={sendEmail} >
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary contact__button'>Send</button>
      </form>
    </div>
   </section>

  )
}

export default Contact;