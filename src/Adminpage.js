import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './styles/Adminpage.css';

class Adminpage extends React.Component {



render() {
    return (
       <div>
        <ul>
        <li><Link to="/">Home</Link></li>
        </ul>
         <h1>Administration Page</h1>

         <p><button type="button" class="btn btn-primary btn-md">Amend booking</button></p>
         <p><button type="button" class="btn btn-primary btn-md">Delete booking</button></p>
         
     </div>
    )
  }
}

export default Adminpage;