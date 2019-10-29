import React from "react"
// import { Helmet } from "react-helmet"

import HeroHdr from "../components/herohdr/herohdr"
import AlanImg from "../components/imageComponents/alan"
import VespaImg from "../components/imageComponents/vespaTopView"
import SkillDescript from "../components/skillDescript/skillDescript"
import NavBar from "../components/navBar/navBar"
import OverlapColumn from "../components/overlapColumn/overlapColumn"
import Button from "../components/button/button"

import OilCan from '../components/icons/oilCan/oilCan'
import MagnifyingGlass from '../components/icons/magnifyingGlass/magnifyingGlass'
import SpeechBubbles from '../components/icons/speechBubbles/speechBubbles'
import SparkPlug from '../components/icons/sparkPlug/sparkPlug'
import InstagramIcon from "../components/icons/instagramIcon/instagramIcon"
import EnvelopeIcon from "../components/icons/envelope/envelope"

import SEO from "../components/seo"

const IndexPage = () => (
  <body>
    <SEO title="Home" />

    <NavBar />

    <HeroHdr/>

    <section id="about" className="bodySection twoCol">
      <AlanImg />

      <OverlapColumn title="ABOUT" titleAlignment="left">
        <p>
          Alan is a red seal certified automotive and power sports tech who has been working on motorcycles and scooters for the past seven years. 
          <br/>
          His speciality is all things vintage.
        </p>
      </OverlapColumn>

    </section>


    <section id="services" className="bodySection fullWidth orange">
      <div>
        {/* <h2>SERVICES</h2> */}

        <div className="skillsSection">
          <SkillDescript title="Maintenance">
            <OilCan />
            <p>From oil changes to engine rebuilds, and anything in between. We've got you covered.</p>
          </SkillDescript>

          {/* <SkillDescript title="Purchase Inspections"> */}
          <SkillDescript title="Inspections">
            <MagnifyingGlass />
            <p>Looking at buying your first bike, and not sure what you're looking for? Let us help you determine if the bike you're looking at is right for you.</p>
          </SkillDescript>

          <SkillDescript title="Consulting">
            <SpeechBubbles />
            <p>Are you hoping to rebuild your own bike, but aren't sure where to start? Run into an issue with your project you can't troubleshoot yourself?</p>
          </SkillDescript>

          <SkillDescript title="Parts Purchasing">
            <SparkPlug />
            <p>We are Toronto's only provider of SIP parts. Contact us to place an order.</p>
          </SkillDescript>
        </div>
        
      </div>
        
    </section>


    <section id="contact" className="bodySection twoCol">
      <OverlapColumn title="CONTACT" titleAlignment="right">
        <p style={{marginBottom: `2rem`}}>
          Work is done by appointment only - we are not accepting drop-ins at this time. 
          <br/><br/>
          If you are looking to book a service appointment, please include the model and year of your vehicle, and a description of the issue or modification you would like to address. Please allow 24 hours for a response.
        </p>

        <a 
          href="https://www.instagram.com/whealymotorcyclerepair/"
          target="_blank"
          rel="noopener noreferrer">
          <Button btnStyle="solid">
            <EnvelopeIcon /> 
            <span>Send Email</span>
          </Button>
        </a>

        <a 
          href="https://www.instagram.com/whealymotorcyclerepair/"
          target="_blank"
          rel="noopener noreferrer">
          <Button btnStyle="outline">
            <InstagramIcon fill="#ed1c24"/> 
            <span>Follow Instagram</span>
          </Button>
        </a>
      

      </OverlapColumn>

      <VespaImg />

    </section>

    <section id="services" className="bodySection fullWidth">
      <div>
        <h4>Hours of Operation</h4>
          <table>
            <tbody>
              <tr><td>Sunday</td><td>Closed</td></tr>
              <tr><td>Monday</td><td>Closed</td></tr>
              <tr><td>Tuesday</td><td>10:00 - 6:00</td></tr>
              <tr><td>Wednesday</td><td>10:00 - 6:00</td></tr>
              <tr><td>Thursday</td><td>10:00 - 6:00</td></tr>
              <tr><td>Friday</td><td>10:00 - 6:00</td></tr>
              <tr><td>Saturday</td><td>10:00 - 6:00</td></tr>
            </tbody>
          </table>
      </div>
        

    </section>


    <footer>
      All content copyright Whealy Motorcycle Repair {new Date().getFullYear()}.
    </footer>


  </body>
)

export default IndexPage
