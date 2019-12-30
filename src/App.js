import React from 'react';
import Booking from './Booking';
import Header from './Header';
import Restaurants from './Restaurants';
import Dietary from './Dietary';
import Restfilter from './Restfilter';
import "./styles/App.css";


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Dietary />
        <Restfilter />
        <Restaurants />
        <Booking />
      </div>
    );
  }
}

export default App;
