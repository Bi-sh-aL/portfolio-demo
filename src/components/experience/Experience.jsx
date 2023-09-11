import React from 'react'
import './experience.scss'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
   <section id="experience">
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience-container">
      <div className="experience-frontend">
         <h3>Frontend Development</h3>
         <div className="experience-content">
          <article className="experience-details">
            <BsPatchCheckFill />
            <h4>HTML</h4>
            <small className='text-light'>Itermediate</small>
          </article>

          <article className="experience-details">
            <BsPatchCheckFill />
            <h4>CSS</h4>
            <small className='text-light'>Itermediate</small>
          </article>

          <article className="experience-details">
            <BsPatchCheckFill />
            <h4>JavaScript</h4>
            <small className='text-light'>Beginner</small>
          </article>

          <article className="experience-details">
            <BsPatchCheckFill />
            <h4>Bootstrap</h4>
            <small className='text-light'>Itermediate</small>
          </article>

          <article className="experience-details">
            <BsPatchCheckFill />
            <h4>Tailwind</h4>
            <small className='text-light'>Beginner</small>
          </article>

          <article className="experience-details">
            <BsPatchCheckFill />
            <h4>React</h4>
            <small className='text-light'>Beginner</small>
          </article>
  
         </div>
      </div>
      

    </div>
   </section>
  )
}

export default Experience
