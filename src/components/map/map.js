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
                        formatted_address,
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
        <>
            <span style={{display: `block`, marginBottom: `.5rem`}}>
                {mapData.allLocationData.edges[0].node.results[0].formatted_address}
            </span>
            <div style={{position: `relative`, width: `100%`, height: `100%`}}>
                <Map
                google={props.google}
                zoom={16}
                mapTypeControl={false}
                streetViewControl={false}
                style={{width: `100%`, height: `100%`, minHeight: `300px`}}
                styles={mapStyles}
                initialCenter={{ lat: mapObj.lat, lng: mapObj.lng }}
                >
                    <Marker position={{ lat: mapObj.lat, lng: mapObj.lng }} />
                </Map>
            </div>
        </>
        
    )
}

export default GoogleApiWrapper({
    apiKey: `${process.env.GATSBY_WHEALY_MAPS_API_KEY}`
  })(GoogleMap);
