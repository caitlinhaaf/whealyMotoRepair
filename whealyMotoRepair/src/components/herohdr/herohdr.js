// import PropTypes from "prop-types"
import React from "react"
import Logo from "../logo/logo"

import componentStyles from "./herohdr.module.scss"

// const Header = ({ siteTitle }) => (
const Header = () => (
  <header className={componentStyles.header}>
    <div className={componentStyles.logo}>
      <Logo/>
    </div>
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
