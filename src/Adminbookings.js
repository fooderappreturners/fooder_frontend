import React from 'react';
import "./styles/App.css";
import bookings from './Adminpage'

class Live extends React.Component {
    newState = {
        bookings: [],
    };
    componentDidMount() {
        this.setState(bookings)
    }
    render() {
        return (
            <div className="container">
                {/* <div className="row">
                    {this.props.bookings.map((bookings) => {
                        return (
                            <div table={bookings}>
                            </div>
                        )
                    })}
                </div> */}
            </div>
        )
    };
}
export default Live;