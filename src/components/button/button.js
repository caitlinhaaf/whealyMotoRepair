import React from "react"

import componentStyles from "./button.module.scss"

const Button = ({btnStyle, link, clickEvt, ...props}) => {
    const buttonClass = (btnStyle==="outline") ? componentStyles.outline : componentStyles.solid;
    return(
        <>
            {(link) ? (
                <a 
                className={`${componentStyles.default} ${buttonClass}`}
                href={link}
                target="_blank"
                rel="noopener noreferrer">
                    {props.children}
                </a>
            ):(
                <button className={`${componentStyles.default} ${buttonClass}`}>
                    {props.children}
                </button>
            )}
        </>   
    )
}

export default Button
