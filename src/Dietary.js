import React from 'react';
import Checkbox from './components/Checkbox'
import vegan from './images/vegan.png';
import halal from './images/halal.png';
import glutenfree from './images/glutenfree.png';
import vegetarian from './images/vegetarian.png';
import pesca from './images/pesca.png';

class Dietary extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Checkbox img={halal} name="halal" title="Halal" />
                    </div>
                    <div className="col">
                        <Checkbox img={vegan} name="vegan" title="Vegan" />
                    </div>
                    <div className="col">
                        <Checkbox img={pesca} name="pescatarian" title="Pescatarian" />
                    </div>
                    <div className="col">
                        <Checkbox img={glutenfree} name="gluten_free" title="Gluten Free" />
                    </div>
                    <div className="col">
                        <Checkbox img={vegetarian} name="vegatarian" title="Vegatarian" />
                    </div>
                </div>
                <button id="restaurantchoice" type="button" className="btn btn-primary btn-lg">Restaurant Options</button>
            </div>
        )
    };
}
export default Dietary;