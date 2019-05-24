/*
  Learn about properties, default props
*/

import React from "react";
import PropTypes from "prop-types";

//import "./footer.css";

export default function Footer(props) { 
        return (
            <div className="highlight"> 
            <hr />
             <p>Copyrights@{props.year}, {props.company}</p>
            </div>
        )
} 


Footer.defaultProps = {
    
}

Footer.propTypes = {
    
}