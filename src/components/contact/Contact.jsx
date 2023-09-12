import React,{useRef} from 'react'
import './contact.scss'
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {FiPhoneCall} from "react-icons/fi"
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_68sb31q', 'template_5l0gmnj', form.current, 'nJpbsBEWYPjnT5_eP');
      
    e.target.reset();
  };
  return (
    <section id="contact" className='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className='contact-icon'/>
            <h4>Email</h4>
            <h5>bsal.stha123@gmail.com</h5>
            <a href="mailto:bsal.stha123@gmail.com">Send an Email</a>
          </article>

          <article className="contact-option">
            <RiMessengerLine className='contact-icon'/>
            <h4>Messenger</h4>
            <h5>Bishal Shrestha</h5>
            <a href="https://m.me/bsal.stha.7" target='_blank'>DM</a>
          </article>

          <article className="contact-option">
            <FiPhoneCall className='contact-icon'/>
            <h4>Call Me</h4>
            <h5>(+977)981-8126-074</h5>
            <a href="tel:+9779818126074">Call Now</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
