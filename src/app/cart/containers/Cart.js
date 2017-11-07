
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Cart from "../components/Cart";
import * as actions from "../state/actions";
import {reCalculate} from "../state/selectors";


const mapStateToProps = (state) => {
    let {amount, count} = reCalculate(state.cart.cartItems);

    return {
         items: state.cart.cartItems,
         amount: amount,
         count: count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (Cart)