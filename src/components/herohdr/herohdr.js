// import PropTypes from "prop-types"
import React from "react"

import LogoSVG from "../logoSVG/logoSVG"

import componentStyles from "./herohdr.module.scss"

const Header = () => (
  <header className={componentStyles.header}>
    <div className={componentStyles.logo}>
      <LogoSVG />
    </div>
  </header>
)

export default Header
