import React from 'react'
import './projects.css'
import IMG1 from '../../assets/statics/dinogame.png'
import IMG3 from '../../assets/statics/portfolio.png'


const Projects = () => {
  return (

   <section id='projects'>
    <h5>My Recent Work</h5>
    <h2>Projects</h2>
    <div className="container projects__container">
      <article className='projects__item wow animate__animated animate__slideInUp'>
        <div className="projects__item-image">
          <img src={IMG1} alt="Dino Google Game Landing Page" />
        </div>
        <h3>DinoGoogle Landing Page</h3>
       <div className="projects__item-cta">
       <a href="https://github.com/jimdiew/DinoGoogleLanding" className='btn'  target='_blank'>GitHub</a>
        <a href="https://dino-google-landing.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>
      </article>
      <article className='projects__item wow animate__animated animate__slideInUp animate__delay-1s'>
        <div className="projects__item-image">
          <img src={IMG3} alt="Portfolio Landing Page" />
        </div>
        <h3>Portfolio Landing Page</h3>
        <div className="projects__item-cta">
        <a href="https://github.com/jimdiew/DinoGoogleLanding" className='btn btn-primary'  target='_blank'>GitHub</a>
        </div>
      </article>
    </div>
   </section>

  )
}

export default Projects