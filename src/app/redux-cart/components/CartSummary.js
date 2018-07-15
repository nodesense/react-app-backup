
import React from "react";
import PropTypes from "prop-types";

export default function CartSummary(props) { 

    let {
        count,
        amount
    } = props;

    return (
        <div> 
        <h2>Cart Summary</h2>
        <p> Amount: {amount} </p>
        <p> Count: {count} </p>
        </div>
    )
     
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}