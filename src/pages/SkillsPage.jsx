import React,{useContext} from 'react'
import { NavMenuContext } from '../context/nav-menu-context'
import react_img  from "../skills-logo/react_img.png"
import tailwind_img from "../skills-logo/tailwind_img.png"
import redux_img from "../skills-logo/redux_img.png"
import Javascript_img from "../skills-logo/javascript_img.png"
import cPlus_img from "../skills-logo/cPlus_img.png"
import html_img from "../skills-logo/html_img.png"
import css_img from "../skills-logo/css_img.png"
import scss_img from "../skills-logo/scss_img.png"
import firebase_img from "../skills-logo/firebase_img.png"
import {AiOutlineGithub} from "react-icons/ai"
import postman_img from "../skills-logo/postman_img.png"

const SkillsPage = () =>{
    const {mode} = useContext(NavMenuContext)
    return(
    <section id="skills" className=" flex-flex-col items-center">
    <h1 className={`text-5xl font-semibold text-center ${mode==="dark"?"text-dark-mode-heading-text":"text-white-mode-heading-text"}`}>Skills</h1>
    <div className="flex flex-col items-center">
    <h1 className={`text-3xl my-4 font-semibold text-center ${mode==="dark"?"text-dark-mode-heading-text":"text-white-mode-heading-text"}`}>Technologies I've Worked With</h1>
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-24 gap-y-16 sm:gap-x-28 sm:gap-y-20">
            <div className="shadow-md">
            <img className='mx-auto' src={react_img} alt="react" />
            <div className='text-gray-500 text-center pt-1 text-lg font-semibold'>React</div>
            </div>
            <div className="shadow-md">
            <img className='mx-auto' src={tailwind_img} alt="tailwind" />
            <div className='text-gray-500 text-center pt-1 text-lg font-semibold'>Tailwind</div>
            </div>
            <div className="shadow-md">
            <img className='mx-auto' src={redux_img} alt="redux" />
            <div className='text-gray-500 text-center pt-1 text-lg font-semibold'>Redux</div>
            </div>
            <div className="shadow-md">
            <img className='mx-auto' src={Javascript_img} alt="Javascript_img" />
            <div className='text-gray-500 text-center pt-1 text-lg font-semibold'>javascript</div>
            </div>
            <div className="shadow-md">
            <img className='mx-auto' src={cPlus_img} alt="cPlus_img" />
            <div className='text-gray-500 text-center pt-1 text-lg font-semibold'>C++</div>
            </div>
            <div className="shadow-md">
            <img className='mx-auto' src={html_img} alt="html_img" />
            <div className='text-gray-500 text-center pt-1 text-lg font-semibold'>HTML5</div>
            </div>
            <div className="shadow-md">
            <img className='mx-auto' src={css_img} alt="css_img" />
            <div className='text-gray-500 text-center pt-1 text-lg font-semibold'>CSS3</div>
            </div>
            <div className="shadow-md">
            <img className='mx-auto' src={scss_img} alt="scss_img" />
            <div className='text-gray-500 text-center pt-1 text-lg font-semibold'>Scss</div>
            </div>
            <div className="shadow-md">
            <img className='mx-auto' src={firebase_img} alt="firebase_img" />
            <div className='text-gray-500 text-center pt-1 text-lg font-semibold'>Firebase</div>
            </div>
            <div className="shadow-md">
            <img className='mx-auto' src={postman_img} alt="postman_img" />
            <div className='text-gray-500 text-center pt-1 text-lg font-semibold'>Postman</div>
            </div>
            <div className="shadow-md">
            <AiOutlineGithub className='text-5xl text-gray-500 mx-auto'/>
            <div className='text-gray-500 text-center pt-1 text-lg font-semibold'>Github</div>
            </div>
        </div>    
    </div>
    </section>
  )
    }

export default SkillsPage