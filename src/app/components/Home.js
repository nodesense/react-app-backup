import React, {Component} from "react";
import PropTypes from "prop-types";

import Like from "./Like";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            likes : 0
        }
    }

    up() {
        this.setState( {
            likes : this.state.likes + 1
        })
    }

    down() {
        this.setState({
            likes: this.state.likes - 1
        })
    }
     
    
    render() {
        return (
            <div> 
            <h2>Home</h2>

            <Like likes={this.state.likes} 
                  onUp={() => this.up()} 
                  onDown={() => this.down()} 
            >
             Home
            </Like>
            </div>
        )
    }
} 


Home.defaultProps = {
    
}

Home.propTypes = {
    
}