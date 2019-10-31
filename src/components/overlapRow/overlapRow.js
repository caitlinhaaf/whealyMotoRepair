import React from "react"

import componentStyles from "./overlapRow.module.scss"

const OverlapRow = ({title, titleAlignment, ...props}) => {
    const titleAlignmentClass = (titleAlignment==="right") ? componentStyles.right : componentStyles.left;

    return(
        <div className={`bodySection fullWidth orange ${componentStyles.rowContainer}`}> 
            <h4 className={`${componentStyles.overlapHeader} ${titleAlignmentClass}`}>
                {title}
            </h4>
            {props.children}
        </div>
    )
  
}

export default OverlapRow
