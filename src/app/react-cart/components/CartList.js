// CartList.js

import React, {Component, PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.items != this.props.items;
    }
    
    render() {
        console.log("CartList Render");

        let {items} = this.props;

        if (items.length == 0) {
            return (
                <div>
                    <p> No Items in cart</p>
                </div>
            )
        }

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }
                    {
                        items.map(item => (
                            <CartItem item={item} 
                                        key={item.id} 
                                        removeItem={this.props.removeItem}
                                        updateItem={this.props.updateItem}
                                        
                                        
                                        />
                        ))
                    }   
                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {

}

CartList.propTypes = {

}