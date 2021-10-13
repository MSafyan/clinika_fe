import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component,isAuthenticated,type,token, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  token:state.auth.token,
  type: state.auth.user?.type
});

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);