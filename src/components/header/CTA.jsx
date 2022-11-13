import React from 'react'
import CV from '../../assets/statics/JIMENA-DIEWIATAJEW.pdf'
const CTA = () => {
  return (
    <div className='cta wow animate__fadeInUp animate__animated'>
        <a className='btn' href={CV} download>Download CV</a>
        <a className='btn btn-primary' href='#contact'>Let's talk</a>
    </div>
  )
}

export default CTA