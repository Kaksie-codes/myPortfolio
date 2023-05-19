import React from 'react'
import { BsAward } from 'react-icons/bs'
import { BsBriefcase } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'

const Info = () => {
  return (
    <div className='about__info'>
        <div className="about__box">
            <BsAward className='about__icon'/>
            <h4 className="about__title">Experience</h4>
            <small className="about__subtitle">2+ years</small>
        </div>
        <div className="about__box">
            <BsBriefcase className='about__icon'/>
            <h4 className="about__title">Completed</h4>
            <small className="about__subtitle">50+ projects</small>
        </div>
        <div className="about__box">
            <BiSupport className='about__icon'/>
            <h4 className="about__title">Support</h4>
            <small className="about__subtitle">online 24/7</small>
        </div>
    </div>
  )
}

export default Info