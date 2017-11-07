import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

export default function Like(props) { 
        return (
            <div> 
            {props.children}

            <h2>Like {props.likes} </h2>

            <Button onClick={ () => props.onUp()} >
                +1
            </Button>


            <Button onClick={ () => props.onDown()} >
                -1
            </Button>

            </div>
        )
} 

Like.defaultProps = {
    
}

Like.propTypes = {
    onUp: PropTypes.func.isRequired,
    onDown: PropTypes.func.isRequired
}