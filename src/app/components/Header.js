import React, {Component} from "react";
import PropTypes from "prop-types";

import Navigation from "../containers/Navigation";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
            <h2>React App</h2>
            <Navigation>
            </Navigation>
            <hr />
            </div>
        )
    }
} 


Header.defaultProps = {
    
}

Header.propTypes = {
    
}