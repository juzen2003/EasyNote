import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom'
import SessionForm from './session_form';

const mapStateToProps = state => ({
  info: { username: "", password: "" },
  errors: state.errors,
  formType: "Create Account"
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
