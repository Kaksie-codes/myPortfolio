import React from 'react'
import './skills.css'
import { MdVerifiedUser } from 'react-icons/md'

const Skills = () => {
  return (
    <div className='skills'>
        <h2 class="section-heading">My technology stack</h2>
        <p class="text-color text-center">
            Here are some of some of the technologies in my arsenal.
        </p>
        <div className="container skills__container">
            <div className="skill">
                <MdVerifiedUser/>
                <h3>HTML</h3>
            </div>
        </div>
    </div>
  )
}

export default Skills