
import React from "react";
import PropTypes from "prop-types";

export default function NotFound(props) { 
        
        //history is passed from Browser/Hash Routes
        //all history apis here 
        //https://www.npmjs.com/package/history
        let history = props.history;

        //match contains two attributes, url and path
        //url is what is shown in address bar
        //path is what is given in <Route path="/pathname"
        let match = props.match;

        //history.push helps to navigate one page to another page

        return (
            <div> 
            <h2>The path you are looking for is not found</h2>
            <p> Please check your path => {props.match.url} </p>

            <h2>Lost Mind? </h2>
            
            <button onClick={ () => history.push('/')}>
               Home
            </button>

            <button onClick={ () => history.push('/cart')}>
               Cart
            </button>

            </div>
        )
}


NotFound.defaultProps = {
    
}

NotFound.propTypes = {
    
}