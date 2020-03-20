import React from "react"

import componentStyles from "./overlapColumn.module.scss"

const OverlapColumn = ({title, titleAlignment, ...props}) => {
    const titleAlignmentClass = (titleAlignment==="right") ? componentStyles.right : componentStyles.left;

    return(
        <div className={componentStyles.columnContainer}> 
            <h2 className={`${componentStyles.overlapHeader} ${titleAlignmentClass}`}>
                {title}
            </h2>
            {props.children}
        </div>
    )
  
}

export default OverlapColumn
