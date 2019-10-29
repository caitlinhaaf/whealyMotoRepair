import React from "react"

import componentStyles from "./overlapColumn.module.scss"

const OverlapColumn = ({title, titleAlignment, ...props}) => {
    const titleAlignmentClass = (titleAlignment==="right") ? componentStyles.right : componentStyles.left;

    return(
        <div className={componentStyles.columnContainer}> 
            <h4 className={`${componentStyles.overlapHeader} ${titleAlignmentClass}`}>
                {title}
            </h4>
            {props.children}
        </div>
    )
  
}

export default OverlapColumn
