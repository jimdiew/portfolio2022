import React from 'react'
import './about.css'
import Me from '../../assets/statics/setup.png'
import {AiOutlineSetting} from 'react-icons/ai'
import {IoLibraryOutline} from 'react-icons/io5'
import {BiPaint} from 'react-icons/bi'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="Illustration of desk setup with a monitor and a plant" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus repellat rerum enim pariatur quis cum aspernatur corrupti placeat quibusdam beatae! Dolorum ducimus odio aperiam aliquid magnam architecto alias distinctio! Adipisci!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's chat</a>
        </div>
      </div>
    </section>
  )
}

export default About