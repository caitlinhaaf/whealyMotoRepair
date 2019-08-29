import React from "react"

import Logo from "../logo/logo"

import componentStyles from "./navBar.module.scss"

const NavBar = () => (
    <nav className={componentStyles.navBar}>
        <div className={componentStyles.logo}>
             <Logo/>
        </div>
        

        <div className={componentStyles.links}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </div>
        
    </nav>
)

export default NavBar
