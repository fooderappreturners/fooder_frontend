import React from 'react';
import Booking from './Booking';
import Header from './Header';
import Restaurants from './Restaurants';
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />,
        <Restaurants />,
        <Booking />,

      </div>
    );
  }
}

export default App;
