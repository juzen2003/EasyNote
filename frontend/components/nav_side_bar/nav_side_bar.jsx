import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import NotebooksIndexContainer from '../notebooks/notebooks_index_container'

class NavSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleLogout = this.handleLogout.bind(this);
    this.handleNotebooksClick = this.handleNotebooksClick.bind(this);
    this.handleRemoveModal = this.handleRemoveModal.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleNotebooksClick(e) {
    e.preventDefault();
    const modals = document.getElementsByClassName("notebooks-modal-area");
    // debugger;
    for(let i = 0; i < modals.length; i++) {
      if(modals[i].classList.contains("is-open")) {
        modals[i].classList.remove("is-open");
      } else {
        modals[i].classList.add("is-open");
      }
    }
  }

  handleRemoveModal(e) {
    e.preventDefault();
    const modals = document.getElementsByClassName("is-open");
    // debugger;
    for(let i = 0; i < modals.length; i++) {
        modals[i].classList.remove("is-open");
    }
  }

  render() {
    return (
      <div>
      <div className="side-bar-area">
        <img className="side-bar-logo" src="/logo.png" alt="Logo"/>
        <ul>
          <li>
            <Link to="/notes/new"><i className="material-icons plus-icon" >add_circle_outline</i></Link>
          </li>
          <li>
            <Link to="/notes" onClick={this.handleRemoveModal}><i className="material-icons notes-icon">description</i></Link>
          </li>
          <li>
            <i className="material-icons notebooks-icon" onClick={this.handleNotebooksClick}>library_books</i>
          </li>
        </ul>
        <i className="material-icons logout-icon" onClick={this.handleLogout}>power_settings_new</i>

      </div>
        <div className="notebooks-modal-area" onClick={this.handleNotebooksClick}>
          <NotebooksIndexContainer />
        </div>
     </div>
    )
  }
}

export default NavSideBar;
