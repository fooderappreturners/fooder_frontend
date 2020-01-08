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
            <div className="col-6" id="blurb">
                <h1>{name}</h1>
                <p className="desc">{description}</p>
                <p className="address">Address: {location}</p>
                <a className="number" href={`tel:${phoneNumber}`} title={`Call us on: ${phoneNumber}`}>Tel: {phoneNumber}</a>
            </div>
            <div className="row" id="datebook">
                <div className="col">
                    <input type="text" class="form-control" placeholder="First name" value={this.state.newName} onChange={this.state.updateNewBooking}></input>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type='date' />
                    </div>
                </div>
                <div className="col form-group">
                    <label for="exampleFormControlSelect1"></label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6+</option>
                    </select>
                    {/* //throw error when 6+ is required to state you need to call the restaurant to book*/}
                </div>
                <button type="button" className="book btn btn-primary">Book</button>
            </div>
        </div>
    )
} 
