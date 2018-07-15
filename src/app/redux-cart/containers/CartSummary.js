
import {connect} from "react-redux";
//import { createSelector } from 'reselect'

import CartSummary from "../components/CartSummary";

//Good reselect package
//BAD

function recalculate(items) {
    console.log("RECALCULATE ", items)
    let amount = 0, 
        count = 0;

    for(let item of  items) {
        amount += item.qty * item.price;
        count  += item.qty; 
    }

    return {
        amount, //ES6 sugar amount: amount
        count
    }
}

// reselect

// const itemsFilter = (state) => state.items
// const recalculateSelector = createSelector([itemsFilter],
//                                       (items ) => recalculate(items))

const mapStateToProps = (state) => {
    let result = recalculate(state.items);
    //let result = recalculateSelector(state);

    // old style
    return {
         amount: result.amount,
         count: result.count
    }
    //OR 
    //ES6
    //return {...result};
}
 

export default connect(mapStateToProps, 
                    null) (CartSummary)