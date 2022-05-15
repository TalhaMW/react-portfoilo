import React,{useContext} from "react";
import { NavMenuContext } from "../../../context/nav-menu-context";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { GiCrossMark } from "react-icons/gi";

const BurgerMenuBtn = ()=>{
    const {menuOpen,openMenu,closeMenu,mode} = useContext(NavMenuContext)

    const menuClickHandler = () => {
        if (menuOpen) {
          closeMenu();
        } else {
          openMenu();
        }
      };
    return(
        <>
            {menuOpen ? (
              <GiCrossMark className={`text-xl md:text-2xl cursor-pointer ${mode==="dark"?"text-gray-300":"text-gray-600"}`} onClick={menuClickHandler} />
            ) : (
              <BsMenuButtonWideFill className={`text-xl md:text-2xl cursor-pointer ${mode==="dark"?"text-gray-300":"text-gray-600"}`} onClick={menuClickHandler} />
            )}
        </>
    )
}
export default BurgerMenuBtn