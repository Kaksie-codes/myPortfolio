import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'

const ProjectCard = ({title, technologies, imgUrl, github, site}) => {
  return (
    <div className="portfolio__item">                            
        <div className="image">
            <img src={imgUrl} alt=""/>
        </div>
        <h3>{title}</h3>
        <p className="blog-text">{technologies}</p>
        <div className="hover-items">
            <div className="wrap">
                <h3>Project Source</h3>
                <div className="icons">
                    <a href={github} target='_blank' className="icon">
                        <BsGithub/>
                        <p>Code</p>
                    </a>
                    <a href={site} target='_blank' className="icon">
                        <FiExternalLink/>
                        <p>Demo</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard;
