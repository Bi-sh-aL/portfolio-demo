import React from 'react'
import './portfolio.scss'
import Data from './Data'

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
          Data.map((a)=>(
            <>
              <article key={a.id} className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={a.image} alt="" />
          </div>
          <h3>{a.title}</h3>
          <div className="portfolio-item-cta">
          <a href={a.github} className='btn'>GitHub</a>
          <a href={a.demo} className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
            </>
          ))
        }
        {/* <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio-item-cta">
          <a href="#" className='btn'>GitHub</a>
          <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio-item-cta">
          <a href="#" className='btn'>GitHub</a>
          <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio-item-cta">
          <a href="#" className='btn'>GitHub</a>
          <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio-item-cta">
          <a href="#" className='btn'>GitHub</a>
          <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio-item-cta">
          <a href="#" className='btn'>GitHub</a>
          <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio-item-cta">
          <a href="#" className='btn'>GitHub</a>
          <a href="#" className='btn btn-primary'>Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio