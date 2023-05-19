import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai'
import './scrollup.css'

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })
  return (
    <a href="#" className='scrollup'>
        <AiOutlineArrowUp className='scrollup-icon'/>
    </a>
  )
}

export default ScrollUp;