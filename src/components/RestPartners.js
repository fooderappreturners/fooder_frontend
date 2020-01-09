import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/RestPartners.css'

class RestPartners extends React.Component {

    state = {
        newDate: "",
        newNumber: "",
        newName: "",
    };

    updateName = (event) => {
        this.setState({
            newName: event.target.value
        });
    }

    updateDate = (event) => {
        this.setState({
            newDate: event.target.value
        });
    }

    updateNumber = (event) => {
        this.setState({
            newNumber: event.target.value
        });
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state.newName, this.state.newDate, this.state.newNumber, this.props.restaurant.id)
        this.props.addNewBookingFunc(this.state.newName, this.state.newDate, this.state.newNumber, this.props.restaurant.id, this.props.restaurant.name);
    }

    render() {
        const { name, location, description, phoneNumber } = this.props.restaurant;
        const img = this.props.img;
        return (
            <div className="row restaurant">
                <div className="col-4">
                    <div className="diningPlacesCol">
                        <img className="restPic" src={img} alt={name} />
                    </div>
                </div>
                <div className="col-8" id="blurb">
                    <div className="row">
                        <div className="col-12">
                            <h1>{name}</h1>
                            <p className="desc">{description}</p>
                            <p className="address">Address: {location}</p>
                            <a className="number" href={`tel:${phoneNumber}`} title={`Call us on: ${phoneNumber}`}>Tel: {phoneNumber}</a>
                        </div>
                    </div>
                    <div className="order row">
                        <div className="name col-3">
                            <input type="text" className="form-control" placeholder="First name" value={this.state.newName} onChange={this.updateName} />
                        </div>
                        <div className="date col-3">
                            <input type='date' value={this.state.newDate} onChange={this.updateDate} />
                        </div>
                        <div className="party col-3">
                            <select className="form-control" id="exampleFormControlSelect1" value={this.state.newNumber} onChange={this.updateNumber}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>
                        <div className="books col-3">
                            <button type="button" onClick={this.handleClick} className="book btn btn-primary">Book</button>
                        </div>
                    </div>

                </div>
                <div className="row" id="datebook" />
            </div>
        )
    }

}

export default RestPartners;
