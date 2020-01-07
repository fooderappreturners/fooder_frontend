import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';
import fooderlogo from './images/fooderlogo.png';


class Header extends React.Component {
  
  render() {
    return (
      <div>
        <header>
          <ul>
            <li> 
              <Link to="/Adminpage">Members Area</Link>
            </li>
          </ul>
            <h1 id="mainHeading">
              <img className="logo" src={fooderlogo} alt="Fooder" />
            </h1>
        </header>
          <p>Fooder is here to help you with your dining needs!</p>
          <p>Does your friendship group have several dietary needs, but you still wish to dine together?</p>
          <p>Use our simple app below to get recommendations on where to eat.</p>
      </div>
    )
  };
}
export default Header;