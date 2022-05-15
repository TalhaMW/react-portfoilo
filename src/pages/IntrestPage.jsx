import React,{useContext} from 'react'
import { NavMenuContext } from '../context/nav-menu-context'
import {FaRegNewspaper} from "react-icons/fa"
import {BsBook} from "react-icons/bs"
import {IoGameControllerOutline} from "react-icons/io5"
import {MdOutlineTravelExplore} from "react-icons/md"
import {MdSportsCricket} from "react-icons/md"
import {BiMoviePlay} from "react-icons/bi"

const IntrestPage = () =>{
    const {mode} = useContext(NavMenuContext)
    return(
    <section id="interest" className="flex flex-col items-center">
    <h1 className={`text-4xl sm:text-5xl mb-8 font-semibold text-center ${mode==="dark"?"text-dark-mode-heading-text":"text-white-mode-heading-text"}`}>Interests</h1>
    <div  className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-16 gap-y-12 sm:gap-x-28 sm:gap-y-20">
    <div className='flex flex-col items-center'>
      <div className='text-md sm:text-xl font-semibold text-gray-500 '>Tech Articles</div>
      <FaRegNewspaper className='text-4xl mt-2 text-gray-500'/>
    </div>
    <div className='flex flex-col items-center'>
      <div className='text-md sm:text-xl font-semibold text-gray-500 '>Book Reading</div>
      <BsBook className='text-4xl mt-2 text-gray-500'/>
    </div>
    <div className='flex flex-col items-center'>
      <div className='text-md sm:text-xl font-semibold text-gray-500 '>Exporing History</div>
      <MdOutlineTravelExplore className='text-4xl mt-2 text-gray-500'/>
    </div>
    <div className='flex flex-col items-center'>
      <div className='text-md sm:text-xl font-semibold text-gray-500 '>Games</div>
      <IoGameControllerOutline className='text-4xl mt-2 text-gray-500'/>
    </div>
    <div className='flex flex-col items-center'>
      <div className='text-md sm:text-xl font-semibold text-gray-500 '>Cricket</div>
      <MdSportsCricket className='text-4xl mt-2 text-gray-500'/>
    </div>
    <div className='flex flex-col items-center'>
      <div className='text-md sm:text-xl font-semibold text-gray-500 '>Movies</div>
      <BiMoviePlay className='text-4xl mt-2 text-gray-500'/>
    </div>
    </div>
    </section>
  )
    }


export default IntrestPage