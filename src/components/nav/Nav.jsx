import React, { useState } from 'react'
import './nav.css'
import {AiFillHome, AiFillFolder, AiFillMessage} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaCoffee} from 'react-icons/fa'
import { Link } from 'react-scroll'


const Nav = () => {
  const [click, setClick] = useState(false)

  // const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)
  return (
    <nav className="navbar">
    <Link className='nav__item' to='home' spy={true} smooth={true} offset={-50} duration={50} onClick={closeMenu}><AiFillHome/></Link>
    <Link className='nav__item' to="about" spy={true} smooth={true} offset={-150} duration={50} onClick={closeMenu} ><BsFillPersonFill/></Link>
    <Link className='nav__item' to="experience" spy={true} smooth={true} offset={-50} duration={50} onClick={closeMenu} ><FaCoffee/></Link>
    <Link className='nav__item' to="projects" spy={true} smooth={true} offset={-50} duration={50} onClick={closeMenu} ><AiFillFolder/></Link>
    <Link className='nav__item' to="contact" spy={true} smooth={true} offset={-50} duration={50} onClick={closeMenu} ><AiFillMessage/></Link>
    </nav>
  )
}

export default Nav