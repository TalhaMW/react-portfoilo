import React,{useContext} from 'react'
import { NavMenuContext } from '../context/nav-menu-context'
import {IoLogoLinkedin} from "react-icons/io"
import {AiFillGithub} from "react-icons/ai"

const AboutPage = ()=>{
  const {mode} = useContext(NavMenuContext)
  return(
     <section id="about" className="flex flex-col items-center">
            <h1 className={`text-4xl font-semibold text-center ${mode==="dark"?"text-dark-mode-heading-text":"text-white-mode-heading-text"}`}>Talha Muneer</h1>
            <p className={`text-base md:text-lg font-semibold text-center py-8 ${mode==="dark"?"text-dark-mode-text":"text-white-mode-text"}`}>A passionate Developer with a focus on Problem-Solving, who is always passionate about learning new technologies. I believe in hard work and knowledge.</p>
            <div>
            <dir><span className={`text-gray-600 font-semibold text-sm md:text-xl pr-2`}>Location </span><span className="text-base md:text-lg font-semibold text-gray-400">SARGODHA , BLOCK 16 IQBAL PARK</span></dir>
            <dir><span className="text-gray-600 font-semibold text-sm md:text-xl pr-2">Phone NO# </span><span className="tex-base md:text-lg font-semibold text-gray-400">+92 343 6885953</span></dir>
            <dir><span className="text-gray-600 font-semibold text-sm md:text-xl pr-2">Email </span><span className="text-base md:text-lg font-semibold text-gray-400">talhamunir720@gmail.com</span></dir>
            <div></div>
            </div>
           
            <div className=' flex mt-8'>
              <a href="https://www.linkedin.com/in/talha-muneer-57a251199" target="_blank"><IoLogoLinkedin className='text-3xl sm:text-5xl text-blue-600 mr-2'/></a>
              <a href=" https://github.com/TalhaMW" target="_blank"><AiFillGithub className={`text-3xl sm:text-5xl ml-2 ${mode==="dark"?"text-dark-mode-heading-text":"text-white-mode-heading-text"}`}/></a>
            </div>
            <div className='mt-8'><span className='text-gray-700 text-md font-semibold'>Created By </span><span className='text-gray-500 text-xl font-semibold'>Talha Muneer</span></div>
        </section>  
  )
}
export default AboutPage