import React from 'react';

class NavSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div>
        <h3>Notes Page Nav Bar Is Here</h3>
        <p>welcome {this.state.username}</p>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}

export default NavSideBar;
