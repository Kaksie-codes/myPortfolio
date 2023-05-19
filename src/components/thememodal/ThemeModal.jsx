import React, { useEffect, useState, useRef } from 'react';
import './thememodal.css'

const ThemeModal = ({cardRef, isOpen}) => {  
  const [color, setColor] = useState('color-1');
  const [bgColor, setBgColor] = useState('bg-2');
  const [primaryHue, setPrimaryHue] = useState(252);
  const [lightCol, setLightCol] = useState('95%')
  const [whiteCol, setWhiteCol] = useState('100%')
  const [darkCol, setDarkCol] = useState('17%')
   
    useEffect(() => {
      //check for localstorage value
      const currentColorTheme = localStorage.getItem('color');
      const currentBgColorTheme = localStorage.getItem('bgColor');

      if(currentColorTheme){
        setColor(currentColorTheme);
      }
      
      if(currentBgColorTheme){
        setBgColor(currentBgColorTheme);
      }
      
    }, []);
  
  const chooseColor = (_color) => {
      setColor(_color);
      localStorage.setItem('color', _color)
  }
  const chooseBgColor = (_bgColor) => {
      setBgColor(_bgColor);
      localStorage.setItem('bgColor', _bgColor);
  }

   
    useEffect(() => {
        if (color === 'color-1') {
          setPrimaryHue(252);
        } else if (color === 'color-2') {
          setPrimaryHue(52);
        } else if (color === 'color-3') {
          setPrimaryHue(352);
        } else if (color === 'color-4') {
          setPrimaryHue(152);
        } else{
          setPrimaryHue(202);
        }
      }, [color]);

    useEffect(() => {
        if(bgColor === 'bg-1'){
            setDarkCol('17%');
            setWhiteCol('100%');
            setLightCol('95%');
        }else if(bgColor === 'bg-2'){
            setDarkCol('95%');
            setWhiteCol('20%');
            setLightCol('15%');
        }else{
            setDarkCol('95%');
            setWhiteCol('10%');
            setLightCol('0%');
        }
    }, [bgColor])

    useEffect(() => {
        document.documentElement.style.setProperty('--primary-hue', primaryHue);
        document.documentElement.style.setProperty('--dark-color-lightness', darkCol);
        document.documentElement.style.setProperty('--light-color-lightness', lightCol);
        document.documentElement.style.setProperty('--white-color-lightness', whiteCol);
      }, [primaryHue, darkCol, lightCol, whiteCol]);

     
 
  

  return (    
    <div className={`customize__theme ${!isOpen ? 'hide' : ''}`}>
        <div className={`card`} ref={cardRef}>
            <h2>Customize your view</h2>
            <p>Manage your color, and background</p>
            <div className="color">
                <h4>Color</h4>
                <div className="choose-color">
                    <span className={`color-1 ${color === 'color-1' ? 'active' : ''}`} onClick={() => chooseColor('color-1')}></span>
                    <span className={`color-2 ${color === 'color-2' ? 'active' : ''}`} onClick={() => chooseColor('color-2')}></span>
                    <span className={`color-3 ${color === 'color-3' ? 'active' : ''}`} onClick={() => chooseColor('color-3')}></span>
                    <span className={`color-4 ${color === 'color-4' ? 'active' : ''}`} onClick={() => chooseColor('color-4')}></span>
                    <span className={`color-5 ${color === 'color-5' ? 'active' : ''}`} onClick={() => chooseColor('color-5')}></span>
                   
                </div>
            </div>
            <div className="background">
                <h4>Background</h4>
                <div className="choose-bg">
                    <div className={`bg-1 ${bgColor === 'bg-1' ? 'active' : ''}`} onClick={() => chooseBgColor('bg-1')}>
                        <span></span>
                        <h5 htmlFor="bg-1">Light</h5>
                    </div>
                    <div className={`bg-2 ${bgColor === 'bg-2' ? 'active' : ''}`} onClick={() => chooseBgColor('bg-2')}>
                        <span></span>
                        <h5 htmlFor="bg-2">Dim</h5>
                    </div>
                    <div className={`bg-3 ${bgColor === 'bg-3' ? 'active' : ''}`} onClick={() => chooseBgColor('bg-3')}>
                        <span></span>
                        <h5 htmlFor="bg-3">Dark</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>   
  )
}

export default ThemeModal