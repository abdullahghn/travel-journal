import React from "react"
import iconLocation from '../src/assets/icon-location.png'

export default function Location(props) {
    return (
        <div className="locations">
            <div className="location-image"><img src={'./'+props.item.image} /></div>
            <div className="location-text">
                <div className="location-name">
                    <span><img src={iconLocation} /></span>
                    <span className="location-place">{props.item.country}</span>
                    <span className="location-map-link">View on Google Maps</span>
                </div>
                <h2 className="location-title">{props.item.location}</h2>
                <div className="location-date">{props.item.tour.starting_date} - {props.item.tour.ending_date}</div>
                <div className="location-description">{props.item.description}</div>
            </div>
        </div>
    )
}