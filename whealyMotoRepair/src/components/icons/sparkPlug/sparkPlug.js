import React from 'react'

import componentStyles from './sparkPlug.module.scss'

const SparkPlug = () => (
    <svg version="1.1" x="0px" y="0px"
	 viewBox="0 0 600 600">

        <g id="sparkplug">
            <path className={componentStyles.solid} d="M369.6,311.2h-138c-7,0-12.7-5.7-12.7-12.7v-34.6c0-7,5.7-12.7,12.7-12.7h138c7,0,12.7,5.7,12.7,12.7v34.6
                C382.3,305.5,376.6,311.2,369.6,311.2z"/>
            <path className={componentStyles.solid} d="M364.7,311.2H236.5v12.2l0,0v3.1v11.5c0,8.5,6.9,15.4,15.4,15.4h97.4c8.5,0,15.4-6.9,15.4-15.4v-11.5v-3.1l0,0
                V311.2z"/>
            <path className={componentStyles.solid} d="M251.8,353.5v16.9v31.3v39.7c0,9.3,7.5,16.9,16.9,16.9h64c9.3,0,16.9-7.5,16.9-16.9v-39.7v-31.3v-16.9H251.8z"
                />
            <path className={componentStyles.outline} d="M271.4,460.6c0,0-2.4,20.4,12.8,20.4s24.8,0,24.8,0"/>
            <path d="M302.1,466.3h-3c-2.5,0-4.5-2-4.5-4.5v-0.6c0-2.5,2-4.5,4.5-4.5h3c2.5,0,4.5,2,4.5,4.5v0.6
                C306.6,464.3,304.6,466.3,302.1,466.3z"/>
            <path className={componentStyles.solid} d="M345.3,80.7c-2.9-14.7-16.4-25.8-32-25.8h-25.5c-15.5,0-29.1,11.1-32,25.8l0,0v6.2v106.5v57.8h89.4v-57.8V86.9
                V80.7L345.3,80.7z"/>
            <path className={componentStyles.solid} d="M303.5,27.5h-5.7c-3.8,0-6.9,3.1-6.9,6.9V39v8.3v7.5h19.5v-7.5V39v-4.6C310.4,30.5,307.3,27.5,303.5,27.5z"/>
            <line className={componentStyles.solid} x1="251.8" y1="380.3" x2="349.4" y2="380.3"/>
            <line className={componentStyles.solid} x1="251.8" y1="405.4" x2="349.4" y2="405.4"/>
            <line className={componentStyles.solid} x1="251.8" y1="430.5" x2="349.4" y2="430.5"/>
            <path className={componentStyles.solid} d="M345.2,117.3h-90.6c-4.7,0-8.5-3.8-8.5-8.5v-0.4c0-4.7,3.8-8.5,8.5-8.5h90.6c4.7,0,8.5,3.8,8.5,8.5v0.4
                C353.8,113.4,350,117.3,345.2,117.3z"/>
            <path className={componentStyles.solid} d="M345.2,134.8h-90.6c-4.7,0-8.5-3.8-8.5-8.5v-0.4c0-4.7,3.8-8.5,8.5-8.5h90.6c4.7,0,8.5,3.8,8.5,8.5v0.4
                C353.8,131,350,134.8,345.2,134.8z"/>
            <path className={componentStyles.solid} d="M345.2,152.4h-90.6c-4.7,0-8.5-3.8-8.5-8.5v-0.4c0-4.7,3.8-8.5,8.5-8.5h90.6c4.7,0,8.5,3.8,8.5,8.5v0.4
                C353.8,148.5,350,152.4,345.2,152.4z"/>
            <path className={componentStyles.solid} d="M345.2,169.9h-90.6c-4.7,0-8.5-3.8-8.5-8.5v-0.4c0-4.7,3.8-8.5,8.5-8.5h90.6c4.7,0,8.5,3.8,8.5,8.5v0.4
                C353.8,166.1,350,169.9,345.2,169.9z"/>
            <path className={componentStyles.solid} d="M345.2,187.5h-90.6c-4.7,0-8.5-3.8-8.5-8.5v-0.4c0-4.7,3.8-8.5,8.5-8.5h90.6c4.7,0,8.5,3.8,8.5,8.5v0.4
                C353.8,183.6,350,187.5,345.2,187.5z"/>
        </g>

        <g id="electricity">
            <polyline className={`${componentStyles.solid} ${componentStyles.electricity}`} points="292.5,571.6 292.9,536.4 307,550.3 307,514.4 	"/>
            <polyline className={`${componentStyles.solid} ${componentStyles.electricity}`} points="385.2,545.8 374.8,511.3 363.4,531.5 353.2,496.1 	"/>
            <polyline className={`${componentStyles.solid} ${componentStyles.electricity}`} points="214.3,546.5 225.5,513.1 234.7,530.6 245.7,496.5 	"/>
        </g>

    </svg>

)

export default SparkPlug;