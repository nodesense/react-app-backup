// CartSummary.js
import React, {Component, PureComponent} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

// TODO: PureComponent, this implements shouldComponentUpdate
export default class CartSummary extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0,
            stateCode: ''
        }
    }

    componentWillMount() {
        this.recalculate(this.props);
    }

    componentDidMount() {
        // setTimeout( () => {
        //     this.setState({stateCode: 'TN'})
        // }, 3000);
    }

    // called when parent render is called on update cycle  
    componentWillReceiveProps(nextProps) {
        console.log("Cart Summary receive props");
        console.log("Current Props", this.props);
        console.log("Next props ", nextProps);

        if (this.props.count != nextProps.count && 
            this.props.amount != nextProps.amount) {
                this.recalculate(nextProps);
        }

    }

    // called when parent render called on update cycle [props]
    // called when this.setState called on update cycle [state]
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Cart Summary should update");
    //     // BAD for scalablity
    //     if (this.props.count != nextProps.count ||
    //         this.props.amount != nextProps.amount || 
    //         this.state.discount != nextState.discount || 
    //         this.state.grandTotal != nextState.grandTotal) {
    //             return true;
    //         }

    //     return false;
    //     //return true; //call render
    //     //return false: doesn't call render
    // }
 
    //TODO: componentWillMount
    //TODO: componentWillReceiveProps, recalculate 
 
    //TODO: shouldComponentUpdate

    recalculate(props) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        this.setState({
            discount, 
            grandTotal
        })
    }
     


    
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : <strong>{this.props.amount}</strong></p>
            <p> Count : <em>{this.props.count}</em></p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>


            <select value={this.state.stateCode}>
                {
                    ['AP', 'KA', 'KL', 'TN' ].map (s => (
                        <option value={s} key={s}>{s}</option>
                    ))
                }
            </select>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    amount: PropTypes.number,
    count: PropTypes.number.isRequired
}