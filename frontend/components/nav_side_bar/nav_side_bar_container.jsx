import React from 'react';
import { connect } from 'react-redux';
import NavSideBar from './nav_side_bar';
import { logout } from '../../actions/session_actions'

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavSideBar);
