import React from "react"
// import { Helmet } from "react-helmet"

import HeroHdr from "../components/herohdr/herohdr"
import GeometricSection from "../components/geometricSection/geometricSection"
import AlanImg from "../components/imageComponents/alan"
import SkillDescript from "../components/skillDescript/skillDescript"
import NavBar from "../components/navBar/navBar"

import SEO from "../components/seo"

const IndexPage = () => (
  <body>
    <SEO title="Home" />

    <NavBar />

    <HeroHdr/>

    <section className="bodySection">
      <AlanImg />

      <GeometricSection>
        <h2>About Us</h2>
        <p>
          Muffin biscuit sugar plum. Sweet sesame snaps jujubes carrot cake sweet roll. Halvah candy cake apple pie croissant wafer chocolate ice cream. Donut macaroon pudding dragée cookie marshmallow. Donut dragée muffin tootsie roll marzipan gingerbread. Marshmallow apple pie toffee chocolate bar tart brownie liquorice.
        </p>
      </GeometricSection>
    </section>


    <section className="bodySection fullWidth">
      <div>
        <h2>Services</h2>

        <SkillDescript title="Maintenance">
          <p>From oil changes to engine rebuilds, and anything in between. We've got you covered.</p>
        </SkillDescript>

        <SkillDescript title="Purchase Inspections">
          <p>Looking at buying your first bike, and not sure what you're looking for? Let us help you determine if the bike you're looking at is right for you.</p>
        </SkillDescript>

        <SkillDescript title="Consulting">
          <p>Are you hoping to rebuild your own bike, but aren't sure where to start? Run into an issue with your project you can't troubleshoot yourself?</p>
        </SkillDescript>

        <SkillDescript title="Parts Purchasing">
          <p>We are Toronto's only provider of SIP parts. Contact us to place an order.</p>
        </SkillDescript>

      </div>
        
    </section>

    <section className="bodySection fullWidth light">
      <h2>Contact Us</h2>
    </section>


    <footer>
      All content copyrighted Whealy Motorcycle Repair 2019.
    </footer>


  </body>
)

export default IndexPage
