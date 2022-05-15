import React from "react";
import { useContext } from "react";
import { NavMenuContext } from "../../../context/nav-menu-context";
import { SiCodeigniter } from "react-icons/si";
import ModeBtn from "./ModeBtn";
import BurgerMenuBtn from "./BurgerMenuBtn";
import MenuList from "./MenuList";

import {Link} from "react-router-dom"

const Header = () => {
  const { menuOpen, mode, openMenu, closeMenu, changeMode } =
    useContext(NavMenuContext);
  console.log(menuOpen);


  return (
    <header className={`${mode==="dark"?"bg-dark-mode-header":"bg-white-mode-header"} sticky top-0 font-body`}>
      <nav className="  flex flex-col container mx-auto px-4 py-2">
        <div className="flex justify-between items-center pb-2">
        <Link to="/">
        <SiCodeigniter className="text-orange-600 text-3xl md:text-6xl"/>
        </Link>
          <div className="flex items-center pt-2">
           <ModeBtn/>
           <BurgerMenuBtn/>
          </div>
        </div>
        <MenuList/>
      </nav>
    </header>
  );
};
export default Header;
