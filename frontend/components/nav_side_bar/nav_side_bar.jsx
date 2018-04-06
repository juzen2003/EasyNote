import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class NavSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  // handleRedirect(e) {
  //   e.preventDefault();
  //   console.log("click");
  //   this.props.history.push('/note')
  //   // <Redirect to='/note'/>
  // }

  render() {
    return (
      <div className="side-bar-area">
        <img className="side-bar-logo" src="/logo.png" alt="Logo"/>
        <ul>
          <li>
            <Link to="/note"><i className="material-icons plus-icon" onClick={this.handleRedirect}>add_circle_outline</i></Link>
          </li>
        </ul>
        <i className="material-icons logout-icon" onClick={this.handleLogout}>power_settings_new</i>
      </div>
    )
  }
}

export default NavSideBar;
