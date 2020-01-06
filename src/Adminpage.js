import React from 'react';
import './styles/Adminpage.css';

class Adminpage extends React.Component {



render() {
    return (
       <div>
         <h1>Administration Page</h1>

         <p><button onclick="myFunction()" type="button" class="btn btn-primary btn-md">Amend booking</button></p>

       </div>
    )
  }
}

export default Adminpage;