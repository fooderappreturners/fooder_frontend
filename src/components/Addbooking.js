import React from 'react'
import '../styles/RestPartners.css'

class Add extends React.Component {
    state = {
        newId: "",
        newDate: "",
        newNumber: "",
        newName: "",
        newRestaurant_Id: ""
    };

    updateNewBooking = (event) => {
        console.log(event.target.value)
        this.setState({
            newBooking: event.target.value
        });
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.addNewBookingFunc(this.state.newBooking, this.state.newDate, this.state.newId, this.state.newName, this.state.newRestaurant_Id);
        this.setState({
            newBooking: ""
        });
    }

    render() {
        return (
            <div className="row restaurant">
                <div className="col-4">
                    <div className="diningPlacesCol">
                        <img className="restPic" src={this.img} alt={this.name} />
                    </div>
                </div>
                <div className="col-6" id="blurb">
                    <h1>{this.name}</h1>
                    <p className="desc">{this.state.description}</p>
                    <p className="address">Address: {this.state.location}</p>
                    <a className="number" href={`tel:${this.state.phoneNumber}`} title={`Call us on: ${this.state.phoneNumber}`}>Tel: {this.state.phoneNumber}</a>
                </div>
                <div className="row" id="datebook">
                    <div className="col">
                        <input type="text" class="form-control" placeholder="First name" value={this.state.newName} onChange={this.state.updateNewBooking}></input>
                        <div className="form-group mx-sm-3 mb-2">
                            <input type='date' value={this.state.newDate} onChange={this.state.updateNewBooking} />
                        </div>
                    </div>
                    <div className="col form-group">
                        <label for="exampleFormControlSelect1"></label>
                        <select className="form-control" id="exampleFormControlSelect1" value={this.state.newNumber} onChange={this.state.updateNewBooking}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6+</option>
                        </select>
                        {/* //throw error when 6+ is required to state you need to call the restaurant to book*/}
                    </div>
                    <button type="button" onClick={this.handleClick} className="book btn btn-primary">Book</button>
                </div>
            </div>
        )
    }
}

export default Add;
