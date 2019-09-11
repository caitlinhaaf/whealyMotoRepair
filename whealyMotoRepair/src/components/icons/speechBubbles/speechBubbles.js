import React from "react"

import componentStyles from "./speechBubbles.module.scss"

const SpeechBubbles = () => (
    <svg viewBox="0 0 600 600">

        <g id="bubbles">
            <path className={componentStyles.speechBubbles} d="M565.6,156.4c0-69.6-78.8-126-176-126s-176,56.4-176,126s78.8,126,176,126c14.6,0,28.7-1.3,42.3-3.7
                c0,0,15.2,39.5,88.2,39.5c-36.5-30-26.8-60-26.8-60l0,0C537,235.4,565.6,198.3,565.6,156.4z"/>
            <path className={componentStyles.speechBubbles} d="M30.7,410.1c0-69.6,78.8-126,176-126s176,56.4,176,126s-78.8,126-176,126c-14.6,0-28.7-1.3-42.3-3.7
                c0,0-15.2,39.5-88.2,39.5c36.5-30,26.8-60,26.8-60l0,0C59.3,489.1,30.7,452,30.7,410.1z"/>
        </g>
        <g id="dot1" className={componentStyles.dot}>
            <circle cx="139.3" cy="411.3" r="23.5"/>
        </g>
        <g id="dot2" className={componentStyles.dot}>
            <circle cx="205.4" cy="411.3" r="23.5"/>
        </g>
        <g id="dot3" className={componentStyles.dot}>
            <circle cx="271.5" cy="411.3" r="23.5"/>
        </g>
        <g id="dot4" className={componentStyles.dot}>
            <circle cx="324.7" cy="157" r="23.5"/>
        </g>
        <g id="dot5" className={componentStyles.dot}>
            <circle cx="390.8" cy="157" r="23.5"/>
        </g>
        <g id="dot6" className={componentStyles.dot}>
            <circle cx="456.9" cy="157" r="23.5"/>
        </g>
    </svg>

)

export default SpeechBubbles;