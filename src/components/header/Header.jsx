import React from 'react'
import './header.scss'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import ME from '../../assets/Me.jpg'

function Header() {
  return (
    <header>
      <div className="container header-container">
          <h5>Hello I'm</h5>
          <h1>Bishal Shrestha</h1>
          <h5 className="text-light">Front-end Developer</h5>
          <CTA/>
          <HeaderSocial/>
          <div className="me">
            <img src={ME} height="100%" width="100%" alt="me" />
          </div>

          <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header