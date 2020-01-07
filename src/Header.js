import React from 'react';
import { Link } from 'react-router-dom';
import fooderlogo from './images/fooderlogo.png';
import './styles/Header.css';


class Header extends React.Component {

  render() {
    return (
      <div>
        <header>
        
          <button className="member btn"><Link to="/Adminpage">Members Area</Link></button>
          <br />
  
          <h1 id="mainHeading">
            <img className="logo" src={fooderlogo} alt="Fooder" />
          </h1>
        </header>
        <p><strong>Fooder</strong> is here to help you with your dining needs!</p>
        <p>Does your friendship group have several dietary needs, but you still wish to dine together?</p>
        <p>Use our simple app below to get recommendations on where to eat.</p>
      </div>
    )
  };
}
export default Header;