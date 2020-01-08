import React from 'react';
import menu from './images/menu.png';
import './styles/Booking.css';

class Booking extends React.Component {

    render() {

        const paraStyle = {
            textAlign: "left"
        };
        const imageStyle = {
            textAlign: "right"
        }
        return (

            <div className="container">
                <div className="row">
                    <div className="col-4" style={imageStyle} >
                        <img className="menu" src={menu} alt="menu" />
                    </div>
                    <div className="col-8">
                        <legend className="text-centre">Booking Confirmation</legend>
                        <p style={paraStyle}>
                            Your Booking has now been confirmed:
                            <br />
                            Restaurant: {this.props.restaurantName}
                            <br />
                            Date: {this.props.bookingDate}
                            <br />
                            If you need to Cancel or Amend your booking for any reason please contact
                            us on 0161 222 3344

                            </p>

                    </div>
                </div>
            </div >
        );
    }
}

export default Booking;