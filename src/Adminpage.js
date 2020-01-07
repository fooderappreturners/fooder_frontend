import React from 'react';
import axios from "axios";
import Live from './Adminbookings'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import adminlogo from './images/adminlogo.png'
import './styles/Adminpage.css';

class Adminpage extends React.Component {
  render() {
    return (
      <div>

         <button className="home btn btn-secondary"><Link to="/">Home</Link></button> 

          <h1>Administration Page</h1>
        <img className="adminlogo" src={adminlogo} alt="Admin Page" />
        <p><button type="button" className="btn btn-primary btn-md">Amend booking</button></p>
        <p><button type="button" className="btn btn-primary btn-md">Delete booking</button></p>
      
      </div>
    )
  }
}

export default Adminpage;