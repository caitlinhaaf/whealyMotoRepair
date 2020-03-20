import React from "react"

import componentStyles from "./skillDescript.module.scss"

// NOTE: first child should be the SVG/icon component; second prop should be the text description
const SkillDescript = ({title, icon, descript, ...props}) => (
  <div className={componentStyles.skillSection}> 
      {props.children[0]}
      <h4>{title}</h4>
      {props.children[1]}
  </div>
)

export default SkillDescript
