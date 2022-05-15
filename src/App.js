import React,{useContext} from 'react'
import {NavMenuContext} from "./context/nav-menu-context"

import Header from "./components/layout/header/Header"
import Main from './components/layout/main/Main'
import Footer from './components/layout/footer/Footer'

import SkillsPage from './pages/SkillsPage'
import EducationPage from './pages/EducationPage'
import AboutPage from './pages/AboutPage' 
import ProjectsPage from './pages/ProjectsPage'
import IntrestPage from './pages/IntrestPage'
import {Routes,Route} from "react-router-dom"

function App() {
  const {menuOpen,closeMenu,mode} = useContext(NavMenuContext)
  const bodyClickHandler = ()=>{
    if(menuOpen){
      closeMenu()
    }
  }
  return (
    <div onClick={bodyClickHandler} className={`min-h-screen flex flex-col justify-between ${mode==="dark"?"bg-dark-mode-body":"bg-white-mode-body"}`}>
      <Header/>
      <Main>
      <Routes>
        <Route path="/" element={<AboutPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/skills" element={<SkillsPage/>}/>
        <Route path="/education" element={<EducationPage/>}/>
        <Route path="/interest" element={<IntrestPage/>}/>
      </Routes>
      </Main>
      <Footer/>
    </div>
  )
}

export default App