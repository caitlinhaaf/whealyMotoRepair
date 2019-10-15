import React from "react"

import LogoSVG from "../components/logoSVG/logoSVG"

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

    <p style={{
        textAlign: `center`,
        color: `white`}}>
        By appointment only
        <br/>
        <a 
        href="mailto:" 
        style={{color: `white`}}
        >
            alan@whealyrepair.com
        </a>
    </p>

    <footer>
      Copyright Whealy Motorcycle Repair {new Date().getFullYear()}.
    </footer>

  </body>
)

export default IndexPage
