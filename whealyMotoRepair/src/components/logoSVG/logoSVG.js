import React from "react"

import componentStyles from "./logoSVG.module.scss"

// xmlns:xlink="http://www.w3.org/1999/xlink" 
// xml:space="preserve"


const LogoSVG = () => (
  <div>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 180 180">

    <ellipse id="whitecircle" className={componentStyles.whitePortion} cx="90" cy="90" rx="88.5" ry="88.5"/>
    <path id="blackhalfcircle" className={componentStyles.blackPortion} d="M90,172.6c39.6,0,72.6-27.8,80.7-64.9H9.3C17.4,144.8,50.4,172.6,90,172.6z"/>
    <path id="redhalfcircle" className={componentStyles.redPortion} d="M90,7.4c-39.6,0-72.6,27.8-80.7,64.9h161.5C162.6,35.2,129.6,7.4,90,7.4z"/>

    <g id="moto_x5F_txt">
        <path d="M8.6,82.8h3.5l3.9,6.2l3.9-6.2h3.5v14.7H20v-9.6l-4.1,6.2h-0.1l-4.1-6.2v9.5H8.6V82.8z" className={componentStyles.blackTxt}/>
        <path d="M27.7,90.2L27.7,90.2c0-4.2,3.3-7.6,7.8-7.6s7.8,3.4,7.8,7.5v0c0,4.2-3.3,7.6-7.8,7.6C30.9,97.7,27.7,94.3,27.7,90.2z
            M39.9,90.2L39.9,90.2c0-2.6-1.8-4.6-4.4-4.6c-2.6,0-4.4,2.1-4.4,4.6v0c0,2.5,1.8,4.6,4.4,4.6C38.1,94.7,39.9,92.7,39.9,90.2z" className={componentStyles.blackTxt}/>
        <path d="M50.5,85.8H46v-3h12.1v3h-4.5v11.7h-3.2V85.8z" className={componentStyles.blackTxt}/>
        <path d="M60.9,90.2L60.9,90.2c0-4.2,3.3-7.6,7.8-7.6c4.5,0,7.8,3.4,7.8,7.5v0c0,4.2-3.3,7.6-7.8,7.6C64.2,97.7,60.9,94.3,60.9,90.2
            z M73.1,90.2L73.1,90.2c0-2.6-1.8-4.6-4.4-4.6c-2.6,0-4.4,2.1-4.4,4.6v0c0,2.5,1.8,4.6,4.4,4.6C71.3,94.7,73.1,92.7,73.1,90.2z" className={componentStyles.blackTxt}/>
        <path d="M80.9,82.8h6.7c1.9,0,3.3,0.5,4.3,1.5c0.8,0.8,1.3,2,1.3,3.3v0c0,2.4-1.3,3.8-3.1,4.5l3.6,5.2h-3.8l-3.1-4.7h-0.1h-2.5v4.7
            h-3.2L80.9,82.8L80.9,82.8z M87.4,89.9c1.6,0,2.5-0.8,2.5-2.1v0c0-1.4-1-2.1-2.5-2.1h-3.2v4.2C84.1,89.9,87.4,89.9,87.4,89.9z" className={componentStyles.blackTxt}/>
        <path d="M97,90.2L97,90.2c0-4.2,3.1-7.6,7.6-7.6c2.8,0,4.4,0.9,5.8,2.3l-2.1,2.4c-1.1-1-2.3-1.7-3.7-1.7c-2.5,0-4.2,2.1-4.2,4.6v0
            c0,2.5,1.7,4.6,4.2,4.6c1.7,0,2.7-0.7,3.8-1.7l2.1,2.1c-1.5,1.6-3.2,2.6-6,2.6C100.2,97.7,97,94.4,97,90.2z" className={componentStyles.blackTxt}/>
        <path d="M118.5,91.7l-5.6-8.9h3.8l3.5,5.9l3.6-5.9h3.7l-5.6,8.8v5.8h-3.2L118.5,91.7L118.5,91.7z" className={componentStyles.blackTxt}/>
        <path d="M129.1,90.2L129.1,90.2c0-4.2,3.1-7.6,7.6-7.6c2.8,0,4.4,0.9,5.8,2.3l-2.1,2.4c-1.1-1-2.3-1.7-3.8-1.7
            c-2.5,0-4.2,2.1-4.2,4.6v0c0,2.5,1.7,4.6,4.2,4.6c1.7,0,2.7-0.7,3.9-1.7l2.1,2.1c-1.5,1.6-3.2,2.6-6,2.6
            C132.2,97.7,129.1,94.4,129.1,90.2z" className={componentStyles.blackTxt}/>
        <path d="M146.7,82.8h3.2v11.7h7.3v2.9h-10.5L146.7,82.8L146.7,82.8z" className={componentStyles.blackTxt}/>
        <path d="M161.2,82.8h11v2.9h-7.8v3h6.9v2.9h-6.9v3.1h7.9v2.9h-11.1V82.8z" className={componentStyles.blackTxt}/>
    </g>

    <g id="whealy_x5F_txt">
        <path className={componentStyles.whiteTxt} d="M84.2,58.2V40.1h8.9v-4.3h-8.9l0-15c1.6-0.2,4.6-0.4,8.9-0.2v-4.2c-1.2-0.1-2.3-0.1-3.5-0.1
            c-3.2,0-6.5,0.2-9.6,0.7v45.4h13v-4.3C93.1,58.2,84.2,58.2,84.2,58.2z"/>
        <path className={componentStyles.whiteTxt} d="M132.3,58.2h-8.1V24.2c-1.4-0.7-2.9-1.4-4.3-2v40.3h12.3V58.2z"/>
        <path className={componentStyles.whiteTxt} d="M48.7,28.1V53L43,32.6c-0.2,0.2-6.2,21.2-6.2,21.2V38.3c-1.5,1.6-2.8,3.2-4.2,4.9v19.3h4.9l5.1-16.4l4.8,16.4
            h5.5V25.4C51.5,26.3,50.1,27.1,48.7,28.1z"/>
        <path className={componentStyles.whiteTxt} d="M63.2,62.5v-18h7v18h4.2V17.8c-1.4,0.3-2.8,0.6-4.2,1v21.3h-7V21.2c-1.4,0.6-2.8,1.2-4.2,1.9v39.4
            C59,62.5,63.2,62.5,63.2,62.5z"/>
        <path className={componentStyles.whiteTxt} d="M98.4,16.8v45.7h4.2v-18h8v18.1h4.2V20.7C109.5,18.7,104,17.4,98.4,16.8z M102.6,40.2V21.7c1.9,0.4,4.8,1,8,2
            v16.5L102.6,40.2L102.6,40.2z"/>
        <path className={componentStyles.whiteTxt} d="M136.5,62.5h4.2v-11l4.1-11.7c-1.1-1.2-2.2-2.4-3.3-3.5l-2.9,7.7l-5.1-14.4c-1.8-1.3-3.6-2.5-5.5-3.7l8.5,25.4
            L136.5,62.5L136.5,62.5z"/>
    </g>

    <g id="repair_x5F_txt">
        <path className={componentStyles.whiteTxt} d="M48.9,128.6v-11.8H32.7v20.5c1.3,1.6,2.7,3.2,4.2,4.7v-9.2l0,0.1l3.8-1.4l3.6,17.2c1.6,1.3,3.3,2.5,5,3.6
            l-4.7-22.3L48.9,128.6z M44.7,125.7l-7.8,2.9v-7.7h7.8V125.7z"/>
        <path className={componentStyles.whiteTxt} d="M122.7,157v-40.3h-4.2v42.2C119.9,158.3,121.3,157.7,122.7,157z"/>
        <path className={componentStyles.whiteTxt} d="M67.3,156.8c-4.1-1.2-7-2.8-8.5-3.6v-13.7h8.5v-4.2h-8.5v-14.4h8.5v-4.2H54.7v38.7l0.9,0.6
            c3.8,2,7.7,3.7,11.7,5V156.8z"/>
        <path className={componentStyles.whiteTxt} d="M98.6,164.2v-20.6h10.3v18.6c1.4-0.4,2.8-0.8,4.2-1.2v-44.2H94.4v47.9C95.8,164.5,97.2,164.4,98.6,164.2z
            M98.6,120.9h10.3v18.5H98.6V120.9z"/>
        <path className={componentStyles.whiteTxt} d="M132.8,150.8v-17.1l0,0.1l3.1-1.1l4.5,11.8c1.1-1.1,2.2-2.1,3.2-3.2l-3.9-10l4.9-1.8v-12.8h-16.1v36.9
            C130.1,152.8,131.5,151.8,132.8,150.8z M132.8,120.9h7.8v5.7l-7.8,2.8V120.9z"/>
        <path className={componentStyles.whiteTxt} d="M76.3,163.4v-19.8H89v-26.9H76.3h-4.2v45.8C73.5,162.8,74.8,163.1,76.3,163.4z M76.3,120.9h8.6v18.5h-8.6
            C76.3,139.4,76.3,120.9,76.3,120.9z"/>
    </g>

    </svg>

  </div>
)

export default LogoSVG