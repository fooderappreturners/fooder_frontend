import React from 'react';
import greenTick from './images/greenTick.png';

class Booking extends React.Component {

    render() {
        return (
            <div class="container">
                <div class="row">
                    <h1 id="Heading">Booking Confirmation</h1>
                    <img src={greenTick} width="300" height="400" alt="big tick" />
                </div>
            </div>
        );
    }
}

export default Booking;