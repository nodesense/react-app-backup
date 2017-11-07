import React, { PropTypes } from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component, exact = false, path, authenticated }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      authenticated ? (
        React.createElement(component, props)
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}
  />
);

const { object, bool, string, func } = PropTypes;

AuthRoute.propTypes = {
  component: func.isRequired,
  exact: bool,
  path: string.isRequired,
  authenticated: bool.isRequired,
  location: object
};

//Add the container

import {connect} from "react-redux";

const mapStateToProps = (state) => {
  console.log("Auth State", state.authState);
  
  return {
    authenticated: state.authState.auth.authenticated
  }
}

export default connect(mapStateToProps)
               (AuthRoute);