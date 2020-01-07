import React from 'react';
import axios from "axios";
import Live from './Adminbookings'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import adminpage from './images/adminpage.png'
import './styles/Adminpage.css';

// const API_URL = "https://41cpd3sfbg.execute-api.eu-west-2.amazonaws.com/dev/";

class Adminpage extends React.Component {
  // newState = {
  //   dietaryOptions: [],
  //   restaurants: [],
  //   bookings: [],
  // };
  // componentDidMount() {
  //   //get all bookings already in system
  //   axios.get(`${API_URL}bookings`)
  //     .then((response) => {
  //       const bookings = response.data;
  //       this.setState({
  //         bookings: bookings
  //       });
  //     })
  //     .catch((err) => {
  //       console.log("Error getting task data", err);
  //     });
  // }
  // //delete booking 
  // deleteTask = id => {
  //   axios.delete(`${API_URL}deleteBooking` + id)
  //     .then((response) => {
  //       const bookingConfirmations = this.state.bookings.filter(task => {
  //         return task.taskId !== id
  //       });
  //       this.setState({
  //         bookings: bookingConfirmations
  //       });
  //     })
  //     .catch((err) => {
  //       console.log("Error deleting task", err);
  //     })
  // }
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <img className="adminlogo" src={adminpage} alt="Admin Page" />
        {/* <Live */}
        {/* // bookings={this.newState.bookings} */}
        {/* /> */}
        <p><button type="button" className="btn btn-primary btn-md">Amend booking</button></p>
        <p><button type="button" className="btn btn-primary btn-md">Delete booking</button></p>
      </div>
    )
  }
}

export default Adminpage;