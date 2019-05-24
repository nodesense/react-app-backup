
import {connect} from "react-redux";

import CartList from "../components/CartList";

// return props
export const mapStateToProps = (state) => {
    return {
         items: state.items // (.items from combineReducer/store.js)
    }
}

export default connect(mapStateToProps, 
                       null) (CartList)