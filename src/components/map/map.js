import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import mapStyles from './mapStyles'

const GoogleMap = ({...props}) => {
    const mapData = useStaticQuery(graphql`
        query LocationQuery{
            allLocationData {
                edges {
                    node {
                    results {
                        geometry {
                        location {
                            lat
                            lng
                        }
                        }
                    }
                    }
                }
            }
        }
    `)
    const mapObj = mapData.allLocationData.edges[0].node.results[0].geometry.location
    
    return(
        <div style={{position: `relative`, width: `100%`, height: `100%`}}>
            <Map
            defaultOptions={{
                styles: mapStyles,
            }}
            google={props.google}
            zoom={16}
            style={{width: `100%`, height: `100%`, minHeight: `300px`}}
            initialCenter={{ lat: mapObj.lat, lng: mapObj.lng }}
            >
                <Marker position={{ lat: mapObj.lat, lng: mapObj.lng }} />
            </Map>
        </div>
        
    )
}

// export default GoogleMap
export default GoogleApiWrapper({
    apiKey: `${process.env.GATSBY_WHEALY_MAPS_API_KEY}`
  })(GoogleMap);
