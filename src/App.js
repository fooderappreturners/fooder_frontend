import React from 'react';
import axios from "axios";
import moment from "moment";
import Booking from './Booking';
import Header from './Header';
import Restaurants from './Restaurants';
import Dietary from './Dietary';
import Adminpage from './Adminpage';
import "./styles/App.css";

const API_URL = "https://41cpd3sfbg.execute-api.eu-west-2.amazonaws.com/dev/";

class App extends React.Component {
  state = {
    dietaryOptions: [],
    restaurants: [],
    bookings: [],

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
  addNewBooking = () => {
    const bookingsCopy = this.state.bookings.slice();
    const newBooking = {
      name: "",
      date: '',
      number: ''
    };
    axios.post(`${API_URL}addBooking`, newBooking)
      .then((response) => {
        const bookingFromDB = response.data;
        bookingsCopy.push(bookingFromDB)
        console.log(response)
        this.setState({
          bookings: bookingsCopy
        })
      })
      .catch((err) => {
        console.log("Error creating task", err);
      })
  };
  render() {
    return (
      <div>
        <Header title="Member Area" />
        <Dietary
          dietaryOptions={this.state.dietaryOptions}
          filterRestaurantsFunc={this.filterRestaurants} />
        <Restaurants
          restaurants={this.state.restaurants} />
        <Booking />
      </div>
    );
  }
}

export default App;
