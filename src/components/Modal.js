import React from 'react';
import moment from 'moment';

class Modal extends React.Component {

    state = {
        date: null
    };

    componentDidMount() {
        this.setState({
            date: moment(this.props.booking.date).format('YYYY-MM-DD')
        });
    }

    render() {
        return (
            <div className="modal fade" id={`modal_${this.props.booking.booking_id}`} tabIndex=" - 1" role="dialog" aria-labelledby={`modal_${this.props.booking.booking_id}Label`} aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" role="document" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`modal_${this.props.booking.booking_id}Label`}>Edit Booking</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h3>{this.props.booking.r_name}</h3>
                            <p>{this.props.booking.location}</p>
                            <input name="date" type="date" onChange={event => this.setState({ date: moment(event.target.value).format('YYYY-MM-DD') })} value={moment(this.state.date).format('YYYY-MM-DD')} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" data-dismiss="modal" onClick={() => this.props.handler({ date: this.state.date }, this.props.booking.booking_id)} className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div >
            </div >
        )

    }
}

export default Modal;