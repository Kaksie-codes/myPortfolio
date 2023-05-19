import React, { useState, useEffect, useRef } from 'react'
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import { IoIosColorPalette } from 'react-icons/io'
import { Link } from 'react-router-dom';
import CV from '../../assets/CV.pdf'
import './navbar.css'

const NavBar = ({openThemeModal}) => {
    const navToggleRef = useRef(null);
    const [isNavShowing, setIsNavShowing] = useState(false);

    useEffect(() => {
        let handleOutsideClick = (e) => {
          if(!navToggleRef.current.contains(e.target)){        
            setIsNavShowing(false);
          }      
        }
    
        document.addEventListener('mousedown', handleOutsideClick)
        
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);

  return (
    <nav className='navbar'>
        <div className="container nav__container">
            <Link to='/' className="logo">
                <h2>nsikak.</h2>
            </Link>           
            <div className="nav__right">
                <ul className={`nav__links ${isNavShowing ? 'show__nav': ''}`}>
                    <li><a href="#about">About Me</a></li>                    
                    <li><a href="#portfolio">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>                    
                </ul>

                <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)} ref={navToggleRef}>
                    {isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>}
                </button>
                <button className='theme__btn' onClick={openThemeModal}>
                    <IoIosColorPalette/>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default NavBar