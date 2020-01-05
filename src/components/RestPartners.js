import React from 'react'
import '../styles/RestPartners.css'

export default (props) => {
    const { id, name, capacity, location, description, phoneNumber } = props.restaurant;
    const img = props.img;
    return (
        <div className="row restaurant">
            <div className="col-4">
                <div className="diningPlacesCol">
                    <img className="restPic" src={img} alt={name} />
                </div>
            </div>
            <div className="col-8">
                <h1>{name}</h1>
                <p className="desc">{description}</p>
                <p className="address">Address: {location}</p>
                <a className="number" href={`tel:${phoneNumber}`} title={`Call us on: ${phoneNumber}`}>Tel: {phoneNumber}</a>
            </div>

        </div>
    )
} 