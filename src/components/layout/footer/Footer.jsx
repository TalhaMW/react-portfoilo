import React, { useContext } from "react";
import { NavMenuContext } from "../../../context/nav-menu-context";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

const Footer = () => {
  const { mode } = useContext(NavMenuContext);
  const year = new Date().getFullYear()
  return (
    <footer className=" py-8 font-body">
      <div className="container mx-auto px-4 text-center">
        <div className="text-gray-500 font-semibold text-md sm:text-lg">
          copyright &copy; {year} , All Rights Reserved
        </div>
        <div className="py-2">
          <span className="text-gray-500 font-semibold text-sm md:text-lg">
            Created with
          </span>
          <RiReactjsLine className="inline-block text-blue-600 text-xl ml-1" />{" "}
          <SiTailwindcss className="inline-block text-black text-xl mr-1" />{" "}
          <span className="text-gray-500 font-semibold text-md sm:text-lg">
            by Talha Muneer
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
