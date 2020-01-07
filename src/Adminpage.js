import React from 'react';
import axios from "axios";
import Live from './Adminbookings'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import adminpage from './images/adminpage.png'
import './styles/Adminpage.css';

class Adminpage extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <img className="adminlogo" src={adminpage} alt="Admin Page" />
        <p><button type="button" className="btn btn-primary btn-md">Amend booking</button></p>
        <p><button type="button" className="btn btn-primary btn-md">Delete booking</button></p>
        <Live />
      </div>
    )
  }
}

export default Adminpage;