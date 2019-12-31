import React from 'react';
import './styles/Restfilter.css';

class Button extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <button id="restaurantchoice" type="button" className="btn btn-primary btn-lg">Restaurant Options</button>
                </div>
            </div>
        )
    };
}
export default Button;