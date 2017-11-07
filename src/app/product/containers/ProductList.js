import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import ProductList from "../components/ProductList";
import * as actions from "../state/actions";
import {addItemToCart} from "../../cart/state/actions";
 
const mapStateToProps = (state) => {
    return {
         products: state.productState.products,
         loading: state.productState.loading,
         error: state.productState.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        addItemToCart: bindActionCreators(addItemToCart, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductList)