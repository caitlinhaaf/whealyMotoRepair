import React from "react"
// import { Helmet } from "react-helmet"
// import "../styles/global.scss"

import HeroHdr from "../components/herohdr/herohdr"
import GeometricSection from "../components/geometricSection/geometricSection"
import AlanImg from "../components/imageComponents/alan"

import SEO from "../components/seo"

const IndexPage = () => (
  <body>
    <SEO title="Home" />

    <HeroHdr/>

    <GeometricSection>
      <AlanImg />
      <section>
        <h2>About Us</h2>
      </section>
    </GeometricSection>

  </body>
)

export default IndexPage
