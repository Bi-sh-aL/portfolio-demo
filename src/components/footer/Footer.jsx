import React from 'react'
import './footer.scss'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer-logo'>BISHAL</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://facebook.com" target='_blank'><FaFacebook/></a>
        <a href="https://instagram.com" target='_blank'><FiInstagram/></a>
        <a href="https://twitter.con" target='_blank'><IoLogoTwitter/></a> 
      </div>

      <div className="footer-copyright">
        <small>&copy; Bishal Shrestha. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer