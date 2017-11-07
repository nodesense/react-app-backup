
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import ProductEdit from "../components/ProductEdit";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
         product: state.productState.product
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductEdit)