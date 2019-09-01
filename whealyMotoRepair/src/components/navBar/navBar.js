import React from "react"

import Logo from "../logo/logo"

import componentStyles from "./navBar.module.scss"

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            logoVisible: false
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
      }

    handleScroll = () => {
        const scrollPos = window.scrollY;
        const windowHeight = window.innerHeight;

        // console.log("SCROLLING: ", scrollPos)
        if(scrollPos > windowHeight) this.setState({logoVisible: true})
        else this.setState({logoVisible: false})
    }

    render(){

        let classes = (this.state.logoVisible) ? `${componentStyles.logo} ${componentStyles.visible}` : `${componentStyles.logo}`;

        return(
            <nav className={componentStyles.navBar}>

                <div className={classes}>
                    <Logo/>
                </div>
                
                <div className={componentStyles.links}>
                    <a href="#about">ABOUT</a>
                    <a href="#services">SERVICES</a>
                    <a href="#contact">CONTACT</a>
                </div>
            </nav>
        )
    }
    
}

export default NavBar
