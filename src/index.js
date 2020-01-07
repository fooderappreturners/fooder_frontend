import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Booking from './Booking';
import Restaurants from './Restaurants';
import Adminpage from './Adminpage';

const routing = (
  <Router>
    <div>
      {/* need to add a link to the dietary needs and submit buttons. */}
      <Route exact path="/" component={App} />
      <Route path="/Booking" component={Booking} />
      <Route path="/Restaurants" component={Restaurants} />
      <Route path="/Adminpage" component={Adminpage} />
      <Link />

    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
