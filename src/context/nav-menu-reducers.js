
const NavMenuReducer = (state,action)=>{
    switch(action.type){
        case "OPEN_MENU":
            return {...state,menuOpen:true}
        case "CLOSE_MENU":
            return {...state,menuOpen:false}
        case "CHANGE_MODE":
            return {...state,mode:action.payload}
        default:
            return state
    }
}

export default NavMenuReducer