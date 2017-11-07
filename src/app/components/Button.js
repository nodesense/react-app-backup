import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            highlight: false
        }
    }
    
    setHighlight(status) {
        this.setState({
            highlight: status
        })
    }
    
    render() {
        return (
            <button className={this.state.highlight? "success": ""}
                        onMouseEnter={() => this.setHighlight(true)}
                        onMouseLeave={() => this.setHighlight(false)}
                        
                        {...this.props}  >
                        {this.props.children}
                    </button>
        )
    }
} 


Button.defaultProps = {
    
}

Button.propTypes = {
    onClick: PropTypes.func
}