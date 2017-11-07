
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Login from "../components/Login";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
         
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (Login)