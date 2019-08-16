import React from "react"
// import Logo from "../logo/logo"

import componentStyles from "./geometricSection.module.scss"

const GeometricSection = props => (
  <section className="bodySection">
    {props.children}
  </section>
)

export default GeometricSection
