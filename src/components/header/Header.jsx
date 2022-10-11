import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/statics/me-sitting.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello! I'm</h3>
        <h1>Jimena Diewiatajew</h1>
        <h3 className="text-light">Frontend Developer</h3>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href='#contact' className='scroll__down'>Keep Scrolling</a>
      </div>
    </header>
  )
}

export default Header