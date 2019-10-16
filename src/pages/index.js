import React from "react"

import LogoSVG from "../components/logoSVG/logoSVG"
import InstagramIcon from "../components/icons/instagramIcon/instagramIcon"
import EnvelopeIcon from "../components/icons/envelope/envelope"
import SEO from "../components/seo"

const IndexPage = () => (
  <body>
    <SEO title="Coming Soon" />

    <div style={{
        width: `80%`, 
        maxWidth: `400px`,
        margin: `2rem auto`}}>
        <LogoSVG />
    </div>

    <h1 style={{
        color: `white`,
        textAlign: `center`,
        fontSize: `3rem`
        }}>
        COMING SOON
    </h1>

    <h4 style={{
        textAlign: `center`,
        color: `white`,
        fontSize: `1.5rem`}}>
        By appointment only
    </h4>

    <div style={{
        width: `12rem`,
        margin: `1rem auto 0 auto`,
        textAlign: `center`,
        display: `flex`,
        }}>
      <div style={{width: `2rem`}}>
        <EnvelopeIcon />
      </div>
      
      <div>
        <a 
          style={{color: `white`}}
          href="mailto:alan@whealyrepair.com">
            alan@whealyrepair.com
        </a>
      </div>
      
    </div>

    <div style={{
        width: `12rem`,
        margin: `.5rem auto 0 auto`,
        textAlign: `center`,
        display: `flex`,
        }}>
      <div style={{width: `2rem`}}>
        <InstagramIcon/> 
      </div>
      
      <div>
        <a 
          style={{color: `white`}}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/whealymotorcyclerepair/">
            @whealymotorcyclerepair
        </a>
      </div>
      
    </div>


    <footer>
      Copyright Whealy Motorcycle Repair {new Date().getFullYear()}.
    </footer>

  </body>
)

export default IndexPage
