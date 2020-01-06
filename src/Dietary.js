import React from 'react';
import Checkbox from './components/Checkbox'
import vegan from './images/vegan.png';
import halal from './images/halal.png';
import glutenfree from './images/glutenfree.png';
import vegetarian from './images/vegetarian.png';
import pesca from './images/pesca.png';

class Dietary extends React.Component {
    state = {
        dietaryChoice: [],
        images: []
    };

    componentDidMount() {
        this.setState({
            images: {
                'vegan': vegan,
                'halal': halal,
                'gluten free': glutenfree,
                'vegetarian': vegetarian,
                'pescatarian': pesca
            }
        })
    }

    updateDietaryChoice = (event) => {
        event.persist();
        const checked = event.target.checked;
        const val = event.target.value;
        this.setState(state => {
            if (checked) {
                return state.dietaryChoice.push(val)
            } else {
                return state.dietaryChoice.splice(state.dietaryChoice.indexOf(event.target.val), 1)
            }
        });
    }

    titleCase(str) {
        const splitStr = str.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.dietaryOptions.map((value, index) => {
                        return (
                            <div className="col" key={value.id}>
                                <Checkbox
                                    clickFunc={this.updateDietaryChoice}
                                    img={this.state.images[value.name]}
                                    value={value.id}
                                    name={value.name}
                                    title={this.titleCase(value.name)} />
                            </div>
                        )
                    })}
                </div>
                <div className="container">
                    <div className="row">
                        <button
                            onClick={() => this.props.filterRestaurantsFunc(this.state.dietaryChoice)}
                            id="restaurantchoice"
                            type="button"
                            className="btn btn-primary btn-lg">Restaurant Options</button>
                    </div>
                </div>
            </div>
        )
    };
}
export default Dietary;