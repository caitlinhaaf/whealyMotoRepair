import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import mapStyles from './mapStyles'
import componentStyles from './map.module.scss'

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
        <div class={componentStyles.mapContainer}>
            <span class={componentStyles.link}>
                <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`http://www.google.com/maps/place/${mapObj.lat},${mapObj.lng}`}>
                    {mapData.allLocationData.edges[0].node.results[0].formatted_address}
                </a>
            </span>
            <div style={{position: `relative`, width: `100%`, height: `100%`}}>
                <Map
                google={props.google}
                zoom={15}
                mapTypeControl={false}
                streetViewControl={false}
                style={{width: `100%`, height: `100%`, minHeight: `250px`}}
                styles={mapStyles}
                initialCenter={{ lat: mapObj.lat, lng: mapObj.lng }}
                >
                    <Marker position={{ lat: mapObj.lat, lng: mapObj.lng }} />
                </Map>
            </div>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: `${process.env.GATSBY_WHEALY_MAPS_API_KEY}`
  })(GoogleMap);
