import React, { useState, useEffect } from 'react'
import photo from '../../assets/nsikak.png'
import './header.css'


const Header = () => {
    
    const [displayText, setDisplayText] = useState('Frontend Developer');

  useEffect(() => {
    const textOptions = ['Frontend Developer', 'Tech Enthusiast'];
    let currentIndex = 0;

    const typingTimer = setInterval(() => {
      setDisplayText(textOptions[currentIndex]);
      currentIndex = (currentIndex + 1) % textOptions.length;
    }, 2000); // Switch text every 2 seconds

    return () => {
      clearInterval(typingTimer);
    };
  }, []);


  return (
    <section className="header" id="header">
            <div className="container header__container">
                
                    <div className="hero__data">
                        <p className='headtext'>Hi, my name is</p>
                        <h1 >
                            <b>Nsikak Akpan</b>.
                        </h1>
                        <h1>{displayText}</h1>
                        <p>I love building exceptional digital experiences with modern technologies.</p>
                        <div className="btn-group">
                            <a href="#contact" className="btn primary">Contact Me</a>
                            <a href="#portfolio" className="btn white">See My Projects</a>
                        </div>                        
                    </div>
                    <div className="header__image-wrapper">
                        <div className="header__image">
                            <img  src={photo} alt="this is me Nsikak Akpan"/>
                        </div>
                    </div>                   
            </div>           
        </section>
  )
}

export default Header;