import React, {Component} from "react";
import PropTypes from "prop-types";


export default class CartItem extends Component {
    constructor(props, context) {
        super(props);
        
        this.state = {
            qty : props.item.qty
        }
    }

      //ES.NEXT
    //babel-preset-env support es.next
    static contextTypes = {
        name: PropTypes.string,
        color: PropTypes.string
    }

    componentWillMount() {
        //to domonstrate context example
        console.log("context name", this.context.name);
    }

    //if qty updated by other source
    componentWillReceiveProps(props) {
        this.setState({
            qty: props.item.qty
        })
    }
    
    componentDidMount() {
        //ref
        if (this.inputElement) {
            this.inputElement.focus();            
        }
    }

    onValueChange(e) {
        //input element
        let target = e.target;
        console.log(target.value);

        this.setState({
            qty: target.value
        })
    }
    
    render() {
        let item = this.props.item;
        console.log("CartItem render ", item.id);

        return (
            <tr>
                <td>{item.name}</td>
                
                <td>{item.price}</td>

                <td>
                   <input value={this.state.qty}
                          type="number"
                          style= { {width: "100px"}}
                          ref = { (inputElement) => this.inputElement = inputElement}
                          onChange = { (e) => { this.onValueChange(e) }}
                    />
                </td>

                <td>{item.price * item.qty}</td>
                
                <td>
                    <button onClick={() => this.props.onUpdate(item.id, parseInt(this.state.qty) || 0) }   >
                        Update
                    </button>
                </td>

                <td>
                    <button onClick={() => this.props.onRemove(item.id) }>
                        Remove
                    </button>
                </td>
            </tr>
        )
    }
}

CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}