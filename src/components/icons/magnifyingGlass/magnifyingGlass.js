import React from "react"

import componentStyles from "./magnifyingGlass.module.scss"

const MagnifyingGlass = () => (
    <svg version="1.1" x="0px" y="0px"
	 viewBox="0 0 600 600" style={{enableBackground: `new 0 0 600 600`}}>
        <g id="magnifyinglgass">
            <path className={componentStyles.magnifyingglass} d="M384.6,20.1c-110.53,0-200.14,89.61-200.14,200.14c0,47.29,16.41,90.74,43.84,124.99L23.21,550.32
                c-7.42,7.42-7.42,19.56,0,26.98v0c7.42,7.42,19.56,7.42,26.98,0l204.67-204.67c34.94,29.77,80.23,47.75,129.74,47.75
                c110.53,0,200.14-89.61,200.14-200.14S495.13,20.1,384.6,20.1z M384.6,386.28c-91.7,0-166.04-74.34-166.04-166.04
                S292.9,54.21,384.6,54.21s166.04,74.34,166.04,166.04S476.3,386.28,384.6,386.28z"/>
        </g>

        <g id="bolt" className={componentStyles.boltContainer}>
            <path className={componentStyles.bolt} d="M352.26,188.25v19.11v35.49v45.04c0,10.56,4.92,19.11,10.99,19.11h41.71c6.07,0,10.99-8.56,10.99-19.11v-45.04
                v-35.49v-19.11H352.26z"/>
            <line className={componentStyles.bolt} x1="352.26" y1="232.93" x2="415.95" y2="232.93"/>
            <line className={componentStyles.bolt} x1="352.26" y1="256.78" x2="415.95" y2="256.78"/>
            <line className={componentStyles.bolt} x1="352.26" y1="280.63" x2="415.95" y2="280.63"/>
            <path className={componentStyles.bolt} d="M391.08,138.27v18.79h-14.09v-18.79c-31.93,2.74-56.77,23.89-56.77,49.59h127.64
                C447.85,162.17,423.01,141.02,391.08,138.27z"/>
        </g>
    </svg>

)

export default MagnifyingGlass;