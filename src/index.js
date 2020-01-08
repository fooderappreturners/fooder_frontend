import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Booking from './Booking';
import Restaurants from './Restaurants';
import Admin from "./Adminpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Adminpage" component={Admin} />
      <Route path="/Booking" component={Booking} />
      <Route path="/Restaurants" component={Restaurants} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
