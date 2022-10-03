import React, { useRef } from 'react';
import './contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =  useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4p26bzc', 'service_4p26bzc', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
   <section id='contact'>
    <h5>Get in touch</h5>
    <h2>Contact me</h2>
    <div className="container contact__container">
      <form ref={form} onSubmit={sendEmail} >
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send</button>
      </form>
    </div>
   </section>
  )
}

export default Contact