import React from 'react';
import restaurant1 from './images/restaurant1.jpeg'
import salmon from './images/salmon.jpeg'
import restaurant3 from './images/restaurant3.jpeg'
import restaurant4 from './images/restaurant4.jpeg'
import restaurant5 from './images/restaurant5.jpeg'


class Restaurants extends React.Component {

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <img src={restaurant1} width="300" height="200" alt='restaurant' />
                    </div>
                    <div class="col">
                        <h3 id="heading">Vegan Paradise</h3>
                        <p>Address: 37 Edge St, Manchester M4 1HW</p>
                        <p>Hours: 12-10PM</p>
                        <input class="datepicker" data-date-format="mm/dd/yyyy"></input>
                        <button type="button" class="btn btn-primary btn-lg">Book</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <img src={salmon} width="300" height="200" alt='restaurant' />
                    </div>
                    <div class="col">
                        <h3 id="heading">Fish Frenzy</h3>
                        <p>Address: 37 Edge St, Manchester M4 1HW</p>
                        <p>Hours: 12-10PM</p>
                        <input class="datepicker" data-date-format="mm/dd/yyyy"></input>
                        <button type="button" class="btn btn-primary btn-lg">Book</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <img src={restaurant3} width="300" height="200" alt='restaurant' />
                    </div>
                    <div class="col">
                        <h3 id="heading">Vegetarian Vault</h3>
                        <p>Address: 37 Edge St, Manchester M4 1HW</p>
                        <p>Hours: 12-10PM</p>
                        <input class="datepicker" data-date-format="mm/dd/yyyy"></input>
                        <button type="button" class="btn btn-primary btn-lg">Book</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <img src={restaurant4} width="300" height="200" alt='restaurant' />
                    </div>
                    <div class="col">
                        <h3 id="heading">Halal Heaven</h3>
                        <p>Address: 37 Edge St, Manchester M4 1HW</p>
                        <p>Hours: 12-10PM</p>
                        <input class="datepicker" data-date-format="mm/dd/yyyy"></input>
                        <button type="button" class="btn btn-primary btn-lg">Book</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <img src={restaurant5} width="300" height="200" alt='restaurant' />
                    </div>
                    <div class="col">
                        <h3 id="heading">Gluten-Free Gastro</h3>
                        <p>Address: 37 Edge St, Manchester M4 1HW</p>
                        <p>Hours: 12-10PM</p>
                        <input class="datepicker" data-date-format="mm/dd/yyyy"></input>
                        <button type="button" class="btn btn-primary btn-lg">Book</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Restaurants;