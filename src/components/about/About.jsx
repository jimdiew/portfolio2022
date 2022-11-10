import React from 'react'
import './about.css'
import Me from '../../assets/statics/setup.png'
import {AiOutlineSetting} from 'react-icons/ai'
import {IoLibraryOutline} from 'react-icons/io5'
import {BiPaint} from 'react-icons/bi'

const About = () => {
  return (

    <section>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container" id='about'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="Illustration of desk setup with a monitor and a plant" />
          </div>
        </div>
        <div className="about__content ">
          <div className="about__cards wow animate__animated animate__fadeInRight">
            <article className='about__card'>
              <AiOutlineSetting className='about__icon'/>
              <h5>Technologies</h5>
              <small>ReactJs, Javascript</small>
            </article>
            <article className='about__card'>
              <IoLibraryOutline className='about__icon'/>
              <h5>Libraries</h5>
              <small>Bootstrap, MaterialUI</small>
            </article>
            <article className='about__card'>
              <BiPaint className='about__icon'/>
              <h5>Design</h5>
              <small>Photoshop, Figma</small>
            </article>
          </div>
          <p>
          Front end developer with experience in ReactJs, JavaScript, Bootstrap and MaterialUI. I'm in constant professional growth.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's chat</a>
        </div>
      </div>
    </section>


  )
}

export default About;