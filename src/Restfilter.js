import React from 'react';
import './styles/Restfilter.css';

class Button extends React.Component {
    state = {
        dietarySelection: "",
    };

    restaurantDietSelection = (event) => {
        console.log(event.target.value)
        this.setState({
            dietarySelection: event.target.value
        });
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.dietarySelection(this.state.dietarySelection);
        this.setState({
            dietarySelection: ""
        });
    }
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