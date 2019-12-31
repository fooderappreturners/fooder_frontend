import React from 'react'
import '../styles/Checkbox.css';

export default (props) => {
    return (
        <div className="dietary-checkbox">
            <input id={props.name} type="checkbox" name={props.name} value={props.title} />
            <label htmlFor={props.name}><img src={props.img} alt={props.title} />{props.title}</label>
        </div>
    )
} 