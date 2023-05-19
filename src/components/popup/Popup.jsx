import React, { useState, useEffect } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import './popup.css'

function Popup({ visible, setVisible }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 10000);

      const interval = setInterval(() => {
        setProgress(prevProgress => prevProgress - 10);
      }, 1000);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [visible, setVisible]);

  useEffect(() => {
    if (!visible) {
      setProgress(100);
    }
  }, [visible]);


  return visible ? (
    <div className="popup">
      <div className="wrapper">
        <AiFillCheckCircle className='check__icon'/>
        <p>Message Sent. Thank you!</p>
      </div>
      <AiOutlineClose className='close__icon'/>    
      <div className="progress-bar" style={{ width:`${progress}%`}}></div>
    </div>
  ) : null;
}

export default Popup;
