import React from 'react';
import './styles/Header.css';


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 id="mainHeading">FOODER</h1>
        <p>Fooder is here to help you with yur dining needs!
          Does your friendship group have several dietary needs, but you still wish to dine together?
          Use our simple app below to get recommendations on where to eat.
        </p>
      </div>
    )
  };
}
export default Header;

