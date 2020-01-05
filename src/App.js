import React from 'react';
import axios from "axios";
import moment from "moment";
import Booking from './Booking';
import Header from './Header';
import Restaurants from './Restaurants';
import Dietary from './Dietary';
import Restfilter from './Restfilter';
import "./styles/App.css";

const API_URL = "https://41cpd3sfbg.execute-api.eu-west-2.amazonaws.com/dev/";

class App extends React.Component {
  state = {
    dietaryOptions: []
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
  }

  filterRestaurants = (options) => {
    console.log(options, 'options for api call');
    axios.get(`${API_URL}restaurants`) //need to add id prop
  }
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

  bookings = () => {
    axios.get(`${API_URL}bookings`)
      .then((response) => {
        const bookings = response.data;
        this.setState({
          bookings: bookings
        });
      })
      .catch((err) => {
        console.log("Error getting task data", err);
      });
  }

  deleteTask = id => {
    axios.delete(`${API_URL}deleteBooking` + id)
      .then((response) => {
        const bookingConfirmations = this.state.bookings.filter(task => {
          return task.taskId !== id
        });
        this.setState({
          bookings: bookingConfirmations
        });
      })
      .catch((err) => {
        console.log("Error deleting task", err);
      })
  }
  render() {
    return (
      <div>
        <Header />
        <Dietary
          dietaryOptions={this.state.dietaryOptions}
          filterRestaurantsFunc={this.filterRestaurants} />
        <Restaurants />
        <Booking />
      </div>
    );
  }
}

export default App;
