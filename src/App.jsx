import React, { useEffect, useState, useRef } from 'react';
import NavBar from './components/navbar/NavBar'
import Header from './components/header/Header'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import PortfolioPage from './components/portfoliopage/PortfolioPage'
import ScrollUp from './components/scrollup/ScrollUp'
import Contact from './components/contact/Contact'
import ThemeModal from './components/thememodal/ThemeModal'
import Popup from './components/popup/popup';
import Loading from './components/loading/Loading';


function Homepage({setVisible, openThemeModal}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 2000; // 2 seconds delay

    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, []);

  return (
    <>
    {
      isLoading ? (
        <Loading/>
      ) : (
      <main className='homepage'> 
        <div className="overlay"></div>
        <NavBar openThemeModal={openThemeModal}/> 
        <Header/> 
        <About/>        
        <Portfolio/>
        <Contact setVisible={setVisible}/>
        <Footer/>
      </main>
      )
    }
    </>   
  )
}


function App() {
  const [isDark, setIsDark] = useState(false);

  //theme-modal
  const [isOpen, setIsOpen] = useState(false);

  //message popup
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);
 
  useEffect(() => {
    let handleOutsideClick = (e) => {
      if(!cardRef.current.contains(e.target)){        
        setIsOpen(false);
      }      
    }

    document.addEventListener('mousedown', handleOutsideClick)
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  function openThemeModal(){
    setIsOpen(true)
    console.log('clicked theme modal')
  }


  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color")
    if(currentThemeColor === "dark"){
      setIsDark(true)
    }else{
      setIsDark(false)
    }
  },[])

  const toggleTheme = () => {
    if(isDark){
      localStorage.setItem("theme-color", "light")
      setIsDark(false)
    }else{
      localStorage.setItem("theme-color", "dark")
      setIsDark(true)
    }
  }


  return (
    <div className={`app`}>
      <Routes>
        <Route index element={<Homepage setVisible={setVisible} openThemeModal={openThemeModal}/>}/>
        <Route path='/projects' element={<PortfolioPage openThemeModal={openThemeModal}/>}/>
      </Routes>          
      <ScrollUp/>
      <ThemeModal cardRef={cardRef} isOpen={isOpen}/>
      <Popup visible={visible} setVisible={setVisible}/>
    </div>
  )
}

export default App
