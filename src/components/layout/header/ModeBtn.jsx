import React, { useContext } from "react";
import { NavMenuContext } from "../../../context/nav-menu-context";
import { RiMoonClearFill } from "react-icons/ri";
import { FaSun } from "react-icons/fa";

const ModeBtn = () => {
  const { mode, changeMode } = useContext(NavMenuContext);

  if(mode==="dark"){
    return <FaSun className="text-2xl mr-8 text-gray-300 md:text-4xl" onClick={()=>changeMode("white")}/>
  }else{
    return <RiMoonClearFill className="text-2xl mr-8 text-gray-600 md:text-4xl" onClick={()=>changeMode("dark")}/>
  }
};
export default ModeBtn