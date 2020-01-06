import React from 'react';
import menu from './images/menu.png';
import './styles/Booking.css';

class Booking extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="col-lg-6">
                    <fieldset className="border">
                    <legend className="text-centre">Booking Confirmation</legend>
                            <img className="menu" src={menu} width="200px" height="80" alt="menu" />
                        <br />

                        <p id="innerPara" type="text">
                            Your Booking has now been confirmed:
                        <br />
                            Restaurant:
                        <br />
                            Date:
                        <br />
                            Time:
                        <br />
                            If you need to Cancel or Amend your booking for any reason please contact
                            us on 0161 222 3344

                        </p>
                    
                    </fieldset>
                </div>
            </div>
        );
    }
}

export default Booking;