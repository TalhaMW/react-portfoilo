import { createContext } from "react";
import { useReducer } from "react";
import NavMenuReducer from "./nav-menu-reducers";

export const NavMenuContext = createContext()

export const NavMenuProvider = ({children})=>{
    const initialState = {
        menuOpen:false,
        mode:"dark",
    }
    const [state,dispatch] = useReducer(NavMenuReducer,initialState)
    const openMenu = ()=>dispatch({type:"OPEN_MENU"})
    const closeMenu = ()=>dispatch({type:"CLOSE_MENU"})
    const changeMode = (mode)=>dispatch({type:"CHANGE_MODE",payload:mode})
    return(
        <NavMenuContext.Provider value={{
            menuOpen:state.menuOpen,
            mode:state.mode,
            openMenu,
            closeMenu,
            changeMode
        }}>
            {children}
        </NavMenuContext.Provider>
    )

}