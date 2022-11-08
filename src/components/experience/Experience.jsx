import React from 'react'
import './experience.css'
import { BsCheckCircle } from 'react-icons/bs'


const Experience = () => {
  return (

   <section id='experience'>
    <h5>Education and Work</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="experience__education">
        <h3>Education</h3>
        <div className="experience__content">
          <article className='experience__details'>
            < BsCheckCircle className='experience__details-icon'/> 
            <div> <h4>Top Technician in Programming</h4>
            <small>@ TECLAB</small>
            <small  > | Oct 2019 to Nov 2021</small></div>
           
          </article>
          <article className='experience__details'>
            < BsCheckCircle className='experience__details-icon'/> 
            <div> <h4>Professional Front End Developer</h4>
            <small>@ UTN</small>
            <small> | Feb 2018 to Sep 2018</small></div>
           
          </article>
          <article className='experience__details'>
            < BsCheckCircle className='experience__details-icon'/> 
            <div><h4>Graphic Design</h4>
            <small>@ UADE</small>
            <small> | Mar 2011 to Jun 2014 (<i>Not Finished</i>) </small></div>
            
          </article>
        </div>
      </div>
      <div className="experience__work">
      <h3>Work</h3>
        <div className="experience__content">
          <article className='experience__details'>
            < BsCheckCircle className='experience__details-icon'/> 
            <div><h4>Front End Developer</h4>
            <small>@ AYIGROUP</small>
            <small> | Aug 2021 to Present</small></div>     
          </article>
          <article className='experience__details'>
            < BsCheckCircle className='experience__details-icon'/> 
            <div><h4>Testing Automation Intern</h4>
            <small>@ Olenick S.A</small>
            <small> | Feb 2021 to Mar 2021</small></div>
            
          </article>
          <article className='experience__details'>
            < BsCheckCircle className='experience__details-icon'/> 
            <div><h4>Graphic Designer</h4>
            <small>@ IPVP</small>
            <small> | Oct 2012 to Dec 2012</small></div>
            
          </article>
        </div>
      </div>
     
    </div>
   </section>

  )
}

export default Experience