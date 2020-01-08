import React from 'react';
import axios from "axios";
import Live from './Adminbookings'
import moment from 'moment';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Modal from './components/Modal';
import adminpage from './images/adminlogo.png'
import './styles/Adminpage.css';

const API_URL = "https://41cpd3sfbg.execute-api.eu-west-2.amazonaws.com/dev/";
class Adminpage extends React.Component {
  state = {
    bookings: []
  };
  componentDidMount() {
    this.fetchBookings();
    setInterval(() => this.fetchBookings(), 3.6e+6);
  }
  fetchBookings() {
    axios.get(`${API_URL}bookings`)
      .then((response) => {
        this.setState({
          bookings: response.data.bookings
        });
      })
  }
  amendBooking(data, id) {
    axios.put(`${API_URL}amendBooking/${id}`, {
      date: data.date
    })
      .then(() => this.fetchBookings())
      .catch((err) => {
        console.log("Error amending booking", err);
      })
  }
  // axios update booking function
  deleteBooking(id) {
    axios.delete(`${API_URL}deleteBooking/${id}`)
      .then(() => this.fetchBookings())
      .catch((err) => {
        console.log("Error deleting booking", err);
      })

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6"><h1>Administration Page</h1></div>
          <div className="col-6"><button className="home btn btn-secondary"><Link to="/">Home</Link></button></div>

        </div>
        <div className="row">
          <div className="col-6"><img className="adminlogo" src={adminpage} alt="Admin Page" /></div>
        </div>
        <div className="row">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Restaurant</th>
                <th scope="col">Name</th>
                <th scope="col">People</th>
                <th scope="col">Date</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.bookings.map((booking, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>
                      <strong>{booking.r_name}</strong><br />
                      {booking.location}
                    </td>
                    <td>{booking.booking_name}</td>
                    <td>{booking.number}</td>
                    <td>{moment(booking.date).format('DD/MM/YYYY')}</td>
                    <td>
                      <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#modal_${booking.booking_id}`}>Amend</button>
                      <button type="button" onClick={() => this.deleteBooking(booking.booking_id)} className="btn btn-danger">Delete</button>
                      <Modal booking={booking} handler={this.amendBooking.bind(this)} />
                    </td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>



      </div>
    )
  }
}

export default Adminpage;