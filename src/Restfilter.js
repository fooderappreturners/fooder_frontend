import React from 'react';
import './styles/Restfilter.css';

class Button extends React.Component {

    handleClick = (event) => {
        event.preventDefault();
        this.props.restaurantFilter(this.props.options);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <button
                        onClick={this.handleClick}
                        id="restaurantchoice"
                        type="button"
                        className="btn btn-primary btn-lg">Restaurant Options</button>
                </div>
            </div>
        )
    };
}
export default Button;