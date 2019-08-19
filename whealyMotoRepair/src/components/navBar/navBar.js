import React from "react"

import componentStyles from "./navBar.module.scss"

const NavBar = () => (
    <nav className={componentStyles.navBar}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </nav>
)

export default NavBar
