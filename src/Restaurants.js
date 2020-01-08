import React from 'react';
import restaurant1 from './images/restaurant1.png';
import restaurant2 from './images/restaurant2.png';
import restaurant3 from './images/restaurant3.png';
import restaurant4 from './images/restaurant4.png';
import restaurant5 from './images/restaurant5.png';
import RestPartners from './components/RestPartners';
import './styles/Restaurants.css';
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
                            <div key={restaurant.id}>
                                <RestPartners
                                    img={this.state.images[restaurant.id]}
                                    restaurant={restaurant}
                                    addNewBookingFunc={this.props.addNewBookingFunc} />
                            </div>
                        )
                    })}
                </div >
            </div >
        )
    };
}
export default Restaurants;