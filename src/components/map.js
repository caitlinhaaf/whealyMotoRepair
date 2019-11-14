import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import componentStyles from "./button.module.scss"

const GoogleMap = () => {
    const mapsApiKey = process.env.GATSBY_WHEALY_MAPS_API_KEY;

    const mapData = useStaticQuery(graphql`
        query LocationQuery{
        locationData {
            id
        }
        }
    `)
    console.log(mapData)
    
    return(
        // <iframe
        //     // width="450"
        //     // height="250"
        //     // frameborder="0"
        //     src={`https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=Toronto+Ontario`}
        //     >
        //       {/* place id: ChIJL0h-T2k0K4gRBdkSm_EiC7Y */}
        //   </iframe>
        <h3>Testing....</h3>
    )
}

export default GoogleMap
