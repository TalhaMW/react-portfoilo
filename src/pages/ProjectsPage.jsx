import React,{useContext} from 'react'
import { NavMenuContext } from '../context/nav-menu-context'

const ProjectsPage = ()=>{
    const {mode} = useContext(NavMenuContext)
    return(
    
    <section id="projects" className="flex flex-col items-center">
    <h1 className={`text-4xl sm:text-5xl font-semibold text-center mb-8 ${mode==="dark"?"text-dark-mode-heading-text":"text-white-mode-heading-text"}`}>Projects</h1>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="border-2 border-gray-600 w-10 h-10 shadow-lg">
        </div>
        <div className="border-2 border-gray-600 w-10 h-10 shadow-lg">
        </div>
        <div className="border-2 border-gray-600 w-10 h-10 shadow-lg">
        </div>
    </div>
</section>
)
    }
export default ProjectsPage