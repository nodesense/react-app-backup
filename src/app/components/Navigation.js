
import React from "react";
import PropTypes from "prop-types";

import {NavLink} from "react-router-dom";

export default function Navigation(props) { 
        return (
            <div> 
               
               <NavLink to="/" 
                       exact 
                       className="button"  
                       activeClassName="success" >
                       Home
               </NavLink>

               <NavLink to="/products" 
                       className="button"  
                       activeClassName="success" >
                       Products
               </NavLink>

               <NavLink to="/cart" 
                       className="button"  
                       activeClassName="success" >
                       Cart [{props.count}]
               </NavLink>


               <NavLink to="/react-cart" 
                       className="button"  
                       activeClassName="success" >
                       React Cart
               </NavLink>

               <NavLink to="/about" 
                       className="button"  
                       activeClassName="success" >
                       About
               </NavLink>

               <NavLink to="/contact" 
                       className="button"  
                       activeClassName="success" >
                       Contact
               </NavLink>
               

               <NavLink to="/component-is-not-here" 
                       className="button"  
                       activeClassName="success" >
                       Not Found
               </NavLink>

               { !props.authenticated &&
               <NavLink to="/login" 
                       className="button"  
                       activeClassName="success" >
                       Login
               </NavLink>
               }

                { props.authenticated &&
                <button onClick={() => props.logout(props.history)} 
                          >
                        Logout
                </button>
               }
               
            </div>
        )
} 


Navigation.defaultProps = {
    
}

Navigation.propTypes = {
    
}