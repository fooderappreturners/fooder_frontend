import React from 'react';
import axios from "axios";
import Live from './Adminbookings'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import fooderlogo from './images/fooderlogo.png';
import './styles/Adminpage.css';

class Adminpage extends React.Component {
  render() {
    return (
      <div>

          <button className="home btn btn-primary"><Link to="/">Home</Link></button>
          <h1 id="mainHeading">
            <img className="logo" src={fooderlogo} alt="Fooder" />
          </h1>

          <h1>Administration Page</h1>
        
        <p><button type="button" className="btn btn-primary btn-md">Amend booking</button></p>
        <p><button type="button" className="btn btn-primary btn-md">Delete booking</button></p>
      </div>
    )
  }
}

export default Adminpage;