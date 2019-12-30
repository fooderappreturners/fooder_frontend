import React from 'react';
import vegan from './images/vegan.jpeg';
import hala from './images/hala.jpeg';
import glutenfree from './images/glutenfree.png';
import vegetarian from './images/vegetarian.jpeg';
import pesca from './images/pesca.png';
import './styles/Header.css';


class Header extends React.Component {
  render() {
    return (
  <div>
  <h1 id="mainHeading">FOODERS</h1>
  <p>We help you navigate the ever changing food scene. Your best friend now joined the V-gang? No problem! </p>
  <p>Your cousin has recently been diagnosed with coeliac? You only eat fish?</p>
  <p>FOODERS are especially for you</p>
  <br />
  <br />
  <div class="container">
        <div class="row">
          <div class="col-sm">
            <img src={hala} alt="halal" class="rounded-circle" />
                <br/>
                Halal
            <div class="input">
              <input type="checkbox" />
            </div>
          </div>
          <div class="col-sm">
            <img src={pesca} alt="Pescatarian" class="rounded-circle" />
                <br/>
                Pescatarian
            <div class="input">
              <input type="checkbox" />
            </div>
          </div>
          <div class="col-sm">
            <img src={glutenfree} alt="Gluten Free" class="rounded-circle"></img>
                <br/>
                Gluten Free
            <div class="input">
              <input type="checkbox" />
            </div>
          </div>
        </div>
            <br/>
            <br/>
      <div class="row">
          <div class="col">
            <img src={vegan} alt="vegan" class="rounded-circle" />
                <br/>
                Vegan
            <div class="input">
                <input type="checkbox" />
            </div>
          </div>
          <div class="col">
            <img src={vegetarian} alt="vegaetarian" class="rounded-circle" />
               <br/>
                Vegetarian
              <div class="input">
                <input type="checkbox" />
              </div>
            </div>
      </div>
    </div>
    <br/>
    <br/>
    <button type="button" class="btn btn-primary btn-lg">Restaurant Listing</button>
  </div>
 )};
}
export default Header;

