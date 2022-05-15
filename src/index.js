import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import {NavMenuProvider} from "./context/nav-menu-context"
import {BrowserRouter} from "react-router-dom"
ReactDOM.render(
    <NavMenuProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </NavMenuProvider>,document.querySelector("#root")
)