// import PropTypes from "prop-types"
import React from "react"

import LogoSVG from "../logoSVG/logoSVG"

import componentStyles from "./herohdr.module.scss"

const Header = () => (
  <header className={componentStyles.header}>
    <div className={componentStyles.logo}>
      <LogoSVG />
      <h1 style={{height: `0px`, overflow: `hidden`}}>Whealy Motorcycle Repair</h1>
    </div>
  </header>
)

export default Header
