import React from 'react';
import "./styles/App.css";
import bookings from './Adminpage'

class Live extends React.Component {
    //need a table with all the bookings to display
    state = {
        bookings: [],
    };
    componentDidMount() {
        this.setState({
            bookings

        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">

                </div>
            </div>
        )
    };
}
export default Live;