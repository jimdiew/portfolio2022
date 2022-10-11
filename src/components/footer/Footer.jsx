import React from 'react'
import './footer.css'
import {RiInstagramFill} from 'react-icons/ri'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>JIMDIEW</a>
    
      <div className='footer__sections'>
     <ul>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a  href='#projects'>Projects</a></li>
      <li><a  href='#contact'>Contact</a></li>
     </ul>
      </div>
   

    <div className="footer__copyright">
      <small>&copy; Jimena Diewiatajew. All rights reserved.</small>
    </div>
   </footer>
  )
}

export default Footer