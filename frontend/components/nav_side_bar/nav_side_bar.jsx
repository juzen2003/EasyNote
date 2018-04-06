import React from 'react';

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

  render() {
    return (
      <div className="side-bar-area">
        <ul>
          <li>
            <img className="side-bar-logo" src="/logo.png" alt="Logo"/>
          </li>
          <li>
            <p>welcome {this.state.username}</p>
          </li>
          <li>
            <button onClick={this.handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavSideBar;
