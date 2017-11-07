import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
    constructor(props) {
        super(props);
    }

    addItem() {
        let id = Math.ceil(Math.random() * 1000000);
        let item = {
            id: id,
            name: 'Product ' + id,
            price: 100 + Math.ceil(Math.random() * 1000),
            qty: 1
        }

        this.props.actions.addItemToCart(item);
    }
 

    removeItem(id) {
        this.props.actions.removeItemFromCart(id);
    }

    updateItem(id, qty) {
        this.props.actions.updateItemInCart(id, qty);
    }

    emptyCart() {
        this.props.actions.emptyCart();
    }
    
    render() {
        console.log("Cart render");

        return (
            <div > 
            <h2>Cart</h2>

            <button onClick={()=> this.addItem()}>
                Add Item
            </button>
 
            <button     onClick={()=> this.emptyCart()}   >
                Empty
            </button>

 
  

            <CartList items = {this.props.items} 
                      onRemove = {(id) => this.removeItem(id)}
                      onUpdate = {(id, qty) => this.updateItem(id, qty)}
            >
            </CartList>

            <CartSummary amount={this.props.amount}
                         count = {this.props.count}            
            >
            </CartSummary>

            </div>
        )
    }
} 

Cart.defaultProps = {
    items: [],
    amount: 0,
    count: 0
}

Cart.propTypes = {
    
}