// Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 5}
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }
    
    addItem = (id, price) => {
        id = id || Math.ceil(Math.random() * 10000);
        price = price || Math.ceil(Math.random() * 100);
        let item = {
            id,
            name: `Product ${id}`,
            price: price,
            qty: 1
        }

        //TODO:
        //BAD
        //let items = this.state.items;
        //items.push(item); // BAD, mutating array

        //GOOD, immutable way
        let items = [...this.state.items, item]

        this.setState({
            //items: items
            items // es6 sugar
        })

        this.recalculate(items)
    }
    
    removeItem = (id) => {
    //TODO
        let items = this.state
                        .items
                        .filter (item => item.id != id);
        
        this.setState({
            items
        })

        this.recalculate(items);
     }

    updateItem = (id, qty) => {
        //TODO

        let items = this.state.items.map (item => {
            if (item.id == id) {
                //BAD, mutating item object
                //item.qty = parseInt(qty)
                return {...item, qty: parseInt(qty)};
            }
            return item;
        })

        this.setState({items});
        this.recalculate(items);
    }

    empty = () => {
        //TODO

        this.setState({
            items: []
        });

        this.recalculate([]);
         
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate(items) {
        let count = 0, 
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            amount,
            count
        })
    }

    //TODO:
    //componentWillMount
    componentWillMount() {
        console.log("Cart will mount");
        this.recalculate(this.state.items);
    }

    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={() => this.addItem(undefined, undefined)}>
                Add Item
            </button>

            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            
            <CartList  items={this.state.items}
                       removeItem={this.removeItem}
                       updateItem={this.updateItem}
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}