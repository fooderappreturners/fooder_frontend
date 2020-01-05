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
            <div className="col-6">
                <h1>{name}</h1>
                <p className="desc">{description}</p>
                <p className="address">Address: {location}</p>
                <a className="number" href={`tel:${phoneNumber}`} title={`Call us on: ${phoneNumber}`}>Tel: {phoneNumber}</a>
            </div>
            <div className="row datebook">
                <div className="col">
                    <div className="form-group mx-sm-3 mb-2">
                        <input type='date' />
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Party Size</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5+</option>
                    </select>
                </div>
                <button type="button" class="btn btn-primary">Book</button>
            </div>
        </div>
    )
} 
