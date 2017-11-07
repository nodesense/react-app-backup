import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class CartSummary extends PureComponent {
    constructor(props) {
        super(props);
    }
     

    
    render() {
        console.log("CartSummary render");
        
        return (
            <div>
            <h2>Cart Summary</h2>

            <h2>Total {this.props.amount}</h2>
            <h2>Count  {this.props.count}</h2>

            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}