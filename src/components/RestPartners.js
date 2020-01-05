import React from 'react'
import '../styles/RestPartners.css'

export default (props) => {
    const { id, name, capacity, location, description, phoneNumber } = props.restaurant;
    const img = props.img;
    return (
        <div className="restaurant">
            <img src={img} alt={name} />
            <h1>{name}</h1>
            <p>Capacity: {capacity}</p>
            <p>Location: {location}</p>
            <p>{description}</p>
            <a href={`tel:${phoneNumber}`} title={`Call us on: ${phoneNumber}`}>Tel: {phoneNumber}</a>
        </div>
    )
} 