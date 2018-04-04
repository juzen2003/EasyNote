import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
  }

  render() {
    return (
      <div>
        <p>This is NavBar</p>
      </div>
    )
  }
}

export default NavBar;
