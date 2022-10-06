import React from 'react'
import './footer.css'
import {RiInstagramFill} from 'react-icons/ri'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>JIMDIEW</a>
    
      <div className='footer__socials'>
      <a href="https://www.linkedin.com/in/jimdiew/"><FaLinkedin/></a>
      <a href="https://github.com/jimdiew"><BsGithub/></a>
      <a href="https://www.instagram.com/watch.jim.code/"><RiInstagramFill/></a>
      </div>
   

    <div className="footer__copyright">
      <small>&copy; Jimena Diewiatajew. All rights reserved.</small>
    </div>
   </footer>
  )
}

export default Footer