import React from 'react'
import {AiFillLinkedin, AiFillGithub,AiFillInstagram} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/jimdiew/' target='_blank'><AiFillLinkedin /></a>
        <a href='https://github.com/jimdiew' target='_blank'><AiFillGithub /></a>
        <a href='https://instagram.com/watch.jim.code'><AiFillInstagram /></a>
    </div>
  )
}

export default HeaderSocials