import React from 'react';
import Booking from './Booking';
import Header from './Header';
import Restaurants from './Restaurants';
import axios from "axios";
import Dietary from './Dietary';
import Restfilter from './Restfilter';
import "./styles/App.css";
class App extends React.Component {
  state = {
    dietaryOptions: []
  };
  componentDidMount() {
    axios.get("https://41cpd3sfbg.execute-api.eu-west-2.amazonaws.com/dev/dietaryOptions")
      .then((response) => {
        const dietaryOptions = response.data;
        this.setState({
          dietaryOptions: dietaryOptions
        });
      })
      .catch((err) => {
        console.log("Error getting task data", err);
      });
  }
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
