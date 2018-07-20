// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class CartItem extends PureComponent {
    constructor(props) {
        super(props);

        //TODO: assing from props
        this.state = {
            qty: props.item.qty
        }
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty

    updateQty = (e) => {
        let value = e.target.value;
        this.setState({
            qty: value
        })
    }

    componentWillUnmount() {
        console.log("CartItem will unmount", this.props.item);
    }

    componentDidMount() {
        this.inputElem.focus();
    }
 
   
    render() {
        let {item} = this.props;
        console.log("CartItem Render ", item.id);
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                     <input 
                            value={this.state.qty}
                            type="number"
                            onChange={this.updateQty}

                            ref={ (elem) => this.inputElem = elem }
                     />
                </td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => this.props.updateItem(item.id, this.state.qty)}>
                        Update
                </button>    
                <button onClick={() => this.props.removeItem(item.id)}>
                        Delete
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