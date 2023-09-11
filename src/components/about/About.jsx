import React from 'react'
import './about.scss'
import ME from '../../assets/Me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about" className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} width="100%" height="100%" alt="" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-article">
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
          
            <article className="about-article">
              <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>200+ Clients</small>
            </article>
         

            <article className="about-article">
              <VscFolderLibrary className='about-icon'/>
              <h5>Project</h5>
              <small>40+ Completed</small>
            </article>
          </div>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, repellat. Quisquam illum architecto accusantium rem unde facere officiis reiciendis quos provident laudantium inventore dolorum quia, debitis blanditiis placeat similique obcaecati.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
          </div>
        </div>
        
    </section>
  )
}

export default About
