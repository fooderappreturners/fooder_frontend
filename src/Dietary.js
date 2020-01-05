import React from 'react';
import Checkbox from './components/Checkbox'
import RestFilter from './Restfilter';
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
        console.log(event.target.value, this.state.dietaryChoice);
        this.setState(state => {
            //manipulate dietarychoice here
            state.dietaryChoice.splice()
            state.dietaryChoice.push('woopdido')

            return state;
        });

        console.log(this.state, 'the state')
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
                                    value={value.id} name={value.name}
                                    title={this.titleCase(value.name)} />
                            </div>
                        )
                    })}

                </div>
                <RestFilter
                    options={this.state.dietaryChoice}
                    restaurantFilter={this.props.filterRestaurantsFunc} />
            </div>
        )
    };
}
export default Dietary;