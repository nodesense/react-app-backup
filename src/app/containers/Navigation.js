import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";

import Navigation from "../components/Navigation";
import {logout} from "../auth/state/actions";

const mapStateToProps = (state) => {
    console.log("NAV Map");
    return {
         authenticated: state.authState.authenticated,
         count: state.cart.cartItems.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: bindActionCreators(logout, dispatch)
    }
}

const NavigationContainer =  connect(mapStateToProps, 
                    mapDispatchToProps) (Navigation);

//wrap it over withRouter to get access to history api
//this also helps whenever there is a change in routes navigation,
//it helps to re-render navigation container


export default withRouter(NavigationContainer);