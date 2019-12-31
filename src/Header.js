import React from 'react';
import './styles/Header.css';


class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1 id="mainHeading">FOODER</h1>
        </header>
        <p>Fooder is here to help you with your dining needs!</p>
        <p>Does your friendship group have several dietary needs, but you still wish to dine together?</p>
        <p>Use our simple app below to get recommendations on where to eat.</p>
      </div>
    )
  };
}
export default Header;