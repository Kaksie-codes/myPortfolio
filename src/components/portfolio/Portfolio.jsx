import React from 'react'
import ProjectCard from '../ProjectCard'
import img1 from '../../assets/img-1.jpg'
import img2 from '../../assets/img-2.jpg'
import img3 from '../../assets/img-3.jpg'
import { useNavigate } from 'react-router-dom'
import './portfolio.css';


const Portfolio = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/projects')
    }
  return ( 
    <section className="portfolio" id="portfolio">
        <h2 className="section-heading">My Projects</h2>                    
        <p className="text-color text-center">
            Here are some of my work that I've done in various technologies.
        </p>
        <div className="container portfolio__container">
            <ProjectCard 
                title="Netflix Clone" 
                technologies="Built using React Js, CSS, Firebase, Redux." 
                imgUrl={img1}
                github=""
                site='https://jessyschools.netlify.app/'
            />
            <ProjectCard 
                title="Amazon Clone" 
                technologies="Built using HTML, CSS, bootstrap, SASS, react JS" 
                imgUrl={img2}
                github=""
                site='https://jessyschools.netlify.app/'
            />
            <ProjectCard 
                title="Blink - Social media App" 
                technologies="Built using HTML, CSS and JavaScript" 
                imgUrl={img3}
                github=""
                site='https://jessyschools.netlify.app/'
            />
        </div>  
        <a href="" className="btn primary" onClick={handleClick}>View More</a> 
    </section>
  )
}

export default Portfolio;