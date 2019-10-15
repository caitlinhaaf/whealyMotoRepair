import React from "react"

import componentStyles from "./geometricSection.module.scss"

const GeometricSection = props => (
  <section className={componentStyles.geoBody}>

    <div className={componentStyles.redGeoElement}></div>
    <div className={componentStyles.greyGeoElement}></div>
    <div className={componentStyles.whiteGeoElement}></div>

    <div className={componentStyles.contents}>
      {props.children}
    </div>

    
    
  </section>
)

export default GeometricSection
