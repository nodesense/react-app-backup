
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import CartItem from "../components/CartItem";
import * as actions from "../state/actions";

 
// function is invoked only once per component instance
export const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: function(id) {
            dispatch(actions.removeItem(id))
            
        },

        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, 
                    mapDispatchToProps) (CartItem)