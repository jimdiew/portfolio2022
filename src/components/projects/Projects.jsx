import React from "react"
import "./projects.css"
import IMG1 from "../../assets/statics/app.png"
import IMG3 from "../../assets/statics/portfolio.png"

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container projects__container">
        <article className="projects__item wow animate__animated animate__slideInUp">
          <div className="projects__item-image">
            <img src={IMG1} alt="To Do App" />
          </div>
          <h3>To Do App</h3>
          <div className="projects__item-cta">
            <a
              href="https://github.com/jimdiew/to-do-app"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://to-do-app-beta-lovat.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="projects__item wow animate__animated animate__slideInUp animate__delay-1s">
          <div className="projects__item-image">
            <img src={IMG3} alt="Portfolio Landing Page" />
          </div>
          <h3>Portfolio Landing Page</h3>
          <div className="projects__item-cta">
            <a
              href="https://github.com/jimdiew/DinoGoogleLanding"
              className="btn btn-primary"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects
