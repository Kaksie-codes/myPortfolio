import React from 'react'
import photo from '../../assets/nsikak_1.png'
import CV from '../../assets/CV.pdf'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { MdVerifiedUser } from 'react-icons/md'
import './about.css'
import Info from '../info/Info'

const About = () => {
  return (
    <section className="about" id="about">
        <h2 className="section-heading">About Me</h2>
        <div className="container about__container">
            <div className="left">
                <div className="about-me-img">
                    <img src={photo} alt=""/>
                </div> 
                <a download='' href={CV} className="btn primary">Download CV <AiOutlineFilePdf className='pdf'/> </a>                        
            </div>      
            <div className="right">
                <Info/>
                <p className='description'>
                    I enjoy learning new technologies and utilizing them to solve real-world problems.
                    I have had the priviledge of building tons of digital experiences, and i keep on learning new technologies to make more cooler projects.
                </p>      
                
                <div className="skills">
                    <p>Here are some of some of the technologies in my arsenal.</p>
                    <div className="skills__wrapper">
                        <div className="skill">
                            <MdVerifiedUser className='verified__icon'/>
                            <small>HTML</small>
                        </div>
                        <div className="skill">
                            <MdVerifiedUser className='verified__icon'/>
                            <small>CSS</small>
                        </div>
                        <div className="skill">
                            <MdVerifiedUser className='verified__icon'/>
                            <small>JavaScript</small>
                        </div>
                        <div className="skill">
                            <MdVerifiedUser className='verified__icon'/>
                            <small>React Js</small>
                        </div>
                        <div className="skill">
                            <MdVerifiedUser className='verified__icon'/>
                            <small>Tailwind CSS</small>
                        </div>
                        <div className="skill">
                            <MdVerifiedUser className='verified__icon'/>
                            <small>Redux</small>
                        </div>
                        <div className="skill">
                            <MdVerifiedUser className='verified__icon'/>
                            <small>SASS</small>
                        </div>
                        <div className="skill">
                            <MdVerifiedUser className='verified__icon'/>
                            <small>Firebase</small>
                        </div>
                        <div className="skill">
                            <MdVerifiedUser className='verified__icon'/>
                            <small>Next Js</small>
                        </div>
                        <div className="skill">
                            <MdVerifiedUser className='verified__icon'/>
                            <small>Git</small>
                        </div>
                    </div>
                </div>                                  
               
            </div>                    
        </div>
    </section>
  )
}

export default About;