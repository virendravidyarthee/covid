import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const signed = true;

  /**
   * Redirect user to SignIn page if he tries to access a private      route
   * without authentication.
   */

  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
RouteWrapper.defaultProps = {
  isPrivate: false,
};
