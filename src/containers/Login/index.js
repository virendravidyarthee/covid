import React from 'react';
import { getEmail, getPassword, getIsLoading } from './reducer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: getEmail(state),
  password: getPassword(state),
  is_loading: getIsLoading(state),
});

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  is_loading: PropTypes.bool,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(Login);
