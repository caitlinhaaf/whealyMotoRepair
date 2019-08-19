import React from "react"

// import componentStyles from "./skillDescript.module.scss"

const SkillDescript = ({title, icon, descript, ...props}) => (

  <div>
      
      <h4>{title}</h4>
      {props.children}
  </div>
)

export default SkillDescript
