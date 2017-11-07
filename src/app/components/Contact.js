
import React, {Component} from "react";
import PropTypes from "prop-types";

import Address from "./Address";

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
            <h2>Contact</h2>

            <Address address={ {city: 'Bangalore', state: 'KA', pincode: 560060} }>
            </Address>
            
            </div>
        )
    }
} 


Contact.defaultProps = {
    
}

Contact.propTypes = {
    
}