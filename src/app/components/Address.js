
import React from "react";
import PropTypes from "prop-types";

export default function Address(props) { 
        let address = props.address;

        return (
            <div> 
            <h2>Address</h2>
            <p> City  :  {address.city} </p>
            <p> State :  {address.state} </p>
            <p> Pin :  {address.pincode} </p>
            </div>
        )
} 


Address.defaultProps = {
    address : {
        city: '',
        state: '',
        pincode: 0
    }
}

Address.propTypes = {
    address: PropTypes.shape ({
        city: PropTypes.string,
        state: PropTypes.string,
        pincode: PropTypes.number
    })
}