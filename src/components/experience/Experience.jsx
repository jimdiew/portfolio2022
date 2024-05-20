import React from "react"
import "./experience.css"
import { BsCheckCircle } from "react-icons/bs"

const Experience = () => {
  return (
    <section id="experience">
      <h5>Education and Work</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__education wow animate__animated animate__fadeInLeft">
          <h3>Education</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircle className="experience__details-icon" />
              <div>
                {" "}
                <h4>Top Technician in Programming</h4>
                <small>@ TECLAB</small>
                <small> | Oct 2019 to Nov 2021</small>
              </div>
            </article>
            <article className="experience__details ">
              <BsCheckCircle className="experience__details-icon" />
              <div>
                {" "}
                <h4>Professional Front End Developer</h4>
                <small>@ UTN</small>
                <small> | Feb 2018 to Sep 2018</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className="experience__details-icon" />
              <div>
                <h4>Graphic Design</h4>
                <small>@ UADE</small>
                <small>
                  {" "}
                  | Mar 2011 to Jun 2014 (<i>Not Finished</i>){" "}
                </small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__work wow animate__animated animate__fadeInRight">
          <h3>Work</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircle className="experience__details-icon" />
              <div>
                <h4>Front End Developer</h4>
                <small>@ AYIGROUP</small>
                <small> | Aug 2021 to Present</small>
              </div>
            </article>
            <ul>
              <li>
                Responsible for developing a web application for the client
                based on Figma designs made by the UX UI designers.
              </li>
              <li>
                Maintained modular and reusable components using React.js,
                resulting in improved code maintainability.
              </li>
              <li>
                Led training sessions for a trainee developer, providing
                guidance on best practices, code structure, and troubleshooting
                techniques. Contributed to their successful integration into the
                development team
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
