import React from 'react'
import './nav.css'
import {AiFillHome, AiFillFolder, AiFillMessage} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaCoffee} from 'react-icons/fa'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
    <a className={activeNav === '#' ? 'active' : '' } onClick={()=>setActiveNav('#')} href="#"><AiFillHome/></a>
    <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }><BsFillPersonFill/></a>
    <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><FaCoffee/></a>
    <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : '' }><AiFillFolder/></a>
    <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><AiFillMessage/></a>
   </nav>
  )
}

export default Nav