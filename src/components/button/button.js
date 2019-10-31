import React from "react"

import componentStyles from "./button.module.scss"

const Button = ({btnStyle, link, clickEvt, ...props}) => {
    const buttonClass = (btnStyle==="outline") ? componentStyles.outline : componentStyles.solid;

    return(
        <button className={`${componentStyles.default} ${buttonClass}`}>
            {props.children}
        </button>
    )
}

export default Button
