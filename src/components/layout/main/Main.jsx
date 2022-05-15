import React,{useContext} from "react";
import { NavMenuContext } from "../../../context/nav-menu-context";

const Main = ({children})=>{
    
    return(
        <main className=" py-8 container mx-auto px-4 font-body">
        {children}
        </main>
    )
}
export default Main