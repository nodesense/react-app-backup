import React, {Component} from "react";
import PropTypes from "prop-types";

import {NavLink} from "react-router-dom";

export default class ProductHome extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
            <h2>Product Home</h2>


            <div>
                
                <NavLink to="/products" 
                        exact 
                        className="button"  
                        activeClassName="success" >
                        List
                </NavLink>

                
                <NavLink to="/products/create" 
                          
                        className="button"  
                        activeClassName="success" >
                        Create
                </NavLink>
                
                <NavLink to="/products/search" 
                         
                        className="button"  
                        activeClassName="success" >
                        Search
                </NavLink>

            </div>

            <div>
                {this.props.children}
            </div>

            </div>
        )
    }
} 


ProductHome.defaultProps = {
    
}

ProductHome.propTypes = {
    
}