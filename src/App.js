import React from 'react';
import axios from "axios";
import Booking from './Booking';
import Header from './Header';
import Restaurants from './Restaurants';
import Dietary from './Dietary';
import "./styles/App.css";

const API_URL = "https://41cpd3sfbg.execute-api.eu-west-2.amazonaws.com/dev/";

class App extends React.Component {
  state = {
    dietaryOptions: [],
    restaurants: [],
    bookings: [],
    bookingConfirmed: false
  };
  componentDidMount() {
    axios.get(`${API_URL}dietaryOptions`)
      .then((response) => {
        this.setState({
          dietaryOptions: response.data.dietaryOptions
        });
      })
      .catch((err) => {
        console.log("Error getting task data", err);
      });
    this.restaurantAffiliates();
  }
  restaurantAffiliates = () => {
    axios.get(`${API_URL}restaurants`)
      .then((response) => {
        this.setState({
          restaurants: response.data.restaurants
        });
      })
      .catch((err) => {
        console.log("Error getting task data", err);
      });
  }
  filterRestaurants = (dietaryOptions) => {
    axios.get(`${API_URL}restaurants/${dietaryOptions.slice(',')}`)
      .then((response) => {
        this.setState({
          restaurants: response.data.restaurants
        });
      })
      .catch((err) => {
        console.log("Error getting task data", err);
      });
  }
  //add a new booking 
  addNewBooking = (bookingName, bookingDate, bookingParty, restaurantId) => {
    const bookingsCopy = this.state.bookings.slice();
    const newBooking = {
      id: "2",
      name: bookingName,
      date: bookingDate,
      number: bookingParty,
      restaurant_id: restaurantId
    };

    axios.post(`${API_URL}addBooking`, newBooking)
      .then((response) => {
        const bookingFromDB = response.data;
        bookingsCopy.push(bookingFromDB)
        console.log(response)
        this.setState({
          bookings: bookingsCopy,
          bookingConfirmed: true
        })

      })
      .catch((err) => {
        console.log("Error creating task", err);
      })
  };

  render() {
    return (
      <div>
        <Header />
        <Dietary
          dietaryOptions={this.state.dietaryOptions}
          filterRestaurantsFunc={this.filterRestaurants} />
        <Restaurants
          restaurants={this.state.restaurants}
          addNewBookingFunc={this.addNewBooking}
        />
        {this.state.bookingConfirmed &&
          <Booking />
        }
      </div>
    );
  }
}

export default App;
