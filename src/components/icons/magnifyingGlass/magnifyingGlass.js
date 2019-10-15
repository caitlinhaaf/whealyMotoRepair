import React from "react"

import componentStyles from "./magnifyingGlass.module.scss"

const magnifyingGlassClasses = `${componentStyles.whiteOutline} ${componentStyles.magnifyingglass}`

const MagnifyingGlass = () => (
    <svg x="0px" y="0px" viewBox="0 0 600 600">

        <g id="magnifyingglass" className={magnifyingGlassClasses}>
            <path d="M376.3,48C276.7,48,196,128.7,196,228.3c0,42.6,14.8,81.8,39.5,112.6L50.7,525.7c-6.7,6.7-6.7,17.6,0,24.3v0
                c6.7,6.7,17.6,6.7,24.3,0l184.4-184.4c31.5,26.8,72.3,43,116.9,43c99.6,0,180.3-80.7,180.3-180.3S475.9,48,376.3,48z M376.3,377.9
                c-82.6,0-149.6-67-149.6-149.6s67-149.6,149.6-149.6s149.6,67,149.6,149.6S458.9,377.9,376.3,377.9z"/>
        </g>

        <g id="eye">
            <path className={componentStyles.iris} d="M376.3,146c-45.5,0-82.3,36.9-82.3,82.3c0,45.5,36.9,82.3,82.3,82.3s82.3-36.9,82.3-82.3
                C458.7,182.8,421.8,146,376.3,146z M376.3,269c-22.5,0-40.7-18.2-40.7-40.7c0-22.5,18.2-40.7,40.7-40.7s40.7,18.2,40.7,40.7
                C417,250.8,398.8,269,376.3,269z"/>
            <circle className={componentStyles.pupil} cx="376.3" cy="228.3" r="40.7"/>
        </g>

        {/* <g id="blinkLine">
            <line className={componentStyles.whiteOutline} x1="273.2" y1="228.3" x2="488.3" y2="228.3"/>
        </g> */}

    </svg>


)

export default MagnifyingGlass;