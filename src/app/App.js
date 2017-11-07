
import React, {Component} from "react";
import PropTypes from "prop-types";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";

//import About from "./components/About";
//import Contact from "./components/Contact";

//import Cart from "./cart/components/Cart"; 

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    //ES.NEXT
    //babel-preset-react in .babelrc for support
    static childContextTypes = {
        color: PropTypes.string,
        name: PropTypes.string
    };


    //context is accessible from all child
    //don't update context
    getChildContext() {
        return {
                color: "purple",
                name: "Product App"
            };
    }
    
    render() {
        return (
            <div> 
            
            <Header></Header>

            {this.props.children}

            <Footer year={2017} company="React App"> </Footer>

            </div>
        )
    }
} 


App.defaultProps = {
    
}

App.propTypes = {
    
}

