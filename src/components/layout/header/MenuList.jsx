import React,{useContext} from "react";
import { NavMenuContext } from "../../../context/nav-menu-context";

import { Link } from "react-router-dom";

const MenuList = ()=>{

    const {menuOpen,mode} = useContext(NavMenuContext)

    return(
        <ul className={` ${menuOpen ? "" : "hidden"} ${mode==="dark"?"text-dark-mode-text":"white-mode-text"}`}>
        <div className="flex flex-col items-start md:items-end">
        <Link to="/"><li className=" mt-6 md:mt-7  border-black border-opacity-10 font-semibold">
          About
        </li>
        </Link>
        <Link to="projects"><li className=" mt-6 md:mt-7  border-black border-opacity-10 font-semibold">
          Projects
        </li>
        </Link>
        <Link to="education"><li className=" mt-6 md:mt-7  border-black border-opacity-10 font-semibold">
          Education
        </li>
        </Link>
        <Link to="skills"><li className=" mt-6 md:mt-7  border-black border-opacity-10 font-semibold">
          skills
        </li>
        </Link>
        <Link to="interest"><li className=" mt-6 md:mt-7  border-black border-opacity-10 font-semibold">
          Interests
        </li>
        </Link>
        </div>
      </ul>
    )
}
export default MenuList