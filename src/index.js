import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Booking from './Booking';
import Restaurants from './Restaurants';

const routing = (
    <Router>
      <div>
          {/* need to add a link to the dietary needs and submit buttons. */}
        <Route exact path="/" component={App} />
        <Route path="/Booking" component={Booking} />
        <Route path="/Restaurants" component={Restaurants} />
      </div>
    </Router>
  )

ReactDOM.render(
routing, 
    document.getElementById('root')
    );
 