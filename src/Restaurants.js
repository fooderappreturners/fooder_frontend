import React from 'react';
import restaurant1 from './images/restaurant1.jpeg';
import restaurant2 from './images/salmon.jpeg';
import restaurant3 from './images/restaurant3.jpeg';
import restaurant4 from './images/restaurant4.jpeg';
import restaurant5 from './images/restaurant5.jpeg';
import './styles/Restaurants.css';
import RestPartners from './components/RestPartners';
class Restaurants extends React.Component {
    state = {
        restaurants: [],
        images: []
    };

    componentDidMount() {
        this.setState({
            images: {
                '1': restaurant1,
                '2': restaurant2,
                '3': restaurant3,
                '4': restaurant4,
                '5': restaurant5
            }
        })
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
                    {this.props.restaurants.map((restaurant) => {
                        return (
                            <div className="col" key={restaurant.id}>
                                <RestPartners
                                    img={this.state.images[restaurant.id]}
                                    restaurant={restaurant} />
                            </div>
                        )
                    })}
                </div >
            </div >
        )
    };
}
export default Restaurants;