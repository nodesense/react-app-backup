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
                Copyrights@{props.year}, {props.company}
            </div>
        )
} 


Footer.defaultProps = {
    
}

Footer.propTypes = {
    
}