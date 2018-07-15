
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Address extends Component {
    constructor(props) {
        super(props);
    }
     
    render() {
        let {city, state, pincode} = this.props;
        return (
            <div> 
            <h2>Address</h2>
            <strong>City</strong><span>{city}</span>
            <strong>State</strong><span>{state}</span>
            <strong>Pincode</strong><span>{pincode}</span>
            </div>
        )
    }
} 


Address.defaultProps = {
    
}

Address.propTypes = {
    
}