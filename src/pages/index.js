import React from "react"

import HeroHdr from "../components/herohdr/herohdr"
import AlanImg from "../components/imageComponents/alan"
import VespaImg from "../components/imageComponents/benelliTopView"
import SkillDescript from "../components/skillDescript/skillDescript"
import NavBar from "../components/navBar/navBar"
import OverlapColumn from "../components/overlapColumn/overlapColumn"
import OverlapRow from "../components/overlapRow/overlapRow"
import Button from "../components/button/button"
import GoogleMap from "../components/map/map"

import OilCan from '../components/icons/oilCan/oilCan'
import MagnifyingGlass from '../components/icons/magnifyingGlass/magnifyingGlass'
import SpeechBubbles from '../components/icons/speechBubbles/speechBubbles'
import SparkPlug from '../components/icons/sparkPlug/sparkPlug'
import InstagramIcon from "../components/icons/instagramIcon/instagramIcon"
import EnvelopeIcon from "../components/icons/envelope/envelope"

import SEO from "../components/seo"

const IndexPage = () => {

  return(
    <>
      <SEO title="Home" />

      <NavBar />

      <HeroHdr/>

      <section id="about" className="bodySection twoCol">
        <AlanImg />
        <OverlapColumn title="ABOUT" titleAlignment="left">
          <p>
            Alan Whealy is a red seal certified automotive and power sports tech who has been working as a mechanic for over a decade. He has worked on everything from vintage Italian cars, to modern motorcylces, to classic Vespas. 
            <br/><br/>
            Alan specializes in all things vintage. He loves breathing new life into older bikes, and 
          </p>
        </OverlapColumn>
      </section>


      <OverlapRow id="services" title="SERVICES" titleAlignment="left">
        <div>

          <div className="skillsSection fourCol spacing" style={{paddingTop: `4vw`}}>
            <SkillDescript title="Maintenance">
              <OilCan />
              <p>From oil changes to engine rebuilds, and anything in between. We've got you covered.</p>
            </SkillDescript>

            <SkillDescript title="Inspections">
              <MagnifyingGlass />
              <p>Not sure what to look for when purchasing a second hand vehicle? Bring in an expert to make sure you're making a sound purchase.</p>
            </SkillDescript>

            <SkillDescript title="Consulting">
              <SpeechBubbles />
              <p>Looking for help with your rebuild? Is your passion project languishing in the garage? We're here to help.</p>
            </SkillDescript>

            <SkillDescript title="Parts Purchasing">
              <SparkPlug />
              <p>We are Toronto's only provider of <a href="https://www.sip-scootershop.com/en/main/base/home.aspx" target="_blank" rel="noopener noreferrer">S.I.P. Scootershop parts</a>. Contact us to place an order.</p>
            </SkillDescript>
          </div>
          
        </div>
      </OverlapRow>

      <section id="contact" className="bodySection threeCol">

        <div className="colspan-two">
          <OverlapColumn title="CONTACT" titleAlignment="left">
          <p style={{marginBottom: `2rem`}}>
            Work is done by appointment only - we are not accepting drop-ins at this time. 
            <br/><br/>
            If you are looking to book a service appointment, please include the model and year of your vehicle, and a description of the issue or modification you would like to address. Please allow 24 hours for a response.
          </p>

          <Button btnStyle="outline" link="https://www.instagram.com/whealymotorcyclerepair/">
            <EnvelopeIcon /> 
            <span>Send An Email</span>
          </Button>

          <Button btnStyle="outline" link="https://www.instagram.com/whealymotorcyclerepair/">
            <InstagramIcon /> 
            <span>Follow On Instagram</span>
          </Button>
        
        </OverlapColumn>
        </div>

        <VespaImg />

      </section>

      <section className="bodySection twoCol">
        <div className="bodyColumn">
          <h2>Hours of Operation <span style={{fontSize: `1.2rem`, fontWeight: `400`}}>Summer 2020</span></h2>
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

        <div className="bodyColumn">
          <h2>Location</h2>
          <GoogleMap/>
        </div>

      </section>

      <footer>
        All content copyright Whealy Motorcycle Repair {new Date().getFullYear()}.
      </footer>
    </>
  )
}

export default IndexPage


